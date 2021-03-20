import React from "react";
import ReactDOM from "react-dom";
import Category from "./components/category.jsx"
import QuestionList from "./components/questionlist.jsx"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: 'initial'};
  }

  clickCategory(value) {
    console.log("clicked on " + String(value));
  }

  render() {
    return(
      <div id = "bg" className = "row">
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
        <QuestionList mode = {this.state.display}/>
      </div>
    )
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
