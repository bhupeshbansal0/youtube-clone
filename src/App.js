import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./components";


export default function App() {
  return (
    <BrowserRouter router>
      <Box sx={{width: '100%' ,backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}
