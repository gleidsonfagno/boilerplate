/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

const nextConfig = withPWA({
  reactStrictMode: true
})

module.exports = nextConfig
