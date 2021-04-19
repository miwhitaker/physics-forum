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
                  error: ''
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
    
    const url = process.env.API_URL + 'api/'
    fetch(`${url}` + value)
      .then((response) => response.json())
      .then((data) => {
        for(let i = 0; i < data.questions.length; i++) {
          const newFormat = dateConverter(data.questions[i].time);
          data.questions[i].time = newFormat;
        }
        this.setState({qdata: data});
        if(this.state.qdata.user) {
          this.setState({toHide: 'unhide'});
        };
        })
  }


  selectQuestion(value) {
    const val = '' + value;
    this.setState({question: val});
    const url = process.env.API_URL + 'question/'
    fetch(`${url}` + value)
      .then((response) => response.json())
      .then((data) => {
        const newerFormat = dateConverter(data.questions[0].time);
        data.questions[0].time = newerFormat;
        for(let i = 0; i < data.answers.length; i++) {
          const newFormat = dateConverter(data.answers[i].time);
          data.answers[i].time = newFormat;
        }
        this.setState({qdata: data, question: value})
      }
    );
  }


  newQuestion() {
    this.setState ({showQ: true, showA: false})
  }


  newAnswer() {
    this.setState ({showQ: false, showA: true})
  }


  closeQuestion() {
    this.setState({showQ: false, showA: false})
  }


  submitQuestion(value) {
    this.setState({error: ''})
    if(value.length == 0) {
      this.setState({error: 'ERROR: Your question was empty, please type something in the box or click "Cancel"'})
      return 
    }
    const lastCharacter = value.slice(-1)
    if(lastCharacter !== '?') {
      this.setState({error: "ERROR: Your question should end with a question mark"});
      return
    }
    const qnText = {thing: value}
    const currCategory = '' + getCatNum(this.state.display);
    this.setState({showQ: false});
    const url = process.env.API_URL + 'api/'
    fetch(`${url}` + currCategory, {
          method: 'POST',
          headers: {'Content-Type': 'application/json',
                    'Accept': 'application/json'},
          body: JSON.stringify(qnText),
        })
      .then((response) => response.json())
      .then((data) => {
        for(let i = 0; i < data.questions.length; i++) {
          const newFormat = dateConverter(data.questions[i].time);
          data.questions[i].time = newFormat;
        }
        this.setState({qdata: data})
        }
      );  
  }


  submitAnswer(value) {
    if(value.length == 0) {
      this.setState({error: 'ERROR: Your answer was empty, please type something in the box or click "Cancel"'})
      return 
    }
    this.setState({showA: false, error: ''})
    const currCategory = '' + getCatNum(this.state.display);
    const currQuestion = this.state.question
    const ansText = {thing: value, 
                      questionNumber: currQuestion,
                      cat: currCategory}
    const url = process.env.API_URL + 'questions/'
    fetch(`${url}` + currQuestion, {
          method: 'POST',
          headers: {'Content-Type': 'application/json',
                    'Accept': 'application/json'},
          body: JSON.stringify(ansText),
        })
      .then((response) => response.json())
      .then((data) => {
        const newerFormat = dateConverter(data.questions[0].time);
        data.questions[0].time = newerFormat;
        for(let i = 0; i < data.answers.length; i++) {
          const newFormat = dateConverter(data.answers[i].time);
          data.answers[i].time = newFormat;
        }
        this.setState({qdata: data});
        }
      )
  }


  render() {
    return(
      <div id = "bg" className = {this.state.display}>
        <div className = "row main-container">
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
              data = {this.state.qdata}
              error = {this.state.error}
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

// This function converts the date from iso format to one I prefer to use
function dateConverter(date) {
  const timeArr = [];
  const merid = [];
  const dateArr = date.split('-');
  const month = dateArr[1];
  const day = dateArr[2][0] + dateArr[2][1];
  const year = dateArr[0];
  timeArr.push(dateArr[2][3] + dateArr[2][4]);
  timeArr.push(dateArr[2][6] + dateArr[2][7]);
  if(timeArr[0] == 0) {
    timeArr[0] = 12;
    merid.push('AM');
  }
  else if(timeArr[0] >= 13) {
    timeArr[0] -= 12;
    merid.push('PM');
  }
  else if(timeArr[0] == 12) {
    merid.push('PM');
  }
  else{merid.push('AM')};
  const mdy = [month, day, year];
  const datetime = String(mdy.join("/")) + " " + String(timeArr.join(":")) + " " + merid.pop();
  return datetime;
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)