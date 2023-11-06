import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bulma/css/bulma.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src={reactLogo} alt="React logo" />
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="columns">
          <div className="column is-one-fifth">
            First column
          </div>
          <div className="column">
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
            </h2>
            <div className="content">
              <h1>
                Hello 👋 if you're looking for asa55's personal site, you found it 🤠. As you can see this site is very much under construction. Please check back soon!
              </h1>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                      <p className="title">Vertical...</p>
                      <p className="subtitle">Top tile</p>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <p className="title">...tiles</p>
                      <p className="subtitle">Bottom tile</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                      <p className="title">Middle tile</p>
                      <p className="subtitle">With an image</p>
                      <figure className="image is-4by3">
                        <img src={viteLogo} alt="Vite logo" />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Wide tile</p>
                    <p className="subtitle">Aligned with the right tile</p>
                    <div className="content">
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                  <div className="content">
                    <p className="title">Tall tile</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content">
                    </div>
                  </div>
                </article>
              </div>
            </div>

          </div>
          <div className="column is-one-fifth">
            Third column
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>asa55.github.io</strong> by <a href="https://github.com/asa55">asa55</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. All rights reserved for the website content.
          </p>
          <button onClick={() => setCount((count) => count + 1)}
            className="button is-dark"
          >
            count is {count}
          </button>
        </div>
      </footer>
    </>
  )
}

export default App
