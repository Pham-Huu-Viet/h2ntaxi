"use client";

import { usePathname } from "next/navigation";
import { BlogList } from "./BlogList";

export function BlogListWrapper() {
  const pathname = usePathname();

  if (pathname === "/blog") return null;

  return <BlogList />;
}
