/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/our-services",
				destination: "/",
				permanent: true, // true untuk redirect permanen (308), false untuk sementara (307)
			},
		];
	},
	images: {
		unoptimized: true, // Allows images from any domain, disabling optimization
	},
	eslint: {
		ignoreDuringBuilds: true, // Menonaktifkan pemeriksaan ESLint selama build
	},
};

export default nextConfig;
