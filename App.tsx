import type React from "react"
import { Calendar, Github, Send, Twitter } from "lucide-react"
import "./App.scss"

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>GrowthMate</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>AI-Powered Recommendations for Web3 Users</h2>
            <p>Transform user transaction data into predictions of future behavior</p>
            <button className="cta-button">Launch App</button>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h3>About GrowthMate</h3>
            <p>
              GrowthMate uses AI to transform user transaction data into predictions of future behavior. We leverage
              this to deliver user-aware Ads and curated content feeds, driving higher engagement and increased returns
              for Web3 platforms.
            </p>
            <div className="key-metrics">
              <div className="metric">
                <h4>80%</h4>
                <p>Prediction Accuracy for Next User Actions</p>
              </div>
              <div className="metric">
                <h4>6x</h4>
                <p>Higher CTR on Ads than traditional platforms</p>
              </div>
              <div className="metric">
                <h4>40k+</h4>
                <p>Users Served</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="products">
          <div className="container">
            <h3>Our Products</h3>
            <div className="product-list">
              <div className="product">
                <h4>Personalized Ads</h4>
                <p>Engage users with highly relevant, on-chain based content</p>
              </div>
              <div className="product">
                <h4>Curated Feeds</h4>
                <p>Deliver tailored content to boost user engagement</p>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="partners">
          <div className="container">
            <h3>Our Partners</h3>
            <div className="partner-list">
              <div className="partner">Pikespeak</div>
              <div className="partner">Burrow</div>
              <div className="partner">Meta Pool</div>
              <div className="partner">Ref Finance</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <a href="https://cal.com/growthmate-xyz/30min" target="_blank" rel="noopener noreferrer">
                <Calendar /> Schedule a Meeting
              </a>
              <a href="https://t.me/growthmate_xyz" target="_blank" rel="noopener noreferrer">
                <Send /> Telegram
              </a>
              <a href="https://github.com/growthmate" target="_blank" rel="noopener noreferrer">
                <Github /> GitHub
              </a>
              <a href="https://twitter.com/growthmate_xyz" target="_blank" rel="noopener noreferrer">
                <Twitter /> Twitter
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 GrowthMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
