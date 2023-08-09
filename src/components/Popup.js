import React, { useState, useEffect } from "react";
import "../scss/scss.scss";
import { useLocation } from "react-router-dom";
import { Skeleton } from "@mui/material";

function Popup(props) {
  const [Loading, SetLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SetLoading(true);
    }, 800);
  }, []);

  const location = useLocation();

  const link = location.state?.link;
  const alt = location.state?.alt;

  return props.trigger ? (
    <div className="popup">
      <div className="popup__inner">
        {Loading ? (
          <img className="popup__image" src={link} alt={alt} />
        ) : (
          <Skeleton
            sx={{ bgcolor: "grey.1000" }}
            variant="rectangular"
            animation="wave"
            width="60%"
            height="100%"
          />
        )}
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
