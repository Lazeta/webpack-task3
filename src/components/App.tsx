import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./App.module.scss";
import Auth from "@/pages/authentication/Auth";
import MainPage from "@/pages/mainPage/MainPage";

type authHandlerTypes = {
  authHandler: void;
};

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
