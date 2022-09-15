import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { options } from "../screens/Home";
import { MyGrid } from "../screens/Home";
import { MyGrid2 } from "../components/Mainmenu";
import { sets } from "../components/Mainmenu";
import { Links } from "../components/Mainmenu";
import { useParams } from "react-router-dom";



const VideoPlayer = () => {

  const {id} = useParams()
  console.log('id :>> ', id);  
  const [videoItem, setVideoItem] = useState([]);

  const getVideo = async () => {
    const res = await axios.request(options);
    const { items } = res.data;
    setVideoItem(items);
    console.log("videoItems", videoItem);
  };
  useEffect(() => {
    getVideo()
  }, [])
  
  return (
    <>
      <MyGrid2 container>
        {sets?.map((items) => {
          return (
            <Grid items xs={1}>
              <Links to={items.to}>{items.title}</Links>
            </Grid>
          );
        })}
      </MyGrid2>
      {videoItem?.map((item) => {
        return (
          <MyGrid container>
            <Grid item xs={12}>
              <iframe
                max-width="470"
                height="315"
                src={`https://www.youtube.com/embed/${item}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="true"
              ></iframe>
            </Grid>
          </MyGrid>
        );
      })}
    </>
  );
};

export default VideoPlayer;
