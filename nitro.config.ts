import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  prerender: {
    crawlLinks: true,
    routes: ["/sitemap.xml", "/robots.txt"],
  },
});
