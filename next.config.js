/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	serverExternalPackages: ["three", "gsap", "motion", "ogl"],
};

module.exports = nextConfig;
