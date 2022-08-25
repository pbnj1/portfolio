import React from "react";
import resume from "../../assets/images/resume.png";

function Resume() {
  return (
    <section>
      {/* <h1>Resume</h1> */}
      {/* <a
        href="https://drive.google.com/file/d/16bvoI---DO3vMxtBE9lSA2uiVBR2GDY6/view?usp=sharing"
        target="_blank"
      > */}

      <div class="col">
          <div class="card">
            <img
              src={resume}
              alt="resume"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://drive.google.com/file/d/10QHmpjtvsbnWVBVeplcSiD0j3IdQ08mL/view?usp=sharing" target="_blank" rel="noreferrer">
                <button>Download</button>
              </a>
            </div>
          </div>
        </div>


{/* <a href="https://carbon-combaters.herokuapp.com/landing" target="_blank" rel="noreferrer">
        <h2>Resume</h2>
        <button>Resume</button>
      </a>
      */}
    </section>
  );
}

export default Resume;
