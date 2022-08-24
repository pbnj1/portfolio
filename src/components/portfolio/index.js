import React from 'react';

import teamID from "../../assets/images/teamID.png";
import textEditor from "../../assets/images/textEditor.png";
import comingSoon from "../../assets/images/comingSoon.jpeg";
import carbonCombaters from "../../assets/images/carbonCombaters.png";
import noTime from "../../assets/images/noTime.png";
import noteTaker from "../../assets/images/noteTaker.png";

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={carbonCombaters}
              alt="carbonComabters"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://carbon-combaters.herokuapp.com/landing" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
              {/* <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a> */}
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={noTime}
              alt="No Time to Weight"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://pbnj1.github.io/No-time-to-weight-app" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
              {/* <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a> */}
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={noteTaker}
              alt="Final Project"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://limitless-shore-06713.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
              {/* <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a> */}
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={teamID}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/pbnj1/Team-member-ID-fabricator" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              {/* <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a> */}
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={textEditor}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/pbnj1/Do-you-even-text" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              {/* <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a> */}
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={comingSoon}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/pbnj1" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              {/* <a href="" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a> */}
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;
