/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Développement seulement : ouvrir le site local depuis le téléphone, sur le même Wi-Fi
  allowedDevOrigins: ["192.168.1.23"],
}

module.exports = nextConfig