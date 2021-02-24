import React, { useState, useCallback } from "react";

const data = {
  arr1: [{ ALL: 650 }, { LEFT: 5 }, { RIGHT: 2 }],
  arr2: [{ ALL2: 60 }, { LEFT2: 51 }, { RIGHT2: 25 }],
  arr3: [{ ALL3: 40 }, { LEFT3: 1 }, { RIGHT3: 24 }]
};

const newData = [
  {
    section: "arr1",
    filters: [
      { item: "ALL", count: 650 },
      { item: "LEFT", count: 5 },
      { item: "RIGHT", count: 2 }
    ]
  },
  {
    section: "arr2",
    filters: [
      { item: "ALL2", count: 60 },
      { item: "LEFT2", count: 51 },
      { item: "RIGHT2", count: 25 }
    ]
  },
  {
    section: "arr3",
    filters: [
      { item: "ALL3", count: 40 },
      { item: "LEFT3", count: 1 },
      { item: "RIGHT3", count: 24 }
    ]
  }
];
const Main = () => {
  let newArr = [];
  const [checkedItems, setCheckeditems] = useState(newArr);

  const handleOnChange = useCallback(
    (e) => {
      const index = e.target.name;
      let items = [...checkedItems];
      items[index].isChecked = e.target.checked;
      setCheckeditems(items);
    },
    [checkedItems]
  );
  const [filters, setFilters] = useState([]);

  const Arr = Object.keys(data).forEach(function eachKey(key) {
    const arr = data[key];
    let object = [];
    arr.map((item: { [x: string]: any }) => {
      Object.keys(item).forEach(function eachKey(key) {
        const newObj = {
          item: key,
          count: item[key],
          isChecked: false
        };
        object.push(newObj);
      });
    });
    const newD = {
      section: key,
      filters: object,
      isChecked: false
    };
    newArr.push(newD);
  });
  console.log(newArr);
  return (
    <>
      {checkedItems.map((item, i) => (
        <div
          key={i}
          className="my-2 px-5 border-solid border-4 border-light-blue-500"
        >
          <div>
            {item.section}
            {/* <input
              type="checkbox"
              checked={item.isChecked}
              onChange={handleOnChange}
              className="form-checkbox mx-5"
              name={i}
            /> */}
          </div>
          {item.filters.map((filt, i) => (
            <div className="flex align-items-center p-2 ">
              <div className="mx-2">{filt.item}</div>
              <div>{filt.count}</div>
              <input
                type="checkbox"
                checked={filt.isChecked}
                onChange={handleOnChange}
                className="form-checkbox mx-5"
                name={i}
              />
            </div>
          ))}
          <hr />
        </div>
      ))}
    </>
  );
};

export default Main;
