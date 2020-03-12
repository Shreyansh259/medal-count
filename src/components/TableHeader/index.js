import React from "react";

import './TableHeader.scss';

const TableHeader = ({ handleSort, activeSort }) => {
  const tHead = [
    <th key={10} />,
    <th key={11} />,
    <th key={12} style={{ width: "60px" }} />,
    <th key={13} style={{ width: "85px" }} />
  ];
  const medals = [{ medal: "gold" }, { medal: "silver" }, { medal: "bronze" }];
  medals.forEach(({ medal }, index) => {
    tHead.push(
      <th
        key={index}
        className={activeSort === medal ? "active-sort heading" : "heading"}
        onClick={() => handleSort(medal)}
      >
        <div
          className={activeSort === medal ? "sort selected" : "sort unselect"}
        >
          <span className={`${medal} medal-color`} />
        </div>
      </th>
    );
  });
  tHead.push(
    <th key={7} onClick={() => handleSort("total")}>
      <div
        className={activeSort === "total" ? "selected total" : "unselect total"}
      >
        <span>TOTAL</span>
      </div>
    </th>
  );
  return tHead;
}


export default TableHeader;
