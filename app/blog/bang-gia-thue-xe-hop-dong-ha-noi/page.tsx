// app\blog\bang-gia-thue-xe-hop-dong-ha-noi\page.tsx

import BlogLayout from "@/components/blog/BlogLayout";
import { contractRentalData } from "@/data/contract-rental";

export const metadata = {
  title:
    "Bảng giá thuê xe hợp đồng Hà Nội 2026 | Giá thuê xe 5 chỗ, 7 chỗ theo tháng",
  description:
    "Cập nhật bảng giá thuê xe hợp đồng tại Hà Nội mới nhất. Giá thuê xe 5 chỗ, 7 chỗ theo tháng, tiết kiệm chi phí cho doanh nghiệp và cá nhân.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Bảng giá thuê xe hợp đồng Hà Nội mới nhất"
      description="Chi tiết giá thuê xe 5 chỗ, 7 chỗ theo tháng tại Hà Nội."
      image="/hero-bg-contract.png"
    >
      {/* INTRO */}
      <p>
        Thuê xe hợp đồng tại Hà Nội đang trở thành xu hướng phổ biến đối với
        doanh nghiệp và cá nhân có nhu cầu di chuyển thường xuyên. Thay vì gọi
        taxi từng chuyến với chi phí không ổn định, nhiều người đã chuyển sang
        thuê xe theo tháng để tiết kiệm chi phí và chủ động hơn trong công việc.
      </p>

      <p>
        Tuy nhiên, câu hỏi lớn nhất mà hầu hết khách hàng quan tâm là: “Bảng giá
        thuê xe hợp đồng Hà Nội bao nhiêu tiền?”. Bài viết này sẽ giúp bạn hiểu
        rõ chi tiết từng mức giá và cách tối ưu chi phí.
      </p>

      {/* BẢNG GIÁ 5 CHỖ */}
      <h2>Bảng giá thuê xe hợp đồng 5 chỗ</h2>

      <p>
        Xe 5 chỗ là lựa chọn phổ biến nhất, phù hợp cho cá nhân hoặc doanh
        nghiệp nhỏ.
      </p>

      <ul>
        <li>
          Gói 24 ngày: <strong>{contractRentalData.car5.rows[2].d24}</strong>
        </li>
        <li>
          Gói 26 ngày: <strong>{contractRentalData.car5.rows[2].d26}</strong>
        </li>
        <li>
          Gói 30 ngày: <strong>{contractRentalData.car5.rows[2].d30}</strong>
        </li>
      </ul>

      <p>
        Trung bình, gói 26 ngày là lựa chọn tối ưu nhất vì cân bằng giữa chi phí
        và nhu cầu sử dụng.
      </p>

      {/* BẢNG GIÁ 7 CHỖ */}
      <h2>Bảng giá thuê xe hợp đồng 7 chỗ</h2>

      <p>
        Xe 7 chỗ phù hợp với gia đình đông người hoặc doanh nghiệp cần không
        gian rộng hơn.
      </p>

      <ul>
        <li>
          Gói 24 ngày: <strong>{contractRentalData.car7.rows[2].d24}</strong>
        </li>
        <li>
          Gói 26 ngày: <strong>{contractRentalData.car7.rows[2].d26}</strong>
        </li>
        <li>
          Gói 30 ngày: <strong>{contractRentalData.car7.rows[2].d30}</strong>
        </li>
      </ul>

      {/* GIẢI THÍCH */}
      <h2>Giá thuê xe hợp đồng bao gồm những gì?</h2>

      <p>Khi thuê xe hợp đồng, bạn không chỉ trả tiền xe mà còn bao gồm:</p>

      <ul>
        <li>Tài xế riêng</li>
        <li>Bảo dưỡng xe</li>
        <li>Chi phí vận hành cơ bản</li>
      </ul>

      <p>Tuy nhiên, một số chi phí phát sinh có thể bao gồm:</p>

      <ul>
        <li>Km vượt mức (~7.500đ/km)</li>
        <li>Giờ ngoài giờ (~70.000đ/giờ)</li>
        <li>Làm việc ngày lễ</li>
      </ul>

      {/* SO SÁNH */}
      <h2>So sánh thuê xe hợp đồng và taxi</h2>

      <p>
        Nếu bạn di chuyển nhiều mỗi ngày, thuê xe hợp đồng có thể tiết kiệm hơn
        đáng kể.
      </p>

      <ul>
        <li>Taxi: linh hoạt nhưng chi phí cao nếu đi nhiều</li>
        <li>Thuê xe: chi phí cố định, chủ động</li>
      </ul>

      <p>
        Với doanh nghiệp, việc thuê xe còn giúp tối ưu vận hành và hình ảnh
        chuyên nghiệp.
      </p>

      {/* KHI NÀO NÊN THUÊ */}
      <h2>Khi nào nên thuê xe hợp đồng?</h2>

      <ul>
        <li>Đi làm hàng ngày</li>
        <li>Doanh nghiệp cần xe đưa đón</li>
        <li>Di chuyển thường xuyên trong thành phố</li>
      </ul>

      {/* MẸO */}
      <h2>Kinh nghiệm thuê xe tiết kiệm</h2>

      <ul>
        <li>Chọn gói 26 ngày</li>
        <li>Xác định rõ nhu cầu sử dụng</li>
        <li>So sánh giữa 5 chỗ và 7 chỗ</li>
      </ul>

      {/* SEO BLOCK */}
      <h2>Kết luận</h2>

      <p>
        Bảng giá thuê xe hợp đồng tại Hà Nội dao động từ 24 – 34 triệu/tháng tùy
        loại xe và số ngày sử dụng. Đây là lựa chọn tối ưu cho những ai cần di
        chuyển thường xuyên, ổn định và chuyên nghiệp.
      </p>

      {/* CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 p-6 text-white shadow-xl">
        <p className="text-lg font-bold">
          👉 Thuê xe hợp đồng giá tốt ngay hôm nay
        </p>
        <p className="mb-3 text-white/90">
          Xe đời mới – tài xế riêng – chi phí tối ưu
        </p>
        <a
          href="/thue-xe-hop-dong"
          className="inline-block rounded-full bg-white px-6 py-2 font-bold text-red-500"
        >
          Xem dịch vụ
        </a>
      </div>
    </BlogLayout>
  );
}
