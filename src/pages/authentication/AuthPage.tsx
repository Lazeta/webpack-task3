import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useLoginMutation } from "./AuthApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/redux.hook";
import { setCredentials } from "@/store/auth";

function AuthPage() {
  const [login, { isLoading, error }] = useLoginMutation();
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ userName: userLogin, password }).unwrap();
      localStorage.setItem("token", result.token);
      navigate("/");
      dispatch(
        setCredentials({
          user: {
            id: result.id,
            username: result.username,
            email: result.email,
            firstName: result.firstName,
            lastName: result.lastName,
          },
          token: result.token,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        m: 0,
        p: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('assets//backgroundLeaves.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          marginY: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Login"
            onChange={(e) => setUserLogin(e.target.value)}
            required
            multiline
            maxRows={4}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Button
          type="submit"
          disabled={isLoading}
          onClick={handleSubmit}
          sx={{
            color: "inherit",
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            bgcolor: "green",
          }}
          variant="contained"
        >
          Sign in
        </Button>
      </Paper>
      {error && (
        <Typography color="error" variant="body2">
          Invalid login or password
        </Typography>
      )}
    </Box>
  );
}

export default AuthPage;
