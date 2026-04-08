// app\blog\doanh-nghiep-thue-xe-hop-dong-ha-noi\page.tsx

import BlogLayout from "@/components/blog/BlogLayout";
import { contractRentalData } from "@/data/contract-rental";

export const metadata = {
  title:
    "Doanh nghiệp nên thuê xe hợp đồng hay đi taxi? Giải pháp tối ưu chi phí tại Hà Nội",
  description:
    "Phân tích chi phí thực tế khi doanh nghiệp sử dụng taxi 15-20 chuyến/ngày và giải pháp thuê xe hợp đồng giúp tiết kiệm.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Doanh nghiệp nên thuê xe hợp đồng hay đi taxi?"
      description="Giải pháp tối ưu chi phí vận hành cho doanh nghiệp tại Hà Nội."
      image="/hero-bg-contract.png"
    >
      {/* INTRO */}
      <p>
        Với các doanh nghiệp tại Hà Nội, đặc biệt là công ty có đội ngũ kinh
        doanh, kỹ thuật hoặc vận hành, nhu cầu di chuyển hàng ngày là rất lớn.
        Tuy nhiên, nhiều doanh nghiệp vẫn đang sử dụng taxi lẻ mà không nhận ra
        chi phí thực tế đang bị đội lên rất cao.
      </p>

      <p>
        Vậy khi doanh nghiệp phát sinh 15 – 20 chuyến mỗi ngày, nên tiếp tục sử
        dụng taxi hay chuyển sang thuê xe hợp đồng sẽ tối ưu hơn?
      </p>

      {/* CASE THỰC TẾ */}
      <h2>Chi phí taxi thực tế của doanh nghiệp</h2>

      <p>Một doanh nghiệp có đội sales hoặc vận hành thường phát sinh:</p>

      <ul>
        <li>15 – 20 chuyến/ngày</li>
        <li>Mỗi chuyến trung bình 70.000đ – 120.000đ</li>
      </ul>

      <p>Lấy mức trung bình 90.000đ/chuyến:</p>

      <ul>
        <li>Chi phí/ngày: ~1.350.000đ – 1.800.000đ</li>
        <li>Chi phí/tháng (26 ngày): ~35 – 46 triệu</li>
      </ul>

      <p className="font-semibold text-red-500">
        👉 Đây là con số thực tế mà nhiều doanh nghiệp đang chi trả mỗi tháng.
      </p>

      {/* SO SÁNH */}
      <h2>Giải pháp: Thuê xe hợp đồng</h2>

      <ul>
        <li>
          Xe 5 chỗ (26 ngày):{" "}
          <strong>{contractRentalData.car5.rows[2].d26}</strong>
        </li>
        <li>
          Xe 7 chỗ (26 ngày):{" "}
          <strong>{contractRentalData.car7.rows[2].d26}</strong>
        </li>
      </ul>

      <p>So với chi phí taxi, doanh nghiệp có thể tiết kiệm đáng kể:</p>

      <ul>
        <li>Tiết kiệm 10 – 20 triệu/tháng</li>
        <li>Chi phí cố định, dễ kiểm soát</li>
        <li>Không phát sinh bất ngờ</li>
      </ul>

      {/* VẤN ĐỀ TAXI */}
      <h2>Những hạn chế khi doanh nghiệp dùng taxi</h2>

      <ul>
        <li>Khó gọi xe vào giờ cao điểm</li>
        <li>Nhân sự mất thời gian chờ đợi</li>
        <li>Chi phí không ổn định</li>
        <li>Khó quản lý và kiểm soát</li>
      </ul>

      <p>
        Những vấn đề này ảnh hưởng trực tiếp đến hiệu suất làm việc và chi phí
        vận hành.
      </p>

      {/* LỢI ÍCH */}
      <h2>Lợi ích khi doanh nghiệp thuê xe hợp đồng</h2>

      <ul>
        <li>Tài xế riêng, quen lịch trình công ty</li>
        <li>Xe luôn sẵn sàng phục vụ</li>
        <li>Không gián đoạn công việc</li>
        <li>Tối ưu thời gian nhân sự</li>
      </ul>

      <p>
        Đây không chỉ là giải pháp tiết kiệm chi phí mà còn là giải pháp tối ưu
        vận hành.
      </p>

      {/* AI NÊN */}
      <h2>Doanh nghiệp nào nên áp dụng?</h2>

      <ul>
        <li>Công ty có đội sales đi thị trường</li>
        <li>Doanh nghiệp cần đưa đón nhân sự thường xuyên</li>
        <li>Công ty có nhiều điểm làm việc</li>
      </ul>

      <p>
        Nếu chi phí taxi của bạn đang trên 30 triệu/tháng, việc chuyển sang thuê
        xe hợp đồng là hoàn toàn hợp lý.
      </p>

      {/* KẾT LUẬN */}
      <h2>Kết luận</h2>

      <p>
        Taxi phù hợp cho nhu cầu nhỏ lẻ, không cố định. Tuy nhiên, với doanh
        nghiệp có tần suất di chuyển cao, thuê xe hợp đồng là giải pháp tối ưu
        hơn cả về chi phí và hiệu quả.
      </p>

      <p className="text-lg font-semibold text-red-600">
        👉 Với 15 – 20 chuyến/ngày, thuê xe hợp đồng gần như luôn tiết kiệm hơn
        taxi.
      </p>

      {/* CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 p-6 text-white shadow-xl">
        <p className="text-lg font-bold">
          👉 Tối ưu chi phí vận hành cho doanh nghiệp ngay hôm nay
        </p>
        <p className="mb-3 text-white/90">
          Xe riêng – tài xế riêng – chi phí cố định
        </p>
        <a
          href="/thue-xe-hop-dong"
          className="inline-block rounded-full bg-white px-6 py-2 font-bold text-red-500"
        >
          Xem giải pháp thuê xe
        </a>
      </div>
    </BlogLayout>
  );
}
