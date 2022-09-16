import { Grid, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MyGrid2 } from "../components/Mainmenu";
import { sets } from "../components/Mainmenu";
import { Links } from "../components/Mainmenu";
import { useParams } from "react-router-dom";

const MyGrid = styled(Grid, {})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: '#202020',
  borderRadius: '20px',
  padding: "1rem",
})

const options = {
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    relatedToVideoId: "dT03l2fbEnU",
    part: "id,snippet",
    type: "video",
    maxResults: "1",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
const VideoPlayer = () => {
  const {id} = useParams()
  console.log('videoid :>> ', id);  

  const [videoItem, setVideoItem] = useState('');
  const [videoDescrip, setVideoDescrip] = useState('');
 
  
  const getVideo = async () => {
    const res = await axios.request(options);
    const { items } = res.data;
    console.log('items', items)
    const getVideoId = items.find(item => item.id.videoId == id)
    // const getVideoDescrip = items.find(item => item?.snippet?.description)
    console.log('video :>> ', getVideoId);
    if(getVideoId){
      setVideoItem(getVideoId?.id?.videoId);
    }
    setVideoDescrip(items?.snippet?.description)
  };
  useEffect(() => {
    getVideo()
  }, [])
  
  return (
    <>
      <MyGrid2 container sx={{my: "50px"}}>
        {sets?.map((items) => {
          return (
            <Grid items xs={1}>
              <Links to={items.to}>{items.title}</Links>
            </Grid>
          );
        })}
      </MyGrid2>
          <MyGrid container >
            <Grid xs={6}>
              <iframe
                width="900"
                height="600"
                src={`https://www.youtube.com/embed/${videoItem}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="true"
              ></iframe>
            </Grid>
            <Grid xs={6}>
              <Typography>{`Description:${videoDescrip}`}</Typography>
              </Grid>         
          </MyGrid>
       
     
    </>
  );
};

export default VideoPlayer;
