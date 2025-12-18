import { useState } from "react";
import "./App.module.scss";
import Auth from "@/pages/authentication/Auth";
import MainPage from "@/pages/mainPage/MainPage";
import ProductCardPage from "@/pages/productsCard/ProductCardPage";

type authHandlerTypes = {
  authHandler: void;
};

import { useEffect } from "react";

const URL = `https://dummyjson.com/products`


export default function App() {
  const [openAuth, setOpenAuth] = useState(false);

  const authHandler = () => {
    setOpenAuth(!openAuth);
  };

  return openAuth ? (
    <Auth authHandler={authHandler} />
  ) : (
    <MainPage authHandler={authHandler} />
  );

}
