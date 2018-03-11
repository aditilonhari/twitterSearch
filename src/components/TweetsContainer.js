import React, { Component } from 'react'
import axios from 'axios'

class TweetsContainer extends Component {
   constructor(props) {
    super(props)
    this.state = {
      query: '',
      tweets: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
   }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleQuery = (e) => {
    if(e.key == 'Enter'){
        axios.get('http://localhost:3001/application?q=' + this.state.query)
        .then(response => {
          this.setState({tweets: response.data})
        })
        .catch(error => console.log(error));
        e.preventDefault();
    }
  }

  render() {
    return (
      <div>
         <form>
          <input className='input' type="text" size="25"
            name="query" placeholder="Enter a search text and hit Enter"
            value={this.state.query} onChange={this.handleInput} onKeyPress={this.handleQuery}/>
         </form>
        <div>
          {this.state.tweets.map((tweet) => {
            return(
              <div key={tweet.id} >
                <p>{tweet.text}</p>
              </div>
            )       
          })}
        </div>
      </div>
    )
  }
}

export default TweetsContainer