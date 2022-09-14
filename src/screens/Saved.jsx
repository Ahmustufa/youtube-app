import { Grid, Typography } from '@mui/material'
import React from 'react'
import Mainmenu from "../components/Mainmenu"
import { MyGrid } from './Home'

const Saved = () => {
  return (
    <Mainmenu>
      <Typography variant="h4">Saved Videos</Typography>
      <MyGrid container>
        <Grid item xs={3}></Grid>
      </MyGrid>
    </Mainmenu>
  )
}

export default Saved
