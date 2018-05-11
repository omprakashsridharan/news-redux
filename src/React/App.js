import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getArticles } from '../Redux/action';

function mapStateToProps(state){
  return {
    articles: state
  }
}

class App extends Component {
  
  componentWillMount(){
    console.log('hi')
    this.props.dispatch(getArticles())
  }

  render() {
    let data
    if(!this.props.articles){
      data = (<div>Loading</div>)
    }else{
      data = this.props.articles.map((article)=>{
        return (
        <div>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
       )
      })
   }
    return (
      <div>
        {data}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
