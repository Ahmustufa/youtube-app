import { Button, Grid, Paper, Typography, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import Mainmenu from "../components/Mainmenu";
import axios from "axios";
import { Stack } from "@mui/system";


const MyGrid = styled(Grid, {})({
  display: "flex",
  justifyContent: "center",
  backgroundImage: 'linear-gradient(to right bottom, #430089, #82ffa1)'
})

const Home = () => {
  // states
  const [videoItems, setVideoItems] = useState([]);

  const options = {
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: "dT03l2fbEnU",
      part: "id,snippet",
      type: "video",
      maxResults: "10",
    },
    headers: {
      "X-RapidAPI-Key": "a895a0f46emsh95461a8c9582dc0p15e193jsn839588c5daeb",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  // async function calling youtube api, destruction array of objects and storing in usestate
  const getVideos = async () => {
    const res = await axios.request(options);
    console.log("res :>> ", res);
    const { items } = res.data;
    setVideoItems(items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Mainmenu>
      <>
        {/* <Grid container>
          <Grid item xs={12}> */}
            <MyGrid container rowGap={3} columnGap={8}>
              {videoItems?.map((item) => {
                return (
                  <Grid xs={3}>
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
                      </Stack>
                    </Paper>
                  </Grid>
                );
              })}
            </MyGrid>
          {/* </Grid>
        </Grid> */}
      </>
    </Mainmenu>
  );
};

export default Home;
