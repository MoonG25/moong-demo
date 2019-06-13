import React from 'react';
import { Route, Switch } from 'react-router-dom';


// pages
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';
import PortfolioPage from './pages/Portfolio';
import PostsPage from './pages/Posts';
import AboutPage from './pages/About';
import TestPage from './pages/Test';

export default props => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/blog" component={BlogPage} />
    <Route exact path="/contact" component={ContactPage} />
    <Route exact path="/portfolio" component={PortfolioPage} />
    <Route exact path="/posts" component={PostsPage} />
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/test" component={TestPage} />
  </Switch>
);