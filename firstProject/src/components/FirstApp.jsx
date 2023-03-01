import React from "react";
import PropTypes from "prop-types";

export default function FirstApp({ title, sum }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{sum}</span>
    </>
  );
}

FirstApp.prototype = {
  title: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  sum: 30,
};
