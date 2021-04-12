import React from "react";


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
        <button className = {`new-${props.hide}`}
                onClick = {props.newQn}>
                  Post New Question
        </button>
        {props.data.questions.map((q) => {
          return (
            <section className = "question-container">
              <a href = "#"
                className = "question-details"
                onClick = {() => {props.selectQn(q.id)}}
                value = {q.id}>
                  {q.text}
              </a>
              <div className = "details-container">
                <div>Date: {q.time}</div>
                <div>User: {q.user}</div>
                <div>Answers: {q.numAnswers}</div>
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
          <p>Question submitted by: {props.data.user} on {props.data.questions[0].time}</p>
          <p>{props.data.questions[0].text}</p>
        </section>
        {props.data.answers.map((i) => {
          return(
            <section className = "view-answer"
                      key = {i.id}>
              <p>Answer submitted by: {i.user} on {i.time}</p>
              <p>{i.text}</p>
            </section>
          )
        })}
        <button className = {`new-${props.hide}`}
                onClick = {props.newAns}>
                  Post New Answer
        </button>
      </div>
    )
}}