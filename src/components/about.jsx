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
                    <p>I am currently a sophomore at Santa Clara University studying Computer Science; I also minor in Economics and Japanese Studies. I've loved problem solving ever since I was young, and I'm always excited to learn more about different fields within software engineering. Currently, I'm mainly playing around with Web Development, and am experimenting Game Development and Artificial Intelligence in my free time.</p>
                    <p>Outside of tech, I love to spend my time baking, dancing, doodling, and gaming with friends. Channeling my creativity and having fun have always been important to me! Feel free to contact me—you can find where to reach me at the bottom of this page, or through my social media on the sidebar. It's nice to meet you! </p>
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
                <div className="services color-1" style={{background: '#fff7e8'}}>
                <span className="icon">
                    <i className="icon-leaf" />
                </span>
                <div className="desc">
                    <h3>Create </h3>
                    <p>I love experimenting with small CS projects to solve problems in my everyday life</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2" style={{background: '#fff7e8'}}>
                <span className="icon">
                    <i className="icon-drop" />
                </span>
                <div className="desc">
                    <h3>Grow</h3>
                    <p>I enjoy playing around with the unknown and taking up new challenges for myself</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3" style={{background: '#fff7e8'}}>
                <span className="icon">
                    <i className="icon-heart-outline" />
                </span>
                <div className="desc">
                    <h3>Have fun!</h3>
                    <p>I hope to have fun doing what I do, and always strive to bring more joy to my community</p>
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
