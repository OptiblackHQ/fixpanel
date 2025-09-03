/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath:'/fixpanel',
	assetPrefix: '/fixpanel/',
	// Uncomment the following lines if you want to set basePath and assetPrefix conditionally based on the environment
	// basePath: process.env.NODE_ENV === 'production' ? '/fixpanel' : '',
	output: "export",
	trailingSlash: true, // Updated option name
	images: {
	  unoptimized: true, // Optional: Disable image optimization for static export
	},
	// assetPrefix: process.env.NODE_ENV === 'production' ? '/fixpanel' : '',
	reactStrictMode: false

};

module.exports = nextConfig;
