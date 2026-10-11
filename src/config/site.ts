export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Carve a Pumpkin Wiki",
  shortName: "Carve a Pumpkin",
  logoText: "CP",
  tagline: "Codes, Designs & Guide",
  description: "Carve a Pumpkin Wiki provides carving guides, pumpkin designs, gameplay tips, codes, and useful information to help players create amazing Halloween pumpkins.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://carve-a-pumpkin.wiki",
  supportEmail: "support@carve-a-pumpkin.wiki",
  gameUrl: "https://www.roblox.com/games/98648469784274/Carve-a-Pumpkin",
  heroVideoId: "jxzx-gSeIQQ", // Roblox Carve a Pumpkin gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
