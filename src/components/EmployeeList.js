import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const data = require("../Data/dashboard.json");

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { users, loginError } = this.props;
    console.log("userlist", users);
    console.log("loginError", loginError);
    const classes = makeStyles({
      table: {
        minWidth: 650
      }
    });
    return (
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "aqua" }}>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Gender&nbsp;</TableCell>
                <TableCell align="right">Email&nbsp;</TableCell>
                <TableCell align="right">PhoneNo&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.user.map(data => (
                <TableRow key={data.name}>
                  <TableCell component="th" scope="row">
                    {data.name}
                  </TableCell>
                  <TableCell align="right">{data.age}</TableCell>
                  <TableCell align="right">{data.gender}</TableCell>
                  <TableCell align="right">{data.email}</TableCell>
                  <TableCell align="right">{data.phoneNo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Link to="/logout">Logout</Link> */}
      </div>
    );
  }
}
