// components\blog\BlogList.tsx

import { BookOpen } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    title: "Bảng giá thuê xe hợp đồng Hà Nội",
    href: "/blog/bang-gia-thue-xe-hop-dong-ha-noi",
  },
  {
    title: "Doanh nghiệp nên thuê xe hay đi taxi?",
    href: "/blog/doanh-nghiep-thue-xe-hop-dong-ha-noi",
  },
  {
    title: "Thuê xe hợp đồng Hà Nội",
    href: "/blog/thue-xe-hop-dong-ha-noi",
  },
  {
    title: "Đi sân bay Nội Bài bao nhiêu tiền?",
    href: "/blog/di-san-bay-noi-bai-bao-nhieu-tien",
  },
  {
    title: "Taxi đường dài Hà Nội",
    href: "/blog/taxi-duong-dai-ha-noi",
  },
];

export function BlogList() {
  return (
    <section className="bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-5">
          <BookOpen className="text-primary" size={22} />{" "}
          <h3 className="text-xl font-bold text-gray-900">Bài viết hữu ích</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={blog.href}
              className="group w-full rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:w-[48%] lg:w-[30%]"
            >
              <h4 className="group-hover:text-primary text-base font-semibold text-gray-800">
                {blog.title}
              </h4>
              <p className="mt-1 text-sm text-gray-500">Xem chi tiết →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
