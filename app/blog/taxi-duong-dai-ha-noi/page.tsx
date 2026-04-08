// app\blog\taxi-duong-dai-ha-noi\page.tsx

import BlogLayout from "@/components/blog/BlogLayout";
import { longDistanceData } from "@/data/long-distance";

export const metadata = {
  title: "Taxi đường dài Hà Nội giá bao nhiêu? Đi tỉnh, về quê chi tiết 2026",
  description:
    "Dịch vụ taxi đường dài Hà Nội đi tỉnh, xe về quê giá bao nhiêu? Bảng giá chi tiết, kinh nghiệm tiết kiệm chi phí.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Taxi đường dài Hà Nội – Giải pháp đi tỉnh tiện lợi"
      description="Phân tích chi tiết dịch vụ taxi đường dài, xe về quê từ Hà Nội."
      image="/hero-bg-contract.png"
    >
      {/* INTRO */}
      <p>
        Trong những năm gần đây, nhu cầu di chuyển đường dài từ Hà Nội đi các
        tỉnh như Hải Phòng, Quảng Ninh, Nam Định, Thanh Hóa… ngày càng tăng
        mạnh. Thay vì lựa chọn xe khách truyền thống, nhiều người đã chuyển sang
        sử dụng dịch vụ taxi đường dài bởi sự tiện lợi, chủ động và thoải mái
        hơn rất nhiều.
      </p>

      <p>
        Đặc biệt với các chuyến đi gia đình, đi công tác hoặc về quê dịp lễ Tết,
        taxi đường dài gần như là lựa chọn tối ưu nhất. Bạn không cần chen chúc,
        không cần chờ đợi, và hoàn toàn làm chủ hành trình của mình.
      </p>

      {/* GIÁ */}
      <h2>Bảng giá taxi đường dài Hà Nội mới nhất</h2>

      <p>
        Giá taxi đường dài thường được tính theo km hoặc theo chuyến tùy từng
        đơn vị. Dưới đây là mức giá tham khảo cho xe 5 chỗ:
      </p>

      <ul>
        {longDistanceData.car5.routes.map((route, i) => (
          <li key={i}>
            {route.to.vi}: <strong>{route.price.toLocaleString()}đ/km</strong> (
            {route.limit})
          </li>
        ))}
      </ul>

      <p>
        Với xe 7 chỗ, giá thường cao hơn khoảng 1.000đ – 2.000đ/km tùy quãng
        đường.
      </p>

      {/* GIẢI THÍCH */}
      <h2>Taxi đường dài là gì?</h2>

      <p>
        Taxi đường dài là dịch vụ vận chuyển hành khách từ Hà Nội đi các tỉnh
        hoặc ngược lại, với quãng đường thường trên 50km. Khác với taxi nội
        thành, dịch vụ này được tối ưu cho hành trình dài, đảm bảo sự thoải mái
        và tiết kiệm chi phí.
      </p>

      <p>Thông thường, khách hàng có thể lựa chọn:</p>

      <ul>
        <li>Đi 1 chiều (phù hợp khi không quay lại)</li>
        <li>Đi 2 chiều (tiết kiệm hơn nếu đi về trong ngày)</li>
        <li>Thuê xe trọn gói theo ngày</li>
      </ul>

      {/* SO SÁNH */}
      <h2>So sánh taxi đường dài và xe khách</h2>

      <p>
        Nhiều người vẫn phân vân giữa việc đi taxi đường dài hay xe khách. Dưới
        đây là so sánh thực tế:
      </p>

      <ul>
        <li>
          <strong>Taxi:</strong> Đón tận nơi, không phải chờ, riêng tư, linh
          hoạt
        </li>
        <li>
          <strong>Xe khách:</strong> Giá rẻ hơn nhưng phải ra bến, đông đúc
        </li>
      </ul>

      <p>
        Nếu bạn đi 2–4 người, chi phí taxi chia ra không chênh lệch nhiều so với
        xe khách, nhưng trải nghiệm lại tốt hơn rất nhiều.
      </p>

      {/* WHEN TO USE */}
      <h2>Khi nào nên sử dụng taxi đường dài?</h2>

      <p>Taxi đường dài phù hợp trong nhiều trường hợp:</p>

      <ul>
        <li>Đi về quê cùng gia đình</li>
        <li>Đi công tác cần đúng giờ</li>
        <li>Du lịch nhóm nhỏ</li>
        <li>Chở nhiều hành lý</li>
      </ul>

      <p>
        Đặc biệt vào dịp lễ, Tết, nhu cầu tăng cao khiến xe khách thường quá
        tải, taxi đường dài trở thành lựa chọn an toàn và tiện lợi hơn.
      </p>

      {/* LỢI ÍCH */}
      <h2>Lợi ích khi đi taxi đường dài</h2>

      <ul>
        <li>Đón tận nơi – trả tận nơi</li>
        <li>Không phải chờ đợi</li>
        <li>Riêng tư, thoải mái</li>
        <li>Chủ động thời gian</li>
      </ul>

      <p>
        Ngoài ra, tài xế thường có kinh nghiệm chạy đường dài, giúp chuyến đi an
        toàn và êm ái hơn.
      </p>

      {/* MẸO */}
      <h2>Kinh nghiệm đặt taxi đường dài giá rẻ</h2>

      <ul>
        <li>Đặt xe trước ít nhất 1 ngày</li>
        <li>Chọn đi 2 chiều để giảm giá</li>
        <li>Đi ghép nếu có thể</li>
        <li>So sánh giữa 5 chỗ và 7 chỗ</li>
      </ul>

      <p>
        Một mẹo quan trọng là luôn hỏi rõ giá trọn gói trước khi đi để tránh
        phát sinh chi phí không mong muốn.
      </p>

      {/* SEO BLOCK */}
      <h2>Taxi đường dài Hà Nội – xu hướng mới</h2>

      <p>
        Với sự phát triển của dịch vụ vận tải, taxi đường dài đang dần thay thế
        xe khách truyền thống trong nhiều trường hợp. Người dùng ngày càng ưu
        tiên sự tiện lợi, thoải mái và an toàn.
      </p>

      <p>
        Nếu bạn đang tìm kiếm dịch vụ taxi đường dài, xe về quê hoặc taxi đi
        tỉnh từ Hà Nội, đây là giải pháp đáng cân nhắc.
      </p>

      {/* CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 p-6 text-white shadow-lg">
        <p className="text-lg font-bold">
          👉 Đặt taxi đường dài Hà Nội ngay hôm nay
        </p>
        <p className="mb-3 text-white/90">
          Nhận báo giá nhanh – xe đời mới – tài xế chuyên nghiệp
        </p>
        <a
          href="/dat-xe-duong-dai"
          className="inline-block rounded-full bg-white px-6 py-2 font-bold text-red-500"
        >
          Đặt xe ngay
        </a>
      </div>
    </BlogLayout>
  );
}
