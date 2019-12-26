import React, { Component } from "react";
import { TextField, Grid, Container, Typography } from "@material-ui/core";

export default class App extends Component {
  state = {};

  /***************************/
  /******** FUNCTIONS ********/
  /***************************/
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  handleBlur = () => {
    this.state.id && this.fetchPostInfo(this.state.id);
  };
  handleSubmit = e => {
    e.preventDefault();
    alert("Sent");
  };
  fetchPostInfo = async postId => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const response = await fetch(url);
    const { title, body } = await response.json();
    this.setState({
      ...this.state,
      title,
      body
    });
  };

  /***************************/
  /********** VIEW ***********/
  /***************************/
  render() {
    return (
      <Container>
        <Typography component="h1" variant="h5">
          Autocompleter
        </Typography>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            {/* Post Id */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="Post ID"
                variant="outlined"
                name="id"
                value={this.state.id || ""}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
            </Grid>
            {/* Title */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="Title"
                variant="outlined"
                name="title"
                value={this.state.title || ""}
                onChange={this.handleChange}
              />
            </Grid>
            {/* Content/Body */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="Content"
                variant="outlined"
                name="body"
                value={this.state.body || ""}
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}
