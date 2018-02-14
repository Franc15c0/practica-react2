import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      posts: null
    }
  }
  componentDidMount(){
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'GET'
    })
    .then(resp => resp.json())
    .then(resp => this.setState({ posts: resp }))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <section className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-JS</h1>
        </header>
        <div className = "github-users" > 
            { console.log("practicas",this.state) } 
            {this.state.posts ? <div>
                    User list 
                    {
                        this.state.posts.map(post => (<ul key={post.id}>
                                <li> { post.userId } </li> 
                                <li> {post.title}</li>                           
                            </ul>)

                            )
                        }
                        </div>: <span>Loading...</span >} 
                    </div>
                    </section> 
    );
  }
}

export default App;
