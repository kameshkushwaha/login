import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Link,
  Typography,
} from "@material-ui/core";

const Login = () => {
  const paperstyle = {
    padding: 20,
    height: 500,
    width: 300,
    margin: "30px auto",
  };
  const btns = {
    padding: 10,
    marginTop: 20,
  };
  const fg = {
    marginTop: 10,
    paddingTop: 10,
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
          <Avatar>K</Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          placeholder="Enter Email"
          label="Email"
          type="email"
          fullWidth
          required
        />
        <TextField
          placeholder="Enter UserName"
          label="UserName"
          type="text"
          fullWidth
          required
        />
        <TextField
          placeholder="Password"
          label="Password"
          type="password"
          fullWidth
          required
        />
        <Button
          variant="contained"
          fullWidth
          color="Primary"
          type="submit"
          style={btns}
        >
          Submit
        </Button>
        <div style={fg}>
          <Link href="#">Forget Password</Link>
        </div>
        <Typography>
          Do you have an account?
          <Link href="/">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
