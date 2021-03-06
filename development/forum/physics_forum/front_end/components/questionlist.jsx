import React from "react";
import CategoryHeader from "./categoryheader.jsx"


export default function QuestionList(props) {
  if(props.mode === "initial" && props.qid === '0'){
    return(
      <div className = "questions col-md-8">
        <p>
          Choose a category on the left to view the list of posts. Each category is grouped by scale.
        </p>
        <p>
          The universe scale is for topics covering the whole universe. Examples include general relativity, cosmology, dark matter/energy and galactic evolution.
        </p>
        <p>
          The astrophysics scale is for all topics concerning astrophysical or astronomic phenomena. This includes celestial objects like stars, planets, nebulae, supernovae, black holes, exoplanets, asteroids, KBOs, active galactic nuclei.
        </p>
        <p>
          The earth scale is for things on a scale humans can see in a given day. This includes topics such as classical mechanics, electromagnetism, optics, chaos, thermodynamics, hydrodynamics, and atmospheric phenomena
        </p>
        <p>
          The quantum scale is for all topics on a small scale. These are phenomena that happen on a scale too small for human eyes to observe without assistance. This includes quantum mechanics, string theory, particle/nuclear physics, and GUT theories (Grand Unified Theories).
        </p>
      </div>
    );
  }
  else if(props.qid === '0' && (props.mode === 'universe' || props.mode === 'astro' || props.mode === 'planet' || props.mode === 'quantum')) {
    return(
      <div className = "questions col-md-8">
        <div className = "subheader">
          <CategoryHeader mode = {props.mode}/>
            <div>
              <button className = {`new-${props.hide} btn btn-primary`}
                      onClick = {props.newQn}>
                        Post New Question
              </button>
            </div>
        </div>
          {props.data.questions.map((q) => {
            return (
              <section className = "question-container" key = {q.id.toString()}>
                <a href = "#"
                  className = "question-details"
                  onClick = {() => {props.selectQn(q.id)}}
                  value = {q.id}>
                    {q.text}
                </a>
                <div className = "details-container">
                  <div>Answers: {q.numAnswers}</div>
                  <div>Question submitted by: {q.user} on {q.time}</div>
                </div>
              </section>
            );
          })
          }
      </div>
    )
  }

  else if (props.qid) {
    return(
      <div className = "questions col-md-8">
        <section className = "view-question">
          <p className = 'qn-text'>{props.data.questions[0].text}</p>
          <p className = 'quser'>
            Question submitted by: {props.data.user} on {props.data.questions[0].time}
          </p>
        </section>
        {props.data.answers.map((i) => {
          return(
            <section className = "view-answer" key = {i.id}>
              <p className = 'qn-text'>{i.text}</p>
              <p className = 'quser'>Answer submitted by: {i.user} on {i.time}</p>
            </section>
          )
        })}
        <button className = {`new-${props.hide} btn btn-primary`}
                onClick = {props.newAns}>
                  Post New Answer
        </button>
      </div>
    )
}}