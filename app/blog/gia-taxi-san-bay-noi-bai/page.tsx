// app\blog\gia-taxi-san-bay-noi-bai\page.tsx
import BlogLayout from "@/components/blog/BlogLayout";
import { airportData } from "@/data/airport-taxi";

export default function Page() {
  return (
    <BlogLayout
      title="Giá taxi sân bay Nội Bài Hà Nội 2026"
      description="Cập nhật bảng giá taxi sân bay Nội Bài mới nhất."
      image="/hero-bg-airport.png"
    >
      <p>
        Taxi sân bay Nội Bài là dịch vụ không thể thiếu đối với người dân Hà Nội
        cũng như khách du lịch. Với khoảng cách 25–30km từ trung tâm thành phố,
        việc lựa chọn phương tiện phù hợp là rất quan trọng.
      </p>

      <h2>Bảng giá taxi đi sân bay</h2>

      <ul>
        {airportData.toAirport.map((item, i) => (
          <li key={i}>
            {item.district}: {item.price.seats5.toLocaleString()}đ
          </li>
        ))}
      </ul>

      <h2>Những yếu tố ảnh hưởng giá</h2>

      <ul>
        <li>Khu vực đón</li>
        <li>Loại xe</li>
        <li>Thời điểm</li>
      </ul>

      <h2>Kinh nghiệm đặt taxi sân bay</h2>

      <p>Đặt trước là cách tốt nhất để đảm bảo có xe và không bị tăng giá.</p>

      <div className="mt-10 rounded-xl bg-red-500 p-6 text-white">
        <a href="/dat-xe-san-bay">👉 Đặt taxi sân bay</a>
      </div>
    </BlogLayout>
  );
}
