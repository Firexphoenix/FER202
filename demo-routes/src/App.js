import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <h1>React Router Example</h1>
      <Navigation/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          
          {/* Protected Routes */}
          <Route 
            path="/posts" 
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/post/:id" 
            element={
              <ProtectedRoute>
                <PostDetail />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
