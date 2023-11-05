import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="menu">
        <div className="logo">
          <svg
            width="61"
            height="60"
            viewBox="0 0 61 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3223 44.4109L30.9246 33.8196C34.1396 37.0313 35.0343 37.3111 37.7852 40.8694C39.9885 43.7177 38.613 48.1655 35.7074 50.3414C32.6345 52.6384 28.6712 52.5716 25.9537 50.0031C23.1777 47.3803 23.1944 47.2801 20.3223 44.4109Z"
              fill="#00FFB8"
            />
            <path
              d="M30.3743 26.6904C34.0575 23.011 37.5317 19.5405 40.9766 16.0991C37.7617 12.8875 37.4816 11.9938 33.9196 9.24571C31.0683 7.04475 26.6158 8.41878 24.4376 11.3214C22.1382 14.391 22.2051 18.3502 24.7763 21.0649C27.4018 23.838 27.5021 23.8213 30.3743 26.6904Z"
              fill="#00FFB8"
            />
            <path
              d="M48.1949 34.9138C45.3687 37.7371 41.3343 37.8039 38.4747 35.0642C33.8884 30.6665 26.9149 30.4409 22.22 35.2229C20.0794 37.403 16.1495 37.6076 13.5449 35.7742C10.677 33.7528 9.70284 30.0985 11.1201 27.1082C13.2356 22.6353 18.6747 21.2613 22.6464 25.091C26.9609 29.2548 34.1267 29.1254 38.1653 25.0826C41.9698 21.278 47.4298 22.794 49.5913 26.6488C50.9375 29.0502 50.3731 32.7379 48.1991 34.9138H48.1949Z"
              fill="#32434A"
            />
            <path
              d="M7.8045 31.7536L15.2601 39.2015C16.1401 40.0806 17.5669 40.0806 18.4469 39.2015L25.9025 31.7536C26.7825 30.8745 26.7825 29.4492 25.9025 28.5701L18.4469 21.1223C17.5669 20.2432 16.1401 20.2432 15.2601 21.1223L7.80451 28.5701C6.92449 29.4492 6.92449 30.8745 7.8045 31.7536Z"
              fill="#32434A"
            />
            <path
              d="M34.701 32.0483L42.1566 39.4961C43.0366 40.3752 44.4634 40.3752 45.3434 39.4962L52.799 32.0483C53.679 31.1692 53.679 29.7439 52.799 28.8648L45.3434 21.417C44.4634 20.5379 43.0366 20.5379 42.1566 21.417L34.701 28.8648C33.821 29.7439 33.821 31.1692 34.701 32.0483Z"
              fill="#00FFFF"
            />
            <path
              d="M34.701 32.0483L42.1566 39.4961C43.0366 40.3752 44.4634 40.3752 45.3434 39.4962L52.799 32.0483C53.679 31.1692 53.679 29.7439 52.799 28.8648L45.3434 21.417C44.4634 20.5379 43.0366 20.5379 42.1566 21.417L34.701 28.8648C33.821 29.7439 33.821 31.1692 34.701 32.0483Z"
              fill="#32434A"
            />
          </svg>

          <p>PharmaTech</p>
        </div>
        <div className="nav_menu">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Package</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Roadmap</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Document</a>
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
            </li>
          </ul>
        </div>
        <div className="connect">
          <p>Connect Wallet</p>
          <button className="button_connect">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.1176 4.58598C13.3021 4.39496 13.5228 4.2426 13.7668 4.13778C14.0108 4.03296 14.2732 3.97779 14.5388 3.97548C14.8043 3.97317 15.0677 4.02378 15.3135 4.12434C15.5593 4.2249 15.7826 4.37341 15.9704 4.56119C16.1581 4.74898 16.3067 4.97228 16.4072 5.21807C16.5078 5.46387 16.5584 5.72722 16.5561 5.99278C16.5538 6.25834 16.4986 6.52078 16.3938 6.76479C16.289 7.0088 16.1366 7.22949 15.9456 7.41398L12.9456 10.414C12.5705 10.7889 12.0619 10.9996 11.5316 10.9996C11.0012 10.9996 10.4926 10.7889 10.1176 10.414C9.92897 10.2318 9.67637 10.131 9.41417 10.1333C9.15198 10.1356 8.90116 10.2408 8.71576 10.4262C8.53035 10.6116 8.42518 10.8624 8.4229 11.1246C8.42062 11.3868 8.52142 11.6394 8.70357 11.828C9.45369 12.5779 10.4709 12.9991 11.5316 12.9991C12.5922 12.9991 13.6095 12.5779 14.3596 11.828L17.3596 8.82798C18.0882 8.07357 18.4914 7.06316 18.4823 6.01438C18.4732 4.96559 18.0525 3.96234 17.3108 3.22071C16.5692 2.47907 15.566 2.0584 14.5172 2.04928C13.4684 2.04017 12.458 2.44335 11.7036 3.17198L10.2036 4.67198C10.1081 4.76423 10.0319 4.87457 9.97947 4.99658C9.92706 5.11858 9.89948 5.2498 9.89832 5.38258C9.89717 5.51536 9.92247 5.64704 9.97275 5.76993C10.023 5.89283 10.0973 6.00448 10.1912 6.09838C10.2851 6.19227 10.3967 6.26652 10.5196 6.3168C10.6425 6.36708 10.7742 6.39239 10.907 6.39123C11.0398 6.39008 11.171 6.36249 11.293 6.31008C11.415 6.25767 11.5253 6.18149 11.6176 6.08598L13.1176 4.58598ZM8.11757 9.58598C8.49263 9.21104 9.00125 9.00041 9.53157 9.00041C10.0619 9.00041 10.5705 9.21104 10.9456 9.58598C11.0378 9.68149 11.1482 9.75767 11.2702 9.81008C11.3922 9.86249 11.5234 9.89008 11.6562 9.89123C11.789 9.89239 11.9206 9.86708 12.0435 9.8168C12.1664 9.76652 12.2781 9.69227 12.372 9.59838C12.4659 9.50448 12.5401 9.39283 12.5904 9.26993C12.6407 9.14704 12.666 9.01536 12.6648 8.88258C12.6637 8.7498 12.6361 8.61858 12.5837 8.49658C12.5313 8.37457 12.4551 8.26423 12.3596 8.17198C11.6095 7.4221 10.5922 7.00083 9.53157 7.00083C8.47092 7.00083 7.45369 7.4221 6.70357 8.17198L3.70357 11.172C3.32153 11.541 3.01681 11.9823 2.80717 12.4704C2.59753 12.9584 2.48719 13.4833 2.48257 14.0144C2.47796 14.5455 2.57916 15.0722 2.78029 15.5638C2.98141 16.0554 3.27842 16.502 3.65399 16.8776C4.02957 17.2531 4.47617 17.5501 4.96776 17.7513C5.45934 17.9524 5.98606 18.0536 6.51718 18.049C7.0483 18.0444 7.57318 17.934 8.06119 17.7244C8.54921 17.5148 8.99059 17.21 9.35957 16.828L10.8596 15.328C10.9551 15.2357 11.0313 15.1254 11.0837 15.0034C11.1361 14.8814 11.1637 14.7502 11.1648 14.6174C11.166 14.4846 11.1407 14.3529 11.0904 14.23C11.0401 14.1071 10.9659 13.9955 10.872 13.9016C10.7781 13.8077 10.6664 13.7334 10.5435 13.6832C10.4206 13.6329 10.289 13.6076 10.1562 13.6087C10.0234 13.6099 9.89217 13.6375 9.77017 13.6899C9.64817 13.7423 9.53782 13.8185 9.44557 13.914L7.94557 15.414C7.76108 15.605 7.54039 15.7574 7.29638 15.8622C7.05238 15.967 6.78994 16.0222 6.52438 16.0245C6.25882 16.0268 5.99546 15.9762 5.74967 15.8756C5.50387 15.7751 5.28057 15.6266 5.09278 15.4388C4.905 15.251 4.75649 15.0277 4.65593 14.7819C4.55537 14.5361 4.50477 14.2727 4.50707 14.0072C4.50938 13.7416 4.56455 13.4792 4.66937 13.2352C4.77419 12.9912 4.92655 12.7705 5.11757 12.586L8.11757 9.58598Z"
                fill="#16EDB1"
              />
            </svg>
          </button>
        </div>
        <div className="icon_menu_mb">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M4.5 7C4.5 6.44772 4.94772 6 5.5 6H19.5C20.0523 6 20.5 6.44772 20.5 7C20.5 7.55228 20.0523 8 19.5 8H5.5C4.94772 8 4.5 7.55228 4.5 7ZM4.5 12C4.5 11.4477 4.94772 11 5.5 11H19.5C20.0523 11 20.5 11.4477 20.5 12C20.5 12.5523 20.0523 13 19.5 13H5.5C4.94772 13 4.5 12.5523 4.5 12ZM4.5 17C4.5 16.4477 4.94772 16 5.5 16H19.5C20.0523 16 20.5 16.4477 20.5 17C20.5 17.5523 20.0523 18 19.5 18H5.5C4.94772 18 4.5 17.5523 4.5 17Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};
export default Header;
