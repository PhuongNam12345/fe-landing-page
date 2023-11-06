import React from "react";
import "./Token.css";
import gifToken from "../assets/token.gif";
import rectangle from "../assets/rectangle.png";
import rectangle_bot from "../assets/rectangle_bot.png";
import Paragrapb from "../../../../components/paragraph/Paragrapb";

import Heading from "../../../../components/heading/Heading";
const Token = () => {
  return (
    <div className="token">
      <div className="main_token">
        <div className="token_title_mb">
          <Heading name="Token Pharmatech" />
        </div>
        <div className="left_token">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1007"
            height="1007"
            viewBox="0 0 1007 1007"
            fill="none"
          >
            <g filter="url(#filter0_f_227_285)">
              <path d="M238 238H769V769H238V238Z" fill="#F2F5FA" />
              <path
                d="M238 238H769V769H238V238Z"
                fill="url(#paint0_linear_227_285)"
              />
              <path
                d="M238 238H769V769H238V238Z"
                fill="url(#paint1_linear_227_285)"
              />
              <path
                d="M238 238H769V769H238V238Z"
                fill="url(#paint2_linear_227_285)"
              />
              <path
                d="M238 238H769V769H238V238Z"
                fill="url(#paint3_linear_227_285)"
              />
              <path
                d="M238 238H769V769H238V238Z"
                fill="url(#paint4_linear_227_285)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_227_285"
                x="0"
                y="0"
                width="1007"
                height="1007"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="119"
                  result="effect1_foregroundBlur_227_285"
                />
              </filter>
              <linearGradient
                id="paint0_linear_227_285"
                x1="320.969"
                y1="456.484"
                x2="772.757"
                y2="386.821"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#41FDB9" />
                <stop offset="0.841052" stop-color="#FBBCD5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_227_285"
                x1="503.5"
                y1="238"
                x2="503.5"
                y2="769"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#66B5F8" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_227_285"
                x1="-259.813"
                y1="-147.805"
                x2="727.129"
                y2="506.396"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D5E9FA" />
                <stop
                  offset="0.568731"
                  stop-color="#D5E9FA"
                  stop-opacity="0.3"
                />
                <stop offset="1" stop-color="#D5E9FA" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_227_285"
                x1="1025.02"
                y1="1113.32"
                x2="397.899"
                y2="484.601"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FBB43E" />
                <stop
                  offset="0.492704"
                  stop-color="#FBB43E"
                  stop-opacity="0.3"
                />
                <stop offset="1" stop-color="#FBB43E" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_227_285"
                x1="571.06"
                y1="1467.32"
                x2="358.394"
                y2="634.792"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#54D399" />
                <stop
                  offset="0.549191"
                  stop-color="#54D399"
                  stop-opacity="0.3"
                />
                <stop offset="0.961144" stop-color="#54D399" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg> */}
          <img src={gifToken} alt="Alt gitToken" className="giftoken"></img>
          <div className="rectangle">
            <img src={rectangle} alt="Alt rectangle" />
            <div className="text_icon">
              <span>
                ``` //SPDX-License-Identifier: Unlicense pragma solidity import
                '@openzeppelin/contracts/token/ERC20/ERC20.sol'; contract
                PharmatechToken is ERC20 ```
              </span>
            </div>
          </div>
          <div className="rectangle_bot">
            <img src={rectangle_bot} alt="alt Rectangle" />
            <div className="text_icon">
              <span>
                ``` //SPDX-License-Identifier: Unlicense pragma solidity import
                '@openzeppelin/contracts/token/ERC20/ERC20.sol'; contract
                PharmatechToken is ERC20 ```
              </span>
            </div>
          </div>
        </div>

        <div className="right_token">
          <div className="token_title">
            <Heading name="Token Pharmatech" />
          </div>
          <Paragrapb
            text=" Mục tiêu của Pharmatech là Blockchain hóa toàn doanh nghiệp và mang
            lại các tiện ích sức khỏe vượt trội thông qua Pharma AI và Pharma
            Health Packages. Điềunày cũng đồng nghĩa với việc chúng tôi sẽ phải
            hướng người dùng đến với các hình thức thanh toán nâng cao và phù
            hợp với thời đại web-3, thông qua Token PMT."
          />
          <div className="item_buy">
            <p>Buy Package</p>
            <div className="icon_sub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.60039 1.19995C3.28213 1.19995 2.97691 1.32638 2.75186 1.55142C2.52682 1.77647 2.40039 2.08169 2.40039 2.39995C2.40039 2.71821 2.52682 3.02344 2.75186 3.24848C2.97691 3.47352 3.28213 3.59995 3.60039 3.59995H5.06439L5.43039 5.06635C5.43403 5.08324 5.43803 5.10004 5.44239 5.11675L7.07199 11.6328L6.00039 12.7032C4.48839 14.2152 5.55879 16.8 7.69719 16.8H18.0004C18.3187 16.8 18.6239 16.6735 18.8489 16.4485C19.074 16.2234 19.2004 15.9182 19.2004 15.6C19.2004 15.2817 19.074 14.9765 18.8489 14.7514C18.6239 14.5264 18.3187 14.4 18.0004 14.4H7.69719L8.89719 13.2H16.8004C17.0232 13.1998 17.2415 13.1377 17.431 13.0205C17.6205 12.9033 17.7736 12.7356 17.8732 12.5364L21.4732 5.33635C21.5646 5.15345 21.6077 4.95022 21.5985 4.74596C21.5893 4.5417 21.5281 4.34317 21.4206 4.16922C21.3132 3.99528 21.163 3.85167 20.9845 3.75204C20.8059 3.65241 20.6049 3.60006 20.4004 3.59995H7.53639L7.16439 2.10835C7.09938 1.84886 6.94953 1.61852 6.73864 1.45394C6.52775 1.28935 6.2679 1.19996 6.00039 1.19995H3.60039ZM19.2004 19.7999C19.2004 20.2773 19.0107 20.7352 18.6732 21.0727C18.3356 21.4103 17.8778 21.6 17.4004 21.6C16.923 21.6 16.4652 21.4103 16.1276 21.0727C15.79 20.7352 15.6004 20.2773 15.6004 19.7999C15.6004 19.3226 15.79 18.8647 16.1276 18.5272C16.4652 18.1896 16.923 18 17.4004 18C17.8778 18 18.3356 18.1896 18.6732 18.5272C19.0107 18.8647 19.2004 19.3226 19.2004 19.7999ZM7.80039 21.6C8.27778 21.6 8.73562 21.4103 9.07318 21.0727C9.41075 20.7352 9.60039 20.2773 9.60039 19.7999C9.60039 19.3226 9.41075 18.8647 9.07318 18.5272C8.73562 18.1896 8.27778 18 7.80039 18C7.323 18 6.86516 18.1896 6.5276 18.5272C6.19003 18.8647 6.00039 19.3226 6.00039 19.7999C6.00039 20.2773 6.19003 20.7352 6.5276 21.0727C6.86516 21.4103 7.323 21.6 7.80039 21.6Z"
                  fill="#16EDB1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Token;
