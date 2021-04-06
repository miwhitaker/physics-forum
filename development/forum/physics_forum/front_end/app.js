import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Category from "./components/category.jsx"
import QuestionList from "./components/questionlist.jsx"
import NewQ from "./components/newQuestion.jsx"


// For the state variables, display is what tells the components what to render (hard-coded values). The values
// are initial (no category clicked), then universe, astro, planet, quantum for each category
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  display: 'initial', 
                  qdata: {user: '', questions: [], answers: []}, 
                  toHide: true, 
                  activeArr: [0, 0, 0, 0],
                  question: '0',
                  showQ: false,
                  showA: false,
                };
    this.clickCategory = this.clickCategory.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
    this.viewQuestion = this.viewQuestion.bind(this);
  }

  clickCategory(value) {
    if(this.state.question) {
      this.setState({question: '0', qdata: {user: '', questions: [], answers: []}});
    }
    let array = [0, 0, 0, 0];
    if(this.state.activeArr[value - 1] = 'active') {
      this.setState({activeArr: array});
    }
    else {
      array[value - 1] = 'active';
      this.setState({activeArr: array});
    };

    console.log(this.state.activeArr)

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
    
    const url = 'http://localhost:8000/api/'
    fetch(`${url}` + value)
      .then((response) => response.json())
      .then((data) => this.setState({qdata: data}));    

      if(this.state.qdata.user) {
        this.setState({toHide: 'False'});
      }

  }

  postQuestion(value) {
    this.setState ({showQ: !this.state.showQ})
    console.log("post a new question");
  }
  
  viewQuestion(value) {
    const val = '' + value
    this.setState({question: val});
    const url = 'http://localhost:8000/question/'
    fetch(`${url}` + value)
      .then((response) => response.json())
      .then((data) => {this.setState({qdata: data, question: value})
    });
  }

  postAnswer() {
    console.log('submit an answer to question: ');
  }

  render() {
    return(
      <div id = "bg" className = {this.state.display}>
        <div className = "row">
          <div className = "scale-container col-md-4">
            <Category name = "Universe Scale" 
                      clickCat = {this.clickCategory} 
                      val = {1}
                      active = {this.state.activeArr[0]}/>
            <Category name = "Astrophysics Scale" 
                      clickCat = {this.clickCategory} 
                      val = {2}
                      active = {this.state.activeArr[1]}/>
            <Category name = "Earth Scale" 
                      clickCat = {this.clickCategory} 
                      val = {3}
                      active = {this.state.activeArr[2]}/>
            <Category name = "Quantum Scale" 
                      clickCat = {this.clickCategory} 
                      val = {4}
                      active = {this.state.activeArr[3]}/>
          </div>
        <QuestionList 
                      mode = {this.state.display}
                      qid = {this.state.question}
                      data = {this.state.qdata}
                      newQuestion = {this.postQuestion}
                      clickQuestion = {this.viewQuestion}
                      newAnswer = {this.postAnswer}/>
        <NewQ
              show = {this.state.showQ}/>
      </div>
    </div>
    )
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)