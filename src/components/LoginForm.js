import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../redux/reducer";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false };
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let { email, password, submitted } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <Container className="main" component="main" maxWidth="xs">
        <div
          style={{
            margin: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar style={{ backgroundColor: "red", margin: theme.spacing(1) }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form
            name="loginForm"
            onSubmit={this.onSubmit}
            style={{ width: "100%" }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
            />
            {/* {submitted && !email ? <p>Email is required</p> : null} */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
            {/* {submitted && !password ? <p>Password is required</p> : null} */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: theme.spacing(3, 0, 2) }}
              value="Login"
              // onClick={() => this.setState({ submitted: true })}
            >
              Sign In
            </Button>

            <div className="message">
              {isLoginPending && (
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "lightblue",
                    color: "white"
                  }}
                >
                  Please wait...
                </div>
              )}
              {isLoginSuccess && (
                <div>
                  <Redirect to="/users" />
                </div>
              )}
              {loginError && (
                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#f44336",
                    color: "white"
                  }}
                >
                  {loginError.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </Container>
    );
  }

  onSubmit(e) {
    this.setState({ submitted: true });
    console.log(this.state.submitted);
    e.preventDefault();

    let { email, password } = this.state;
    this.props.login(email, password);

    this.setState({
      email: "",
      password: ""
      // submitted: false
    });
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
