import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Category from "./components/category.jsx"
import QuestionList from "./components/questionlist.jsx"
import NewQuestion from "./components/newQuestion.jsx"


// For the state variables, display is what tells the components what to render (hard-coded values). The values
// are initial (no category clicked), then universe, astro, planet, quantum for each category
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  display: 'initial', 
                  qdata: {user: '', questions: [], answers: []}, 
                  toHide: 'hide', 
                  activeArr: [0, 0, 0, 0],
                  question: '0',
                  showQ: false,
                  showA: false,
                };
    this.clickCategory = this.clickCategory.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.newAnswer = this.newAnswer.bind(this);
    this.closeQuestion = this.closeQuestion.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }


  clickCategory(value) {
    if(this.state.question) {
      this.setState({question: '0', qdata: {questions: [], answers: []}});
    }
    let array = [0, 0, 0, 0];
    if(this.state.activeArr[value - 1] === 'active') {
      this.setState({activeArr: array});
    }
    else {
      array[value - 1] = 'active';
      this.setState({activeArr: array});
    };

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
      .then((data) => {
        this.setState({qdata: data});
        if(this.state.qdata.user) {
          this.setState({toHide: 'unhide'});
        };
        })
  }


  newQuestion() {
    this.setState ({showQ: true, showA: false})
  }


  newAnswer() {
    this.setState ({showQ: false, showA: true})
  }


  submitQuestion(value) {
    if(value.length == 0) {
      return alert("Your question was empty, please type something in the box or click 'Cancel'");
    }
    const lastCharacter = value.slice(-1)
    if(lastCharacter !== '?') {
      return alert("Your question should end with a question mark");
    }
    const qnText = {thing: value}
    const currCategory = '' + getCatNum(this.state.display);
    this.setState({showQ: false});
    const url = 'http://localhost:8000/api/'
    fetch(`${url}` + currCategory, {
          method: 'POST',
          headers: {'Content-Type': 'application/json',
                    'Accept': 'application/json'},
          body: JSON.stringify(qnText),
        })
      .then((response) => response.json())
      .then((data) => this.setState({qdata: data}));  
  }


  closeQuestion() {
    this.setState({showQ: false, showA: false})
  }
  

  selectQuestion(value) {
    const val = '' + value;
    this.setState({question: val});
    const url = 'http://localhost:8000/question/'
    fetch(`${url}` + value)
      .then((response) => response.json())
      .then((data) => this.setState({qdata: data, question: value})
    );
  }


  submitAnswer(value) {
    console.log('submit an answer to question: ');
    if(value.length == 0) {
      return alert("Your answer was empty, please type something in the box or click 'Cancel'");
    }
    this.setState({showA: false})
    const currCategory = '' + getCatNum(this.state.display);
    const currQuestion = this.state.question
    const ansText = {thing: value, 
                      questionNumber: currQuestion,
                      cat: currCategory}
    console.log(ansText)
    const url = 'http://localhost:8000/question/'
    fetch(`${url}` + currQuestion, {
          method: 'POST',
          headers: {'Content-Type': 'application/json',
                    'Accept': 'application/json'},
          body: JSON.stringify(ansText),
        })
      .then((response) => response.json())
      .then((data) => console.log(data));
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
                      hide = {this.state.toHide}
                      newQn = {this.newQuestion}
                      selectQn = {this.selectQuestion}
                      newAns = {this.newAnswer}/>
        <NewQuestion
              showQ = {this.state.showQ}
              showA = {this.state.showA}
              closeQn = {this.closeQuestion}
              submitQn = {this.submitQuestion}
              submitAns = {this.submitAnswer}/>
      </div>
    </div>
    )
  }
}


function getCatNum(val) {
  if(val === 'universe') {
    return 1;
  }
  else if(val === 'astro') {
    return 2;
  }
  else if(val === 'planet') {
    return 3;
  }
  else if(val === 'quantum') {
    return 4;
  }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)