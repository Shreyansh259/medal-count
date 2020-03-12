import React from "react";

import './TableRow.scss';

const TableRow = props => {
  const { rowNumber, code, position, gold, silver, bronze, total } = props;
  return (
    <tr className={rowNumber > 10 ? "hide-row" : "row"}>
      <td>{rowNumber}</td>
      <td>
        <div className="country-flag" style={{ backgroundPositionY: position }} />
      </td>
      <td>
        <strong className="country-name">{code}</strong>
      </td>
      <td />
      <td>{gold}</td>
      <td>{silver}</td>
      <td>{bronze}</td>
      <td>
        <strong>{total}</strong>
      </td>
    </tr>
  );
};

export default TableRow;
