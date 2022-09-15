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
  console.log('videoid :>> ', id);  

  const [videoItem, setVideoItem] = useState("");
  
  const getVideo = async () => {
    const res = await axios.request(options);
    const { id } = res.data.items;
    console.log('id', id)
    // const video = videoItem.find((item)=>item.id === parseInt(id))
    // console.log('video :>> ', video);
    setVideoItem();
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
      
      
          <MyGrid container>
            <Grid item xs={4}>
              <iframe
                max-width="470"
                height="315"
                src={`https://www.youtube.com/embed/${videoItem}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="true"
              ></iframe>
            </Grid>
          </MyGrid>
       
     
    </>
  );
};

export default VideoPlayer;
