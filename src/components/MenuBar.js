import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../scss/scss.scss";
import { Button } from "antd";

const MenuBar = (props) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const items = [
    {
      label: "Home",
      key: "home",
      path: "/",
    },
    {
      label: "Sports",
      key: "sports",
      path: "/Sports",
    },
    {
      label: "Nature",
      key: "nature",
      path: "/Nature",
    },
    {
      label: "People",
      key: "people",
      path: "/People",
    },
    {
      label: "Animal",
      key: "animal",
      path: "/Animal",
    },
    {
      label: "Plant",
      key: "plant",
      path: "/Plant",
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar__searchCover">
        <input
          onChange={handleChange}
          value={message}
          className="navbar__search"
          placeholder="Search..."
        />
        <Button onClick={() => props.search(message)} type="primary">
          Search
        </Button>
      </div>
      <div className="navbar__tag">
        {items.map((i) => (
          <NavLink
            className="navbar__tag__item"
            to={i.path}
            key={i.key}
            activeclassname="active"
            onClick={() =>
              props.search(i.label === "Home" ? "random" : i.label)
            }
          >
            {i.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
