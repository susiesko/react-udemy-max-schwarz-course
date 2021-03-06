import React, { Component } from 'react';
import axios from '../../../axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount() {
        // if unauth => this.props.history.replace('/posts');
        console.log(this.props);
    }

    postDataHandler = () => {
      const data = {
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
      };

      axios.post('/posts/', data)
        .then(response => {
          console.log('postDataHandler response', response);
          //this.props.history.push('/posts'); // could also use the history to redirect instead of loading a Redirect component. This adds to the stack though so you can go back to the new order page. 
          this.props.history.replace('/posts'); // use replace to not go back to form.
          //this.setState({ submitted: true });
        });
    }

    render () {
        let redirect = this.state.submitted ? <Redirect to="/posts" /> : null;
        
        return (
            <div className="NewPost">
                { redirect }
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;