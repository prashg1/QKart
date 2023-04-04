import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("balance");
    history.push("/");
    window.location.reload();
  };

  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      <Stack direction="row" spacing={1} alignItems="center">
        {localStorage.getItem("username") ? (
          <>
            <Avatar alt={localStorage.getItem("username")} src="avatar.png" />
            <p className="username-text">{localStorage.getItem("username")}</p>
            <Button className="explore-button" variant="text" onClick={logout}>
              logout
            </Button>
          </>
        ) : hasHiddenAuthButtons ? (
          <>
            <Button
              className="explore-button"
              variant="text"
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => history.push("/register")}
            >
              Register
            </Button>
          </>
        ) : (
          <>
            <Button
              className="explore-button"
              startIcon={<ArrowBackIcon />}
              variant="text"
              role="button"
              onClick={() => history.push("/")}
            >
              Back to explore
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
