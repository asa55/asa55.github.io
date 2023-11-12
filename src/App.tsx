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
            <h1 className="title">Hello 👋 thanks for visiting my <em>about me</em> page</h1>
            <p className="is-small">
              Nice to meet you 🤠 name's Alex. If you're here, you likely found a link from one of my sources listed up in the navbar ☝️
            </p>
            <br />
            <p>
              Recently I've found myself formalizing my systems engineering studies. In my career, I've been fortunate to have the opportunity to support requirements documents, specifications, V&V procedures, and more direct experience in the systems world. The standards I used were largely internal, and now I've identified some great resources I'm working through presently: (1) the Systems Engineering Body of Knowledge (SEBoK) (2) the NASA Systems Engineering Handbook (3) the INCOSE Handbook (4) ISO/IEC/IEEE 15288 (5) MIT 16.842 Fundamentals of Systems Engineering. There are others. What I'm finding is that there is substantial overlap between my experiences in both electrical and software engineering. But there is a space I'm particularly interested in right now, systems engineering in an Agile context. There is a <a href="https://www.youtube.com/watch?v=CHuu7rBPI0M">fascinating webinar here</a> from the author of an INCOSE best paper award on this topic in 2022. The central claim is that systems engineering is inherently antagonistic to Agile, but not completely incompatible. At this time I'm actively refining my views on this, and squaring these thoughts against my career experiences. Stay tuned as <a href="https://medium.com/@alexander.s.augenstein">I blog on Medium</a> every so often, and this is likely to manifest as a post there.
            </p>
            <br />
            <p>
              You may read through this site and think, wow, this guy is a ML and robotics wiz. The reality is that it has been some time since I've been steeped in those worlds. I would not hesitate for a moment to dive back in, but I still work on all kinds of interesting systems. In the words of Anant Agarwal, it's what we engineers do 😁. I'm happy having the continued privilege to work alongside a ton of awesome people on all kinds of cool projects. My wide range of interests and experiences are not all reflected here. This page is mainly to gesture to the type of person I see myself as, and to gin up conversation. Where legal and ethical, I'm happy to discuss some of my career experiences further!
            </p>
            <br />
            <p>
              With those caveats out of the way, here are some things I'd like you to know about me:
            </p>
            <br />
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                      <p className="title">DevSecOps</p>
                      <p className="is-small">For a recent task, I've read and internalized <a href="https://dodcio.defense.gov/Library/">all of the docs here</a>, and more surrounding these. <br />A long time prior I put together <a href="https://codesandbox.io/s/github/asa55/class-sre-implements-devops">this summary</a> of Google's take on Site Reliability Engineering (a subset of DevOps)</p>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <p className="title">Information Technology</p>
                      <p className="is-small">I've worked in enterprise IT for a few years now as a DevOps engineer. I'm not at liberty to discuss the details here, but one thing you can do to assess my skills here would be to inspect the source for the site you're currently reading. It's a personal project, not my crown jewel, but I think it speaks to the way I approach problems in this area. I do some sysadmin work and support IaC development and deployment.</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                      <p className="title">M.S. thesis</p>
                      <p className="is-small">Machine learning is a massive field moving at breakneck speeds. In terms of industry applications, reinforcement learning is still only a small sliver. It is budding but has incredible growth potential. For my interests, it is one important area where feedback control systems and machine learning meet. My M.S. thesis discusses this in a bit more detail - click the image to give it a read!</p>
                      <br />
                      <figure className="image is-6by3">
                        <a href="https://d-scholarship.pitt.edu/36179/1/augensteinas_etdPitt03302019.pdf">
                          <img src={msthesisImage} alt="MS thesis image" />
                        </a>
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Math is fun and cool, actually</p>
                    <p className="is-small">A mechE friend and I were sitting at a bar after work when he sent me <a href="https://www.youtube.com/watch?v=HEfHFsfGXjs">this 3B1B video</a>. The video asserts that under certain conditions, the number of collisions between two masses and a wall can be used to approximate the digits of π with arbitrary accuracy. There is a solution video that shakes out the math, but for whatever reason we became completely captivated by the desire to solve this problem ourselves. Back of the napkin calculations weren't cutting it. Luckily we lived at the same apartment complex in the same hall, and it was a Friday night. My wife and I were having friends over anyway, so after the bar we sharpened our pencils and got to it. For our other friends it was good for a laugh while we worked on this tirelessly through the wee hours (we have videos, of course). One by one our other friends dropped off and went home, wife went to bed, my buddy and I pressed on, crunching numbers. Must have been one or two in the morning when we finally sorted out the math, exhausted and exhilarated! That was quite a few years ago now, pre-pandemic era. But a cherished memory for me, and I think completely indicative of how I prefer to spend my spare time. We wrote some Python that I ended up dropping into a Jupyter notebook - if you want to see that in action you can <a href="https://www.kaggle.com/code/alexboxer4/digits-of-pi-from-elastic-collisions?scriptVersionId=14895614#538654">find it on Kaggle here.</a></p>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                  <p className="title">Cloud</p>
                  <p className="is-small">Once upon a time I had a certification in AWS. Not long after, I found myself in a situation where I had to learn a lot about Azure cloud quickly, so I made a bunch of flashcards and shared them for future me and <em>just in case</em> someone else was interested. You can <a href="https://asa55.github.io/docs-as-flashcards/">find them here</a>, you'll need to download the whole bundle, I tore down the individual sets of cards. These are already out of date, Azure Active Directory is now called Microsoft Entra ID for example. If you actually want to learn cloud, just get your coffee pot ready and read the docs. <br /><br />Topics include:<br />C#<br /> JavaScript<br />Terraform<br />Azure API-Management<br />Azure App Services<br />Azure Storage<br />Azure Functions<br />Azure Key Vault<br />Azure Policy<br />Azure Private Link<br />Azure REST API<br />Azure Service Bus<br />Azure Virtual Machines<br />Azure Virtual Network</p>
                </article>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                  <p className="title">Robots! 🤖</p>
                  <p className="is-small">Click the images to read something I wrote up in <em>ECE 2647, Nonlinear Control Systems</em>. This one was particularly fun as my team had the opportunity to design, code, implement and compare the performance of three control strategies on the same robotic arm, shown below. The control strategies used included (1) feedback linearization (2) sliding mode control (3) model reference adaptive control. As you might expect, the feedback linearization approach offered the best reference tracking performance, but the plant (robot) didn't change over the course of the experiment and disturbances were minimal (we didn't want to break our professor's cool toy). Every feedback control strategy has its place. For feedback linearization, it's going to shine in a highly controlled laboratory environment.</p>
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
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                      <p className="title">Genetic algorithms</p>
                      <p className="is-small">Click the image to read something I wrote up in <em>ECE 2195, Special Topics: Computing & Biology</em></p>
                      <br />
                      <div className="content">
                        <figure className="image is-6by3">
                          <a href="https://www.dropbox.com/sh/z1oy6qz0x6cswwt/AAAg_GueA9ir5yrI-CX_01h5a?dl=0&preview=Augenstein_Brodmerkel_FinalProject_4_8_2018.pdf">
                            <img src={geneticalgorithmImage} alt="Genetic algo paper image" />
                          </a>
                        </figure>
                      </div>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <p className="title">Neural nets</p>
                      <p className="is-small">This was a fun little app I wrote that lets you train a neural net. Note that the weights are randomized to begin with, so expect to get incorrect results at first. Hand-write a character, tell the neural net what it is, and the classification will get better the more samples you feed it. <a href="https://asa55.github.io/tfjs-demo/index.html">Click here to try for yourself</a></p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                      <p className="title">Electrical engineering</p>
                      <p className="is-small">You may notice that given my substantial experience and education in this area, you aren't seeing many sections on this website about the topic. <a href="https://www.linkedin.com/in/alex-augenstein">Find me on LinkedIn for details</a>. There's not a lot I'm at liberty to discuss here, but in broad strokes I'll comment that I've used AutoCAD heavily, and worked closely with technicians to build out and wire up the things I drew. The things I made, if done wrong, had the potential to seriously harm people or worse. I fully understood the gravity of this responsibility and performed my work accordingly. I have never been responsible for a safety incident. For systems I was cognizant over, some of the testing and V&V I did on my own, some I wrote test procedures for and delegated work. This also applies to control system implementations of my design, which were not limited to electrical considerations. Thermal, hydraulic, pressure, flow control and more were in bounds for the control systems tasks I performed. And time series data logging and monitoring as well (and lots and lots of paperwork, of course).</p>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Neural nets (the hard way)</p>
                    <p className="is-small"> They can be implemented by hand, click the image below to learn how. Compliments of my time in <em>ECE 2195, Special Topics: Machine Learning</em></p>
                    <div className="content">
                      <figure className="image is-6by3">
                        <a href="https://www.dropbox.com/sh/v1y7rq5hsd6g16l/AADKh8Z6A3aC_r3DebGhSGPka?dl=0&preview=NeuralNetsFromScratch.docx">
                          <img src={neuralnetImage} alt="Neural net image" />
                        </a>
                      </figure>
                    </div>
                  </article>
                </div>
              </div>
            </div>

          </div>
          <div className="column is-2">
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
