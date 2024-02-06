/** @type {import('next').NextConfig} */
const nextConfig = {
  head: {
    // Add or modify the link tag to include the new favicon
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/images/newLogo.svg", // Adjust the path if needed
      },
    ],
  },
};

module.exports = nextConfig;
