import React, { useState } from "react";
import { TextField, Grid, Container, Typography } from "@material-ui/core";

const AddressForm = () => {
  /***************************/
  /******** FUNCTIONS ********/
  /***************************/
  const handleChange = e => {
    setPostInfo({
      ...postInfo,
      [e.target.name]: e.target.value
    });
  };
  const handleBlur = () => {
    postInfo.id && fetchPostInfo(postInfo.id);
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert("Sent");
  };
  const fetchPostInfo = async postId => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const response = await fetch(url);
    const { title, body } = await response.json();
    setPostInfo({
      ...postInfo,
      title,
      body
    });
  };

  /***************************/
  /********** HOOKS **********/
  /***************************/
  const [postInfo, setPostInfo] = useState({});

  /***************************/
  /********** VIEW ***********/
  /***************************/
  return (
    <Container>
      <Typography component="h1" variant="h5">
        Autocompleter
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Post Id */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Post ID"
              variant="outlined"
              name="id"
              value={postInfo.id || ""}
              onChange={handleChange}
              onBlur={handleBlur}
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
              value={postInfo.title || ""}
              onChange={handleChange}
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
              value={postInfo.body || ""}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddressForm;
