import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
            <h1 id="colorlib-logo"><a href="index.html">Grace Tantra</a></h1>
            <span className="position">Santa Clara, CA</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active"><a href="#" data-nav-section="about">About</a></li>
                <li><a href="#" data-nav-section="skills">Skills</a></li>
                <li><a href="#" data-nav-section="resume">Resume</a></li>
                <li><a href="#" data-nav-section="projects">Projects</a></li>
                <li><a href="#" data-nav-section="contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <div className="icon-img" style={{backgroundImage: 'url(images/favicon.png)'}} />
          <div className="colorlib-footer">
            <ul><small>
              <li><a href="https://www.facebook.com/profile.php?id=100010278545637"><i className="icon-facebook2" /></a></li>
              <li><a href="https://www.instagram.com/grace.tantra/"><i className="icon-instagram" styles="width:300px"/></a></li>
              <li><a href="https://www.linkedin.com/in/grace-tantra-55475117a/"><i className="icon-linkedin2" /></a></li>
              <li><a href="https://github.com/gracetantra"><i className="icon-github" /></a></li>
            </small></ul>
          </div>
          <div className="colorlib-copyright-footer">
            <p><small>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Template by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              <br />Copyright © Grace Tantra 2020
            </small></p>
          </div>
          </aside>
        </div>
      </div>
    )
  }
}
