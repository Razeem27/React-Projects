import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import CreatePost from './components/post/CreatePost'
import DeletePost from './components/post/DeletePost'
import EditPost from './components/post/EditPost'
import Post from './components/post/Post'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Post />}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        <Route path="/edit-post/:id" element={<EditPost />}/>
        <Route path="/delete-post/:id" element={<DeletePost />}/>
      </Routes>
    </Router>
  )
}

export default App