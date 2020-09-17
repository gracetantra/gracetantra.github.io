import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-contact" data-section="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Contact</span>
                <h2 className="colorlib-heading">Get in touch with me!</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon" style={{background: '#f2af96'}}>
                    <i className="icon-mail" />
                  </div>
                  <div className="colorlib-text">
                    <p style={{fontSize: '15px'}}><a href="mailto::gtantra@scu.edu">gtantra@scu.edu</a></p>
                  </div>
                </div>
                <p/> <p/>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon" style={{background: '#8bc9c5'}}>
                    <i className="icon-phone" />
                  </div>
                  <div className="colorlib-text">
                    <p style={{fontSize: '15px'}}><a href="tel://">+1 (510) 833 5824</a></p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon" style={{background: '#f5b8c6'}}>
                    <i className="icon-user-add" />
                  </div>
                  <div className="colorlib-text">
                    <p style={{fontSize: '13px'}}>Or check out my social media pages on the left!</p>
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
