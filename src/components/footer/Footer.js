import React from "react";
import "./Footer.css";
const Footers = () => {
  const SubFooter = (props) => {
    return (
      <div className="sub_content_footer">
        <span className="title">{props.title}</span>
        <span className="desc">{props.desc1}</span>
        <span className="desc">{props.desc2}</span>
        <span className="desc">{props.desc3}</span>
        <span className="desc">{props.desc4}</span>
        <span className="desc">{props.desc5}</span>
        <span className="desc">{props.desc6}</span>
      </div>
    );
  };
  return (
    <div className="footer">
      <div className="main_footer">
        <div className="left_footer">
          <div className="info_footer">
            <div className="logo_footer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M13.1943 29.6043L20.262 22.5439C22.4052 24.6849 23.0016 24.8714 24.8354 27.2434C26.3041 29.1421 25.3872 32.1072 23.4503 33.5576C21.4019 35.0889 18.7599 35.0443 16.9483 33.3321C15.0978 31.5838 15.109 31.5169 13.1943 29.6043Z"
                  fill="#00FFB8"
                />
                <path
                  d="M19.8933 17.7921C22.3486 15.3394 24.6646 13.0258 26.961 10.7318C24.8179 8.59083 24.6312 7.99504 22.2567 6.16314C20.356 4.69595 17.3879 5.6119 15.9359 7.54681C14.4031 9.59309 14.4477 12.2324 16.1616 14.042C17.9118 15.8906 17.9787 15.8795 19.8933 17.7921Z"
                  fill="#00FFB8"
                />
                <path
                  d="M31.7754 23.2737C29.8915 25.1557 27.2021 25.2002 25.2958 23.3739C22.2385 20.4423 17.5899 20.292 14.4602 23.4797C13.0333 24.933 10.4135 25.0694 8.67726 23.8472C6.76542 22.4997 6.11606 20.0637 7.06084 18.0703C8.47103 15.0886 12.0968 14.1726 14.7444 16.7256C17.6206 19.5013 22.3974 19.415 25.0896 16.72C27.6257 14.1838 31.2654 15.1944 32.7063 17.764C33.6037 19.3649 33.2274 21.8232 31.7782 23.2737H31.7754Z"
                  fill="#32434A"
                />
                <path
                  d="M4.84963 21.1674L9.81965 26.1323C10.4063 26.7183 11.3574 26.7183 11.944 26.1323L16.914 21.1674C17.5007 20.5814 17.5007 19.6313 16.914 19.0452L11.944 14.0804C11.3574 13.4944 10.4063 13.4944 9.81965 14.0804L4.84963 19.0452C4.263 19.6313 4.26299 20.5814 4.84963 21.1674Z"
                  fill="#32434A"
                />
                <path
                  d="M22.7803 21.3637L27.7503 26.3286C28.3369 26.9146 29.2881 26.9146 29.8747 26.3286L34.8447 21.3637C35.4313 20.7777 35.4313 19.8276 34.8447 19.2415L29.8747 14.2767C29.2881 13.6907 28.3369 13.6907 27.7503 14.2767L22.7803 19.2415C22.1937 19.8276 22.1937 20.7777 22.7803 21.3637Z"
                  fill="#00FFFF"
                />
                <path
                  d="M22.7803 21.3637L27.7503 26.3286C28.3369 26.9146 29.2881 26.9146 29.8747 26.3286L34.8447 21.3637C35.4313 20.7777 35.4313 19.8276 34.8447 19.2415L29.8747 14.2767C29.2881 13.6907 28.3369 13.6907 27.7503 14.2767L22.7803 19.2415C22.1937 19.8276 22.1937 20.7777 22.7803 21.3637Z"
                  fill="#32434A"
                />
              </svg>
              <span className="name_logo">PharmaTech</span>
            </div>
            <span className="email_footer">contact@pharmatech.io</span>
          </div>
          <div className="language_footer">
            <span>Language</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.16903 9C7.89535 9 7.60004 9.11153 7.54649 9.39012C7.49869 9.63875 7.56335 9.90793 7.74046 10.101L12.0262 14.772C12.3051 15.076 12.7574 15.076 13.0363 14.772L17.322 10.101C17.4992 9.90794 17.5638 9.63875 17.516 9.39012C17.4625 9.11153 17.1671 9 16.8935 9L8.16903 9Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="right_footer">
          <SubFooter
            title="About"
            desc1="Careers"
            desc2="Team"
            desc3="Backers"
            desc4="Partners"
            desc5="Privacy Policy"
            desc6="Terms & Conditions"
          />
          <SubFooter
            title="Support"
            desc1="FAQ"
            desc2="Help & support"
            desc3="Trust & safety"
          />
          <div className="traight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="2"
              viewBox="0 0 327 2"
              fill="none"
            >
              <path d="M0 0.99707L327 0.997099" stroke="black" />
            </svg>
          </div>

          <SubFooter
            title="Community"
            desc1="Twitter"
            desc2="Telegram group"
            desc3="Telegram channel"
            desc4="Discord"
          />
        </div>
      </div>
    </div>
  );
};
export default Footers;
