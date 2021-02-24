import React, { useState } from "react";
import Pagination from "../components/Pagination";
import CountryCard from "../components/CountryCard";

export default function ButtonPage() {
  const data = [
    { id: 1, title: "test" },
    { id: 2, title: "test2" },
    { id: 3, title: "test3" },
    { id: 4, title: "test4" },
    { id: 5, title: "test5" },
    { id: 6, title: "test6" },
    { id: 7, title: "test6" },
    { id: 8, title: "test6" },
    { id: 9, title: "test6" },
    { id: 10, title: "test6" },
    { id: 11, title: "test11" },
    { id: 12, title: "test12" },
    { id: 13, title: "test13" },
    { id: 14, title: "test14" },
    { id: 15, title: "test15" },
    { id: 16, title: "test16" },
    { id: 17, title: "test16" },
    { id: 18, title: "test16" },
    { id: 19, title: "test126" },
    { id: 20, title: "test20" }
  ];

  const [newData, setNewData] = useState({
    allCountries: data,
    currentCountries: [],
    currentPage: 1,
    totalPages: null
  });

  const onPageChanged = (data) => {
    const { currentPage, totalPages, pageLimit } = data;
    console.log(data);

    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = newData.allCountries.slice(
      offset,
      offset + pageLimit
    );

    setNewData({
      currentPage: currentPage,
      currentCountries: currentCountries,
      totalPages: totalPages,
      allCountries: newData.allCountries
    });
  };

  const totalCountries = newData.allCountries.length;

  if (totalCountries === 0) return null;

  return (
    <>
      <div className="w-100 px-4 py-5 flex flex-wrap align-items-center justify-content-between">
        <div className="flex align-items-center">
          <h2>
            <strong className="text-secondary">{totalCountries}</strong>{" "}
            Countries
          </h2>
          {newData.currentPage && (
            <span className="current-page d-inline-block h-100 pl-4 text-secondary">
              Page{" "}
              <span className="font-weight-bold">{newData.currentPage}</span> /{" "}
              <span className="font-weight-bold">{newData.totalPages}</span>
            </span>
          )}
        </div>
        <div className="flex py-4 align-items-center">
          <Pagination
            totalRecords={totalCountries}
            pageLimit={3}
            pageNeighbours={0}
            onPageChanged={onPageChanged}
            currentPage={newData.currentPage}
          />
        </div>
        {newData.currentCountries.length && (
          <>
            {newData.currentCountries.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </>
        )}
      </div>
    </>
  );
}
