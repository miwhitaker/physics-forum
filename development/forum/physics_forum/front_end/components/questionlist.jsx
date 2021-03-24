import React from "react";

export default function QuestionList(props) {
  console.log(props.mode)
  if(props.mode === "initial"){
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
  else {
    return(
      <div className = "questions col-md-8">
        <button className = "new">New Question</button>
        <div>
          <table className = "q-details">
            <thead>
              <tr>
                <th>Date/Time</th>
                <th>User</th>
                <th>Answers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5/15/19 3:00</td>
                <td>MoreCowbell</td>
                <td>3</td>
              </tr>
              <tr>
                <td>8/1/20 6:30</td>
                <td>Turd Ferguson</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}