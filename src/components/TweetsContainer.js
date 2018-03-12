import React, { Component } from 'react'
import axios from 'axios'
import { BarLoader } from 'react-spinners'

class TweetsContainer extends Component {
   constructor(props) {
    super(props)
    this.state = {
      query: '',
      tweets: [],
      isLoading: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
   }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleQuery = (e) => {
    if(e.key === 'Enter'){
        this.setState({isLoading: true, tweets: []})
        axios.get(' http://cors.io/?u=https://twitter-search-server.herokuapp.com/application?q=' + this.state.query,function(data){})
        .then(response => {
          this.setState({tweets: response.data, isLoading: false})
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
         <div className="spinner">
           <BarLoader 
              color={'#000000'} 
              loading={this.state.isLoading}
            />
           <br />
         </div>
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