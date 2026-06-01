import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? '/2ndcareer' : '',
  assetPrefix: isGithubPages ? '/2ndcareer/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: isGithubPages,
};

export default nextConfig;
