import { Button, Grid, Paper, Typography, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import Mainmenu from "../components/Mainmenu";
import axios from "axios";
import { Stack } from "@mui/system";
import { sets } from "../components/Mainmenu";
import { Link } from "react-router-dom";

export const getLink = () => {};

const Links = styled(
  Link,
  {}
)({
  textDecoration: "none",
  border: "1px solid black",
  textAlign: "center",
  borderRadius: "10px",
  color: "#DC143D",
  backgroundColor: "",
  fontWeight: "bold",
  fontSize: "1.25rem",
});

export const MyGrid = styled(
  Grid,
  {}
)({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#202020",
  borderRadius: "20px",
  padding: "1rem",
});

export const options = {
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    relatedToVideoId: "dT03l2fbEnU",
    part: "id,snippet",
    type: "video",
    maxResults: "10",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const Home = () => {
  // states
  const [videoItems, setVideoItems] = useState([]);
  // const [time, setTime] = useState("");

  // async function calling youtube api, destruction array of objects and storing in usestate
  const getVideos = async () => {
    const res = await axios.request(options);
    // console.log("res :>> ", res);
    const { items } = res.data;
    setVideoItems(items);
    // console.log('videoItems', videoItems)
  };
  useEffect(() => {
    getVideos();
    
  }, []);
  return (
    <Mainmenu>
      <Typography variant="h4">New Videos</Typography>
      <MyGrid container rowGap={3} columnGap={8}>
        {videoItems?.map((item) => {
          return (
            <Grid item xs={3}>
              <Paper elevation={3}>
                <Stack>
                  <iframe
                    max-width="470"
                    height="315"
                    src={`https://www.youtube.com/embed/${item?.id?.videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="true"
                  ></iframe>
                  {/* <Typography>{`Video id: ${item?.id?.videoId}`}</Typography> */}
                  <Typography>{`Date: ${item?.snippet?.publishTime}`}</Typography>
                  <Links to={`/videoplayer/${item?.id?.videoId}`}>Play</Links>
                </Stack>
              </Paper>
            </Grid>
          );
        })}
      </MyGrid>
    </Mainmenu>
  );
};

export default Home;
