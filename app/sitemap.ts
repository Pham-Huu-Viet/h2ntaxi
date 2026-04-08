// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://h2ntaxi.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1, // Trang chủ ưu tiên cao nhất
    },
    {
      url: `${baseUrl}/thue-xe-hop-dong`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dat-xe-san-bay`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dat-xe-duong-dai`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // BLOG POSTS
    {
      url: `${baseUrl}/blog/bang-gia-thue-xe-hop-dong-ha-noi`,
      lastModified: currentDate,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/doanh-nghiep-thue-xe-hop-dong-ha-noi`,
      lastModified: currentDate,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/thue-xe-hop-dong-ha-noi`,
      lastModified: currentDate,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/di-san-bay-noi-bai-bao-nhieu-tien`,
      lastModified: currentDate,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/taxi-duong-dai-ha-noi`,
      lastModified: currentDate,
      priority: 0.6,
    },
  ];
}
