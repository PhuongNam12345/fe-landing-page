import React from "react";
import "./Benefits.css";
import Heading from "../../../../components/heading/Heading";
const Benefits = () => {
  return (
    <div className="benefits">
      <div className="main_benefits">
        <div className="head_benefits">
          <Heading name="Benefits For Users." />
        </div>
        <div className="content_benefits">
          <div className="content_one">
            <span>Thanh toan web 3 tien loi nhanh chong</span>
          </div>
          <div className="content_two">
            <span>Ưu đãi hấp dẫn hàng tháng, hằng năm</span>
          </div>
          <div className="content_three">
            <span> Tiếp cận sản phẩm và dịch vụ y tế ở khắp mọi nơi</span>
          </div>
          <div className="content_four">
            <span> Tích điểm thưởng thanh toán, nhận quà liền tay</span>
          </div>
          <div className="content_five">
            {" "}
            <span>Lưu trữ hồ sơ y tế trên Blockchain</span>
          </div>
          <div className="content_six">
            <span> AI Scan và AI Tư Vấn Sức Khỏe miễn phí</span>
          </div>
          <div className="content_seven">
            <span> Sử dụng dịch vụ sức khỏe với ưu đãi liên kết</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
