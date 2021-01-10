import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import Post from '../../components/Post/Post';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink 
                to='/' 
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#af00bd',
                  textDecoration: 'underline'
                }}>Posts
              </NavLink></li>
              <li><NavLink 
                to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post
              </NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>{/* Load a single route with Switch */}
          <Route path="/new-post" exact component={NewPost} />          
          <Route path="/" component={Posts} />
        </Switch>
        {/* localhost:3000 => posts component */}
        {/* <Posts/> */}
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;