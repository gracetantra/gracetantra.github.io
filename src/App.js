import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Skills from './components/skills'
import Resume from './components/resume'
import Projects from './components/projects'
import Contact from './components/contact'

class App extends Component {
  render() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
		      <Sidebar></Sidebar>
		      <div id="colorlib-main">
			       <About></About>
             <Skills></Skills>
             <Resume></Resume>
             <Projects></Projects>
             <Contact></Contact>
        	</div>
      	</div>
      </div>
    );
  }



}

export default App;
