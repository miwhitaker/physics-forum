import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Category from "./components/category.jsx"
import QuestionList from "./components/questionlist.jsx"


// For the state variables, display is what tells the components what to render (hard-coded values). The values
// are initial (no category clicked), then universe, astro, planet, quantum for each category
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: 'initial'};
  }

  clickCategory(value) {
    let current = this.state.display
    if(value === 1) {
      let newCat = (current === "universe") ? "initial" : "universe"
      this.setState({display: newCat});
    }
    else if(value === 2) {
      let newCat = (current === "astro") ? "initial" : "astro"
      this.setState({display: newCat});
    }
    else if(value === 3) {
      let newCat = (current === "planet") ? "initial" : "planet"
      this.setState({display: newCat});
    }
    else if(value === 4) {
      let newCat = (current === "quantum") ? "initial" : "quantum"
      this.setState({display: newCat});
    }
    else{
      this.setState({display: "initial"});
    }
    
    const url = 'http://localhost:8000/api'
    
    fetch(`${url}` + '?category=' + value)
      .then(function(result){console.log(result)});

//    fetch(`${url}`, {
//      method: 'GET',
//      body: JSON.stringify({category: `${value}`})
//    })
//      .then(function(result){console.log(result)});
//With the fetch, grab user info to check if they're logged in -- null means not logged in.

  }

  postQuestion() {
    console.log("post a new question")

  }
  
  viewQuestion() {
    console.log("view a question")
    // possibly do just one div tag to display full question/answer view on right column, replacing the question list
  }

  render() {
    return(
      <div id = "bg" className = {this.state.display}>
        <div className = "row">
          <div className = "scale-container col-md-4">
            <Category name = "Universe Scale" 
                      clickCat = {this.clickCategory.bind(this)} 
                      val={1}/>
            <Category name = "Astrophysics Scale" 
                      clickCat = {this.clickCategory.bind(this)} 
                      val={2}/>
            <Category name = "Earth Scale" 
                      clickCat = {this.clickCategory.bind(this)} 
                      val={3}/>
            <Category name = "Quantum Scale" 
                      clickCat = {this.clickCategory.bind(this)} 
                      val={4}/>
          </div>
        <QuestionList 
          mode = {this.state.display}
          newQuestion = {this.postQuestion}
          clickQuestion = {this.viewQuestion}/>
      </div>
    </div>
    )
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
