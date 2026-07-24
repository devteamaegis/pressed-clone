import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    "url": "https://pressed.com/",
    "changeFrequency": "weekly",
    "priority": 1
  },
  {
    "url": "https://pressed.com/shop",
    "changeFrequency": "weekly",
    "priority": 0.7
  },
  {
    "url": "https://pressed.com/our-journey",
    "changeFrequency": "weekly",
    "priority": 0.7
  },
  {
    "url": "https://pressed.com/juice-bar-locations",
    "changeFrequency": "weekly",
    "priority": 0.7
  },
  {
    "url": "https://pressed.com/flavor-quiz",
    "changeFrequency": "weekly",
    "priority": 0.7
  },
  {
    "url": "https://pressed.com/catering",
    "changeFrequency": "weekly",
    "priority": 0.7
  },
  {
    "url": "https://pressed.com/juice-subscription-membership/signup",
    "changeFrequency": "weekly",
    "priority": 0.7
  }
];
}
