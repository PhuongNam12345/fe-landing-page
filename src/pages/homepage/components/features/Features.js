import React from "react";
import Heading from "../../../../components/heading/Heading";
import Para from "../../../../components/paragraph/Paragrapb";
import "./Features.css";
import Img1 from "../assets/features1.png";
import Img2 from "../assets/features2.png";
import Img3 from "../assets/features3.png";
const Features = () => {
  const Col_features = (Prosp) => {
    return (
      <div className="col_features">
        <img className="col_img" src={Prosp.img} alt="alt features"></img>
        <p className="col_title">{Prosp.title}</p>
        <p className="col_desc">{Prosp.desc}</p>
      </div>
    );
  };
  return (
    <div className="features">
      <div className="main_features">
        <Heading name="Features" />
        <div className="text_features">
          <Para text="Các chức năng y tế online được Pharmatech phát triển chỉ nhằm một mục đích duy nhất là bảo vệ người dùng bằng tính liên kết siêu việt của chúng. Điều này đồng nghĩa với việc, mỗi một chức năng dưới đây đều mang lại giá trị cho các chức năng còn lại, đảm bảo cho quy tắc: người dùng mong 1 chúng tôi trao 10." />
        </div>
        <div className="three_col_features">
          <div className="col_features1">
            <Col_features
              img={Img1}
              title="Electronic commerce"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. "
            />
          </div>
          <div className="col_features2">
            <Col_features
              img={Img2}
              title="Artifical Intelligence"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. "
            />
          </div>
          <div className="col_features3">
            <Col_features
              img={Img3}
              title="Community"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
