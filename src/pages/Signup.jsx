import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Alert } from "@mui/material";
import { DarkTextField } from "../controls/DarkTextField";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../actions/authActions";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const {response, error, loading} = useSelector((state) => state.authReducer.signupReducer);

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const name = e.target.name;
    setErrors({ ...errors, [name]: "" });
    setValues({ ...values, [name]: e.target.value });
  };

  const validate = () => {
    let temp = { ...errors };

    if (values["fullName"].length < 4) {
      temp.fullName = "Please enter a valid full name";
    }

    if (values["email"].length < 4) {
      temp.email = "Please enter a valid email";
    }

    if (values["password"].length < 8) {
      temp.password = "Please enter a valid password";
    }

    setErrors({ ...temp });
    if (temp.fullName || temp.email || temp.password) return false;
    return true;
  };

  const signup = (e) => {
    e.preventDefault();

    if (validate()) {
      dispatch(signupUser(values));
    }
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column" sx={{}}>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          mt: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 7,
          paddingBottom: 3,
          maxWidth: "280px",
          bgcolor: "#000",
        }}
      >
        <form onSubmit={(e) => signup(e)}>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Register on Xzone
          </Typography>
          {response && <Alert variant="outlined" severity="success">
            {response?.message}
          </Alert>}
          {error && <Alert variant="outlined" severity="error">
            {error?.message}
          </Alert>}

          <DarkTextField
            id="fullName"
            name="fullName"
            placeholder="Enter Full Name"
            value={values.fullName}
            onChange={(e) => handleChange(e)}
            fullWidth
            error={Boolean(errors.fullName)}
            helperText={errors.fullName}
            size="small"
            sx={{ mt: 3 }}
          />

          <DarkTextField
            id="email"
            name="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={(e) => handleChange(e)}
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email}
            size="small"
            type="text"
            sx={{ mt: 1 }}
          />

          <DarkTextField
            id="password"
            name="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={(e) => handleChange(e)}
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password}
            size="small"
            type="password"
            sx={{ mt: 1 }}
          />
          <Button
            type="submit"
            disableRipple
            fullWidth
            variant="contained"
            sx={{
              mt: 1,
              bgcolor: "#E50914",
              borderRadius: 0,
              "&:hover": { bgcolor: "red" },
            }}
          >
            Create Account
          </Button>

          <Box sx={{ mt: 2, paddingLeft: 1 }}>
            <Typography
              style={{
                marginTop: 3,
                fontSize: 12,
                fontFamily: "'Open Sans', sans-serif",
              }}
              variant="p"
              color="#C0C0C0"
            >
              By signing up, you agree to our terms, data and cookie policy. You
              may recieve email updates about our prodcuts and services.
            </Typography>
          </Box>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate("/login")}
            sx={{
              mt: 2,
              bgcolor: "inherit",
              borderRadius: 50,
              borderColor: "#fff",
              border: 2,
              fontSize: "12px",
              color: "#fff",
              "&:hover": {
                color: "#C0C0C0",
                borderColor: "#C0C0C0",
                fontSize: "12px",
                border: 2,
              },
            }}
          >
            Already have an account? Login
          </Button>
          <Box display="flex" sx={{ mt: 1 }} alignItems="right">
            <Button
              disableRipple
              variant="standard"
              sx={{ ml: "auto", fontSize: "10px", color: "#C0C0C0" }}
            >
              Privacy
            </Button>
            <Button
              disableRipple
              variant="standard"
              sx={{ fontSize: "10px", color: "#C0C0C0" }}
            >
              Help
            </Button>
            <Button
              disableRipple
              variant="standard"
              sx={{ fontSize: "10px", color: "#C0C0C0" }}
            >
              Terms
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
