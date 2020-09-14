import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading1">Hi, I'm Grace!</h2>
                    <p>I am currently a sophomore at Santa Clara University studying in Computer Science. I'm also minoring in Economics and Japanese Studies, and I enjoy learning Graphic Design on the side. I've loved problem solving ever since I was young. I'm always excited to learn more about different fields within software engineering—especially Artificial Intelligence and Web Development—and love to take on new challenges.</p>
                    <p>Outside of computer science, I spend my time baking, dancing, doodling, and gaming with friends. Channeling my creativity and having fun have always been important to me! I hope to learn more ways to combine my hobbies with my passion for technology in the future, and I enjoy playing around with small projects to test my ideas out. It's nice to meet you! </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <p/> <p/> <p/>
        <div className="colorlib-narrow-content">

            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-leaf" />
                </span>
                <div className="desc">
                    <h3>Create </h3>
                    <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-drop" />
                </span>
                <div className="desc">
                    <h3>Explore</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-pencil" />
                </span>
                <div className="desc">
                    <h3>Learn</h3>
                    <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      </div>
    )
  }
}
