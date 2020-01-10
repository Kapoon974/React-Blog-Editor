import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../hoc/auth';
// pages for this product
import LandingPage from './views/LandingPage/LandingPage.js';
import LoginPage from './views/LoginPage/LoginPage.js';
import RegisterPage from './views/RegisterPage/RegisterPage.js';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';

import PostPage from './views/PostPage/PostPage';
import BlogPage from './views/BlogPage/BlogPage';
import CreateBlogPage from './views/BlogPage/Sections/CreatePage';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/blog/post/:post"
            component={Auth(PostPage, false)}
          />
          <Route exact path="/blog" component={Auth(BlogPage, false)} />
          <Route
            exact
            path="/blog/create"
            component={Auth(CreateBlogPage, false)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
