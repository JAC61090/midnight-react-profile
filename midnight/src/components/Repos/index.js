import React, { useEffect, useState } from "react";
import "./style.css";
import { repos } from "../../utils/API";

const useSortableData = (items, config = null) => {
  // console.log(items);
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

let dUrl;
let url;

function dUrlHandler(input) {
  console.log(input);
  if (input === null) {
    dUrl = "N/A";
    return;
  } else {
    dUrl = "Repository";
    return input;
  }
}

function urlHandler(input) {
  console.log(input);
  if (input === null) {
    url = "N/A";
    return;
  } else {
    url = "Deployed App";
    return input;
  }
}
