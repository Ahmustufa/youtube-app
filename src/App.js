import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './screens/Home';
import Music from "./screens/Music";
import History from "./screens/History";
import Saved from "./screens/Saved";
import Gaming from "./screens/Gaming";
import Settings from "./screens/Settings";
import Library from "./screens/Library";
import People from "./screens/People";
import VideoPlayer from "./videocomponents/VideoPlayer";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/gaming" element={<Gaming/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/saved" element={<Saved/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/videoplayer/:id" element={<VideoPlayer/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;






