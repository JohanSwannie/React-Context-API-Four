import React from "react";
import useTheme from "../contexts/themeContext";

function Card() {
  const { themeDark } = useTheme();
  return (
    <div className="card">
      <img
        src="https://i.pinimg.com/236x/bf/cd/50/bfcd50ff1e74a8c67afc3ec61f128002.jpg"
        alt="bird"
      />
      {themeDark ? (
        <h2 className="lightText">Beautiful Colored Bird</h2>
      ) : (
        <h2 className="darkText">Beautiful Colored Bird</h2>
      )}
    </div>
  );
}

export default Card;
