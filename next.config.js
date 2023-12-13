/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {hostname: "images.unsplash.com"},
            {hostname: "lh3.googleusercontent.com"},
            {hostname: "pexels.com"},
            {hostname: "logowik.com"},
            {hostname: "giphy.com"},
            {hostname: "hips.hearstapps.com"},
            {hostname: "www.mitsubishicars.com"}
        ],
    },
    experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
