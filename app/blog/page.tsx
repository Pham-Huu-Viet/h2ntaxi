import Link from "next/link";

export const metadata = {
  title: "Blog Taxi Hà Nội | Kinh nghiệm thuê xe, đặt xe sân bay",
  description:
    "Tổng hợp bài viết về taxi Hà Nội, thuê xe hợp đồng, taxi sân bay Nội Bài, kinh nghiệm đặt xe giá rẻ.",
};

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

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Blog Taxi tại Hà Nội
      </h1>

      <p className="mb-10 text-gray-600">
        Chia sẻ kinh nghiệm thuê xe, taxi sân bay, taxi đường dài và tối ưu chi
        phí di chuyển.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog, i) => (
          <Link
            key={i}
            href={blog.href}
            className="w-full max-w-sm rounded-xl border p-5 shadow hover:shadow-lg"
          >
            <h2 className="font-semibold text-gray-800">{blog.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
