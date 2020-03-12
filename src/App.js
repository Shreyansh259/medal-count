import React, { useState, useEffect } from "react";

import TableHeader from "./components/TableHeader";
import LoadingIndicator from "./components/LoadingIndicator";
import fetchOlympicsData from "./apis/fetchOlympicsData";
import "./App.scss";
import TableRow from "./components/TableRow";

const App = ({ sortBy }) => {
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activeSort, setActiveSort] = useState(sortBy);
  const [error, setError] = useState("");
  const [sortedData, setSortedData] = useState([]);

  const sortTable = () => {
    const breakTies = {
      gold: "silver",
      silver: "gold",
      total: "gold",
      bronze: "gold"
    };
    const sortedArray = countryData.slice(0).sort((a, b) => {
      if (b[activeSort] === a[activeSort]) {
        return b[breakTies[activeSort]] - a[breakTies[activeSort]];
      }
      return b[activeSort] - a[activeSort];
    });
    setSortedData(sortedArray);
  };

  const responseHandler = records => {
    records.sort((a, b) => `${a.code}`.localeCompare(b.code));
    const data = records.map((row, index) => {
      const rowData = Object.assign({}, row);
      rowData.total = row.gold + row.silver + row.bronze;
      rowData.key = index;
      rowData.position = `-${index * 22.5}px`;
      return rowData;
    });

    setLoading(false);
    setCountryData(data);
  };

  const fetchData = async () => {
    try {
      const apiData = await fetchOlympicsData();
      responseHandler(apiData);
    } catch (error) {
      setError(
        "There is some error while fetching data. Please contact administrator."
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    sortTable();
  }, [countryData, activeSort]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const handleSort = sortValue => {
    setActiveSort(sortValue);
  };
  return (
    <div>
      <h2 className="header">MEDAL COUNT</h2>
      <table className="countries-list">
        <thead>
          <tr className="header-row">
            <TableHeader handleSort={handleSort} activeSort={activeSort} />
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <TableRow key={item.code} rowNumber={index + 1} {...item} />
          ))}
        </tbody>
      </table>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

App.defaultProps = {
  sortBy: "gold"
};
export default App;
