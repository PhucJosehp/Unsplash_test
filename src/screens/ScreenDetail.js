import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuBar from "../components/MenuBar";
import "../scss/scss.scss";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import { Anchor } from "antd";
import { ImageList } from "@mui/material";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function ScreenDetail() {
  const [Click, SetClick] = useState(true);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (Click) SetClick(!Click);
    navigate(-1);
  };

  const [urlsToDisplay, SetUrlsToDisplay] = useState([]);
  const [search, SetSearch] = useState("random");

  async function getPhoto() {
    try {
      const key = "8lE8NKY1KyTyulBy4k2MqPPhW9gK3l4kKRWf-yOXPWo";

      let resp = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${key}&query=${search}&per_page=100`
      );
      SetUrlsToDisplay(resp.data.results);
    } catch (e) {
      console.log(e);
    }
  }

  const getSearch = (data) => {
    SetSearch(data);
  };

  useEffect(() => {
    getPhoto();
    setTimeout(() => {
      handleClose();
    }, 800);
  });

  return (
    <div onClick={() => handleClick()} className="home">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <>
        {
          <Anchor>
            <Popup trigger={Click} />
          </Anchor>
        }
      </>
      {Click ? (
        <MenuBar search={getSearch} />
      ) : (
        <Anchor>
          <MenuBar search={getSearch} />
        </Anchor>
      )}

      <ImageList variant="masonry" cols={3} className="home__layout">
        {urlsToDisplay.map((img) => (
          <>
            <Link to={`/photos/${img.id}`}>
              <img
                className="home__layout__col"
                src={img.urls.small}
                alt="Radom from unsplash"
                onClick={() => SetClick(true)}
              />
            </Link>
          </>
        ))}
      </ImageList>
      <Outlet />
    </div>
  );
}

export default ScreenDetail;
