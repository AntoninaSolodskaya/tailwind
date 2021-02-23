import React from "react";

const CountryCard = ({ country }) => (
  <div className="col-sm-6 col-md-4 country-card">
    <div className="country-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
      <div className="px-3">
        <span className="country-name text-dark d-block font-weight-bold">
          {country.title} - {country.id}
        </span>
      </div>
    </div>
  </div>
);

export default CountryCard;
