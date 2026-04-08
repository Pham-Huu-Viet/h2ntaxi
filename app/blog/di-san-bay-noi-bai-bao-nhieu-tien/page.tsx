// app\blog\di-san-bay-noi-bai-bao-nhieu-tien\page.tsx

import BlogLayout from "@/components/blog/BlogLayout";
import { airportData } from "@/data/airport-taxi";

export const metadata = {
  title: "Đi sân bay Nội Bài bao nhiêu tiền? Giá taxi Hà Nội 2026",
  description:
    "Chi phí đi sân bay Nội Bài từ Hà Nội bao nhiêu tiền? So sánh taxi, xe công nghệ, xe bus và cách tiết kiệm chi phí.",
};

export default function Page() {
  const avg =
    airportData.toAirport.reduce((a, b) => a + b.price.seats5, 0) /
    airportData.toAirport.length;

  return (
    <BlogLayout
      title="Đi sân bay Nội Bài bao nhiêu tiền?"
      description="Phân tích chi phí đi sân bay Nội Bài từ Hà Nội."
      image="/hero-bg-airport.png"
    >
      {/* INTRO */}
      <p>
        Khi chuẩn bị cho một chuyến bay, một trong những câu hỏi phổ biến nhất
        của người dân Hà Nội là: “Đi sân bay Nội Bài bao nhiêu tiền?”. Đây là
        vấn đề rất thực tế vì chi phí di chuyển có thể ảnh hưởng đáng kể đến
        tổng chi phí chuyến đi, đặc biệt với những người thường xuyên công tác
        hoặc du lịch.
      </p>

      <p>
        Trên thực tế, chi phí đi sân bay Nội Bài không cố định mà phụ thuộc vào
        nhiều yếu tố như: phương tiện, quãng đường, thời điểm và loại xe bạn lựa
        chọn.
      </p>

      {/* GIÁ */}
      <h2>Chi phí taxi đi sân bay Nội Bài</h2>

      <p>
        Với taxi truyền thống hoặc taxi dịch vụ, giá trung bình từ trung tâm Hà
        Nội đi sân bay dao động khoảng:
      </p>

      <p className="text-2xl font-bold text-red-500">
        ~ {Math.round(avg).toLocaleString()}đ / chuyến (xe 5 chỗ)
      </p>

      <ul>
        {airportData.toAirport.map((item, i) => (
          <li key={i}>
            {item.district}:{" "}
            <strong>{item.price.seats5.toLocaleString()}đ</strong>
          </li>
        ))}
      </ul>

      <p>Với xe 7 chỗ, giá thường cao hơn khoảng 30.000đ – 50.000đ.</p>

      {/* SO SÁNH */}
      <h2>So sánh các phương tiện đi sân bay</h2>

      <p>Ngoài taxi, bạn có thể lựa chọn nhiều phương tiện khác:</p>

      <ul>
        <li>
          <strong>Xe bus:</strong> rẻ nhất (30.000đ – 50.000đ) nhưng bất tiện
          nếu có hành lý
        </li>
        <li>
          <strong>Xe công nghệ:</strong> giá linh hoạt, dễ tăng vào giờ cao điểm
        </li>
        <li>
          <strong>Taxi sân bay:</strong> ổn định, tiện lợi nhất
        </li>
      </ul>

      <p>
        Nếu bạn đi một mình và không có nhiều hành lý, xe bus là lựa chọn tiết
        kiệm. Tuy nhiên, với gia đình hoặc nhóm 2–4 người, taxi lại là phương án
        hợp lý hơn.
      </p>

      {/* YẾU TỐ */}
      <h2>Những yếu tố ảnh hưởng đến giá</h2>

      <ul>
        <li>Khoảng cách từ điểm đón</li>
        <li>Thời điểm (giờ cao điểm, ban đêm)</li>
        <li>Loại xe (5 chỗ, 7 chỗ)</li>
        <li>Lưu lượng giao thông</li>
      </ul>

      <p>
        Ví dụ: nếu bạn đi vào giờ cao điểm buổi sáng hoặc tối, giá có thể tăng
        đáng kể do kẹt xe và nhu cầu cao.
      </p>

      {/* MẸO */}
      <h2>Cách đi sân bay tiết kiệm nhất</h2>

      <ul>
        <li>Đặt xe trước để tránh tăng giá</li>
        <li>Đi ghép nếu có thể</li>
        <li>Chọn xe 5 chỗ nếu không cần rộng</li>
        <li>Tránh giờ cao điểm</li>
      </ul>

      <p>
        Một mẹo nhỏ là đặt xe trước 1–2 giờ, bạn sẽ có giá ổn định hơn so với
        việc gọi xe gấp.
      </p>

      {/* KHI NÀO CHỌN TAXI */}
      <h2>Khi nào nên chọn taxi sân bay?</h2>

      <ul>
        <li>Đi cùng gia đình</li>
        <li>Có nhiều hành lý</li>
        <li>Bay sớm hoặc muộn</li>
        <li>Cần đúng giờ tuyệt đối</li>
      </ul>

      <p>Taxi sân bay là lựa chọn an toàn nhất trong các trường hợp này.</p>

      {/* SEO BLOCK */}
      <h2>Kết luận</h2>

      <p>
        Như vậy, chi phí đi sân bay Nội Bài từ Hà Nội thường dao động khoảng
        250.000đ – 300.000đ tùy khu vực và loại xe. Nếu bạn ưu tiên sự tiện lợi,
        đúng giờ và thoải mái, taxi sân bay vẫn là lựa chọn tốt nhất.
      </p>

      {/* CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 p-6 text-white shadow-lg">
        <p className="text-lg font-bold">
          👉 Đặt taxi sân bay giá rẻ ngay hôm nay
        </p>
        <p className="mb-3 text-white/90">
          Xe đời mới – đúng giờ – không phát sinh chi phí
        </p>
        <a
          href="/dat-xe-san-bay"
          className="inline-block rounded-full bg-white px-6 py-2 font-bold text-red-500"
        >
          Đặt xe ngay
        </a>
      </div>
    </BlogLayout>
  );
}
