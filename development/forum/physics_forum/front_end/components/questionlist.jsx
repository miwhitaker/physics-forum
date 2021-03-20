import React from "react";

export default function QuestionList(props) {
  console.log(props.mode)
    return(
      <div className = " questions col-md-8">
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