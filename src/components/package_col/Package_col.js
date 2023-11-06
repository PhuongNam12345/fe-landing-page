import React from "react";
import "./Package_col.css";
function PackCol(Props) {
  return (
    <div className="pack">
      <div className="pack_col">
        <img src={Props.img} alt="alt"></img>
        <div className="pack_des">
          <p className="pack_title">{Props.title}</p>
          <p className="pack_pricepmt">{Props.pricePMT}</p>
          <button className="btn_pack_col">
            <div className="btn_sub">
              {Props.icon}
              <p>{Props.price}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default PackCol;
