import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './hocs/Layout';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import Home from './components/Home';
import Category from './components/Category';

const App = () => (
  <Router>
    <Layout> 
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/blog' Component={Blog} />
        <Route exact path='/category/:id' Component={Category} />
        <Route exact path='/blog/:id' Component={BlogDetails} />
      </Routes>
    </Layout>
  </Router>

);

export default App;