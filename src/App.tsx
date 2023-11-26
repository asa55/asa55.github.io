import { useState } from 'react'
import myLogo from '/logo.svg'
import githubLogo from './assets/GitHub_Logo.png'
import mediumLogo from './assets/Medium-Logo-Black-RGB.svg'
import linkedinLogo from './assets/LinkedIn-Blue-26@2x.png'
import neuralnetImage from './assets/neuralnetece2195.png'
import geneticalgorithmImage from './assets/geneticalgoece2195.png'
import msthesisImage from './assets/msthesis.png'
import nonlinearcontrolImage from './assets/nonlinearcontrol.png'
import nonlinearcontrolrobotImage from './assets/nonlinearcontrolrobot.png'
import nonlinearcontrolperformanceImage from './assets/nonlinearcontrolperformance.png'
import 'bulma/css/bulma.css'

function App() {
  const [navbarActive, toggleNavbarActive] = useState(false)

  return (
    <>
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://github.com/asa55/asa55.github.io">
            <img src={myLogo} alt="asa55 logo" />
          </a>

          <a role="button"
            className={`navbar-burger ${navbarActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => toggleNavbarActive((navbarActive) => !navbarActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${navbarActive ? "is-active" : ""}`} >
          <div className="navbar-start">
            <a className="navbar-item" href="https://github.com/asa55">
              <img src={githubLogo} alt="GitHub logo" />
            </a>
            <a className="navbar-item" href="https://medium.com/@alexander.s.augenstein">
              <img width={110} src={mediumLogo} alt="Medium logo" />
            </a>
            <a className="navbar-item is-expanded" href="https://www.linkedin.com/in/alex-augenstein">
              <img width={85} src={linkedinLogo} alt="Linkedin logo" />
            </a>
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="columns">
          <div className="column is-2">
          </div>
          <div className="column">
            <h1 className="title">Hello 👋 thanks for visiting</h1>
            <h2 className="subtitle">To respect the needs of my current employer, the content here is predominantly non-work-related. Find me on <a href="https://www.linkedin.com/in/alex-augenstein">LinkedIn</a> and <a href="https://medium.com/@alexander.s.augenstein">Medium</a> for more info!</h2>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                      <p className="title">Software Engineering</p>
                      <p className="is-small">
                        Ask me about <a href="https://dodcio.defense.gov/Library/">DevSecOps as defined by the DoD</a>
                        <br />
                        <br />
                        Ask me about <a href="https://codesandbox.io/s/github/asa55/class-sre-implements-devops">Site Reliability Engineering as defined by Google</a>
                        <br />
                        <br />
                        Check out the CI/CD pipelines I wrote for <a href="https://github.com/asa55/asa55.github.io">the site you're currently reading</a>
                        <br />
                        <br />
                        I started learning cloud in 2019 and received an <a href="https://www.credly.com/badges/34976473-40f4-452b-86e7-b6751834ff4a">aws cloud pratitioner certification</a>
                        <br />
                        <br />
                        My next job used Azure cloud, so I created and studied <a href="https://asa55.github.io/docs-as-flashcards/docs/downloads.html">flashcards from official docs</a>
                      </p>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <p className="title">Electrical Engineering</p>
                      <p className="is-small">
                        My B.S. and M.S. are both from the University of Pittsburgh Swanson School of Electrical and Computer Engineering
                        <br />
                        <br />
                        The first 6 years of my career were electrical engineering heavy, ask me about electrical cabinet and enclosure design, layout, fabrication, programmable logic controllers, applications in the 5 - 480V range
                        <br />
                        <br />
                        My year of co-operative education was electrical engineering heavy, ask me about printed circuit board design and fabrication
                        <br />
                        <br />
                        Click the image below to read something my team and I wrote up in <em>ECE 2195, Special Topics: Computing & Biology</em></p>
                      <br />
                      <div className="content">
                        <figure className="image is-6by3">
                          <a href="https://www.dropbox.com/sh/z1oy6qz0x6cswwt/AAAg_GueA9ir5yrI-CX_01h5a?dl=0&preview=Augenstein_Brodmerkel_FinalProject_4_8_2018.pdf">
                            <img src={geneticalgorithmImage} alt="Genetic algo paper image" />
                          </a>
                        </figure>
                      </div>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                      <p className="title">Control Systems Engineering</p>
                      <p className="is-small">
                        Ask me about my career experience applying model based control to safety critical systems
                        <br />
                        <br />
                        My M.S. research was at the intersection of machine learning and feedback control systems. Click the image below to read my thesis titled: <em>"Feudal Networks for Hierarchical Reinforcement Learning Revisited"</em></p>
                      <br />
                      <figure className="image is-6by3">
                        <a href="https://d-scholarship.pitt.edu/36179/1/augensteinas_etdPitt03302019.pdf">
                          <img src={msthesisImage} alt="MS thesis image" />
                        </a>
                      </figure>
                      <br />
                      <br />
                      <p className="is-small">Click the images below to read something my team and I wrote up in <em>ECE 2647, Nonlinear Control Systems</em>. Three control strategies are designed and applied to the same robotic arm, shown below.</p>
                      <br />
                      <div className="content">
                        <figure className="image is-6by3">
                          <a href="https://www.dropbox.com/scl/fi/7g7qlblbneyq1z1y5ctse/8__3DOFRobotNonlinearControl.docx?rlkey=nzvf2ey3eh98lf686orzbo0wu&dl=0">
                            <img src={nonlinearcontrolImage} alt="Nonlinear control paper image" />
                          </a>
                        </figure>
                        <figure className="image is-6by3">
                          <a href="https://www.dropbox.com/scl/fi/7g7qlblbneyq1z1y5ctse/8__3DOFRobotNonlinearControl.docx?rlkey=nzvf2ey3eh98lf686orzbo0wu&dl=0">
                            <img src={nonlinearcontrolrobotImage} alt="Nonlinear control robot image" />
                          </a>
                        </figure>
                        <figure className="image is-6by3">
                          <a href="https://www.dropbox.com/scl/fi/7g7qlblbneyq1z1y5ctse/8__3DOFRobotNonlinearControl.docx?rlkey=nzvf2ey3eh98lf686orzbo0wu&dl=0">
                            <img src={nonlinearcontrolperformanceImage} alt="Nonlinear control performance image" />
                          </a>
                        </figure>
                      </div>

                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Systems Engineering</p>
                    <p className="is-small">
                      Ask me about MIT 16.842
                      <br />
                      <br />
                      Ask me about the NASA Systems Engineering Handbook
                      <br />
                      <br />
                      Ask me about the INCOSE Systems Engineering Handbook
                      <br />
                      <br />
                      Ask me about ISO/IEC/IEEE 15288
                    </p>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                  <p className="title">Math!</p>
                  <p className="is-small">
                    I have a minor in math from the University of Pittsburgh
                    <br />
                    <br />
                    I get a lot of joy out of digging deep into math heavy topics just for fun. A short story I like sharing about this... A mechE friend and I were sitting at a bar after work when he sent me <a href="https://www.youtube.com/watch?v=HEfHFsfGXjs">this 3B1B video</a>. The video asserts that under certain conditions, the number of collisions between two masses and a wall can be used to approximate the digits of π with arbitrary accuracy. There is a solution video that shakes out the math, but for whatever reason we became completely captivated by the desire to solve this problem ourselves. Back of the napkin calculations weren't cutting it. Luckily we lived at the same apartment complex in the same hall, and it was a Friday night. My wife and I were having friends over anyway, so after the bar we sharpened our pencils and got to it. For our other friends it was good for a laugh while we worked on this tirelessly through the wee hours (we have videos, of course). One by one our other friends dropped off and went home, wife went to bed, my buddy and I pressed on, crunching numbers. Must have been one or two in the morning when we finally sorted out the math, exhausted and exhilarated! That was quite a few years ago now, pre-pandemic era. But a cherished memory for me, and I think completely indicative of how I prefer to spend my spare time. We wrote some Python that I ended up dropping into a Jupyter notebook - if you want to see that in action you can <a href="https://www.kaggle.com/code/alexboxer4/digits-of-pi-from-elastic-collisions?scriptVersionId=14895614#538654">find it on Kaggle here.</a>
                    <br />
                    <br />
                    Neural nets can be implemented by hand - understanding the details is math heavy. Click the image below to to see my write up. Compliments of my time in <em>ECE 2195, Special Topics: Machine Learning</em>
                  </p>
                  <div className="content">
                    <figure className="image is-6by3">
                      <a href="https://www.dropbox.com/sh/v1y7rq5hsd6g16l/AADKh8Z6A3aC_r3DebGhSGPka?dl=0&preview=NeuralNetsFromScratch.docx">
                        <img src={neuralnetImage} alt="Neural net image" />
                      </a>
                    </figure>
                  </div>
                  <br />
                  <p className="is-small">
                    The write up above shows you how to implement neural nets the hard way. But there's no need to do all the heavy lifting yourself, as shown in this <a href="https://asa55.github.io/tfjs-demo/index.html">TFJS demo applet</a> I wrote some years ago
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>asa55.github.io</strong> by <a href="https://github.com/asa55">asa55</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. All rights reserved for the website content.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
