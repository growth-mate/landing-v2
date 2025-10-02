---
title: "The False Choice Between Revenue and Performance"
author: "GrowthMate"
date: "2025-08-06"
excerpt: "In the digital advertising world, a philosophical war has raged for two decades. On one side are the revenue maximalists, disciples of the pure auction where the highest bidder unconditionally wins the impression. On the other hand, there are performance purists who argue that only user relevance matters and that the best ad, not the most expensive, should always prevail. ..."
---

In the digital advertising world, a philosophical war has raged for two decades. On one side are the revenue maximalists, disciples of the pure auction where the highest bidder unconditionally wins the impression. On the other hand, there are performance purists who argue that only user relevance matters and that the "best" ad, not the most expensive, should always prevail. Platforms have traditionally been forced to pick a side, optimizing their ad-serving algorithms for either short-term revenue or long-term user satisfaction, treating them as mutually exclusive goals.


This dichotomy, however, is a false one. It's a relic of a less sophisticated era of ad tech. An analysis of GrowthMate's production-grade ad-serving algorithm reveals a third path: a multi-factor optimization model that transcends the simplistic revenue-versus-relevance debate. It serves as a crossroad for the Web 3's rich financial activity and the efficiencies of AI Agents and Machine Learning mechanisms. 


In this article, we will dissect GrowthMate's recommendation logic and see how modern ad platforms balance economic incentives, user experience, and advertiser outcomes in a single, elegant equation.


## Deconstructing a Modern Campaign-Selection Algorithm


The system in question, developed by GrowthMate for their public-facing API, doesn't just pick a winner. It runs a multi-stage process to determine which ad to serve, at what price, to which user. It's a blend of hard filters, machine learning, auction theory, and platform governance, all executed in real-time.


### Stage 1: The Candidate Funnel and Publisher Controls


Before any auction or scoring can occur, the platform establishes the field of play. A SQL query first gathers all active campaigns that have sufficient budget and fall within their scheduled run dates. But immediately, the algorithm introduces layers of non-economic filtering -- a critical assertion of publisher control over their ad space.


The code reveals explicit support for three types of ad unit filters:
1.  **Campaign Blacklists (`CampaignIdOut`):** Allowing a publisher to unilaterally block specific campaigns from ever running on their property, regardless of their bid.
2.  **Campaign Whitelists (`CampaignIdIn`):** Enabling a publisher to create an exclusive environment where only an enumerated list of advertisers can compete.
3.  **Tag-Based Filtering (`TagIn`, `TagOut`):** Giving publishers categorical control, ensuring that ads align with their content standards by including or excluding campaigns based on their assigned topic tags (e.g., "DeFi", "Gaming", "NFTs").


This initial filtering stage is strategically significant. It establishes that the auction is not a pure free-for-all. The platform empowers publishers with granular controls to protect their brand and user experience *before* considering the economic value of an impression.


### Stage 2: The Scoring Engine 
Once the pool of eligible and compliant candidates is established, the core of the algorithm comes into play: a weighted scoring system designed to find the optimal ad, and not just the richest one. The final score is a mix of four distinct sub-scores, each representing a different stakeholder's interest in the ecosystem.


The formula can be expressed as:

```
Overall Score = (50% * Relevance) 
                + (16.6% * Price) 
                + (16.6% * Urgency) 
                + (16.6% * Diversity)
```

Let's break down each component.


#### **Relevance Score (50% Weight): The User's Vote**


The largest single factor in determining the winning ad is relevance. The system moves beyond crude demographics, calling a dedicated machine learning service to create a nuanced, real-time profile of the user based on their on-chain activity.


This isn't a single "interest" tag. The predictor returns a hierarchical classification of the user's likely interests:
*   **`cat2`:** A highly specific tag (e.g., `yield-farming-on-solana`).
*   **`cat1s`:** Broader parent categories (e.g., `defi`).
*   **`cat0s`:** The most general categories (e.g., `finance`).


The algorithm then assigns weights to these predictions (`WEIGHT_CAT2`, `WEIGHT_CAT1`, `WEIGHT_CAT0`), with more specific tags receiving higher weights. It then matches this weighted list of user tags against the tags assigned to each candidate campaign. The resulting `raw_tag_scores` represent the most direct measure of user-campaign affinity, and the 50% weighting makes it the single most important factor in the final decision.


#### **Price Score (16.6% Weight): The Advertiser's Bid**


While an advertiser's bid is a key input, the system avoids a simple "highest bid wins" model. Instead, the price score is derived from an `effective_cpm` calculated through a mechanism that blends a second-price auction with dynamic pricing rules. This `effective_cpm` represents the fair market price for an impression, and it is this calculated price, not the original bid, that is used for scoring.


The logic is multi-layered:

*  **Identifying Targeted Campaigns**: First, the algorithm determines which campaigns are "targeted" by checking if the user's profile (e.g., net worth, predicted tags) matches the campaign's specific targeting criteria.
*  **Internal Auction**: An auction is conducted *only* among the targeted campaigns to establish a price benchmark. The system identifies the highest bid and the second-highest bid from this group.
*  **Calculating `effective_cpm`**: Every candidate campaign, whether targeted or not, is then assigned an `effective_cpm` based on these auction results:
   - The **winning targeted campaign**'s price is set to one cent more than the second-highest bid. This is the core of the **second-price auction**, which incentivizes advertisers to bid their true valuation without fear of overpaying.
   - **Non-winning targeted campaigns** remain unchanged at their full bid.
   - **Non-targeted campaigns** can still compete. If no targeted campaign is interested in the impression and the non-targeted campaign’s bid is higher than all targeted campaigns, they win the auction at one cent above the second highest bid. Otherwise, they abstain from the auction and do not bid.
*  **Final Score**: As a final safety check, the `effective_cpm` is capped at the campaign's original CPM. It is then scaled to produce the `cpm_score`.


This mechanism is designed to discover the fair market price for an impression rather than simply awarding it to the highest nominal bid. The `cpm_score` is then fed into the `Overall Score`, ensuring price is a factor, but not the only one.


##### A Practical Example


To see how this works, consider a user interested in "DeFi" and classified as "High Net Worth." Four campaigns are competing for the impression on an ad slot with a $1.00 minimum CPM:


| Campaign | Advertiser           | Bid (CPM) | Target Audience                |
|:---------|:--------------------|:----------|:-------------------------------|
| A        | Crypto Wallet        | $5.00     | High Net Worth & DeFi users    |
| B        | NFT Game             | $4.00     | NFT users                      |
| C        | DeFi Protocol        | $3.50     | DeFi users                     |
| D        | Blockchain Analytics | $6.00     | Anyone (untargeted)            |


Here's the breakdown:


*  **Identify Targeted Campaigns:** Campaign **A** and **C** are a match for the user.
*  **Run Internal Auction:** Among the targeted campaigns, the highest bid is **$5.00** (A) and the second-highest is **$3.50** (C).
*  **Calculate Final Prices:**
   - **Campaign A (Targeted Winner):** Pays the second-highest price + $0.01. Its `effective_cpm` is **$3.51**.
   - **Campaign C (Targeted Non-Winner):** Remains at its full bid. Its `effective_cpm` is **$3.50**.
   - **Campaign B (Non-Targeted, Lower Bid):** Its $4.00 bid is less than the top targeted bid ($5.00), so it does not bid. Its `effective_cpm` is **$1.00**.
   - **Campaign D (Non-Targeted, Higher Bid):** Its $6.00 bid is higher than the top bid ($5.00), so it pays a premium over that bid. Its `effective_cpm` is **$5.01**.


These final `effective_cpm` values are then used to calculate the `cpm_score`, demonstrating that the "price" of an ad is a dynamic value discovered by the auction.




#### **Urgency Score (16.6% Weight): The Campaign's Needs**


The platform also considers the operational status of the campaign itself. The `urgency_score` is calculated as `impressions_remaining / time_remaining`. This simple but effective formula acts as an automated pacer.


A campaign with a large budget and little time left will have a high urgency score, increasing its chances of being served. This benefits advertisers by helping them fulfill their campaign goals, and it benefits the platform by ensuring budgets are spent, maximizing overall platform revenue over the long term.


#### **Diversity Score (16.6% Weight): The Platform's Health**


Finally, the algorithm incorporates a mechanism to ensure no single campaign dominates the ad space. It maintains a list of the last 100 impressions served. The `recency_score` is calculated to be inversely proportional to a campaign's recent impression frequency.


If a campaign has been shown many times recently, its recency score will be low, diminishing its `Overall Score`. This prevents ad fatigue for users, gives smaller campaigns a chance to win impressions, and fosters a more competitive and diverse marketplace. 


## Optimizing for Ecosystem Health, Not Transactional Value


The conventional wisdom of optimizing for either revenue or relevance is a false choice because it views an ad impression as an isolated event. This algorithm demonstrates a more sophisticated philosophy: the ad ecosystem is a complex, interconnected system.


By weighting relevance highest, the platform prioritizes the user experience, building the long-term asset of an engaged audience. By incorporating a second-price auction and urgency scores, it respects advertiser goals and incentivizes rational bidding. And by enforcing diversity, it maintains the health and competitiveness of its own marketplace.


The result is a system that is fairer for both campaigns and their target audience. A campaign with a lower CPM can legitimately beat a higher-bidding competitor if it is more relevant, more urgent, or if the higher bidder has already saturated the ad space. The price paid is not the maximum the winner was willing to offer, but a market-discovered value based on competition. This is a system designed not for maximum extraction from a single transaction, but for maximum *value creation* for the entire ecosystem over the long run.
