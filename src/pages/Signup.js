import React from "react";
import AssignmentIcon from "@material-ui/icons/Assessment";
import  Link from "react-router-dom/Link";

import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  FormLabel,
  FormControl,
  Radio,
  RadioGroup,
  Checkbox,
  
} from "@material-ui/core";

const Signup = () => {
  const singupstyle = {
    padding: "30px 20px",
    height: 600,
    width: 400,
    margin: "100px auto",
  };
  const signupbtns = {
    padding: 10,
    marginTop: 20,
  };

  const avtarstyle = { backgroundColor: "red" };
  const radiostyle = { marginTop: 10 };
  return (
    <Grid>
      <Paper elevation={20} style={singupstyle}>
        <Grid align="center">
          <Avatar style={avtarstyle}>
            {" "}
            <AssignmentIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <Typography variant="caption">Create Your Account</Typography>
        </Grid>
        <form>
          <TextField
            placeholder="Enter Full Name"
            label="Name"
            type="text"
            fullWidth
            required
          />
          <TextField
            placeholder="Enter Email"
            label="Email"
            type="email"
            fullWidth
            required
          />
          <FormControl component="fieldset" style={radiostyle}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            placeholder="Number"
            label="Contact Number"
            type="number"
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
          <TextField
            placeholder="Comfirm Password"
            label="Confirm Password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I Accept all the Terms & Conditions"
          />
          <Button
            variant="contained"
            fullWidth
            color="Primary"
            type="submit"
            style={signupbtns}
          >
            Submit
          </Button>
          <Typography>
            I have an account?
            <Link to="/Login">Log In</Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};
export default Signup;
