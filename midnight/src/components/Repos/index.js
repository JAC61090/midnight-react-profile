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
    url = "Repo Link to Deployable App";
    return input;
  }
}

const ProductTable = (props) => {
  // console.log(props);
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Name
            </button>
          </th>
          <th>Repository URL</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td className={"tdName"}>{item.name}</td>
            <td>{item.desc}</td>

            <td>
              <a href={dUrlHandler(item.depUrl)}>{dUrl}</a>
            </td>
            <td>
              <a href={"https" + urlHandler(item.url)}>{url}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App(data) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // console.log(repos);
    repos

      .then((json) =>
        // console.log(json.data)
        json.data.map((data) => ({
          name: `${data.full_name.substring(data.full_name.indexOf("/") + 1)}`,
          url: data.git_url.substring(data.git_url.indexOf(":")),
          desc: data.description,
          depUrl: data.homepage,
        }))
      )
      .then((newData) => setEmployees(newData))

      .catch((err) => console.log(err));
  }, []);

  return <ProductTable products={employees} />;
}
