import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="resume">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">resume</span>
                <h2 className="colorlib-heading animate-box">Education and Activities</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <p><a class="btn btn-primary btn-learn" href="GraceTantraResume.pdf" download="GraceTantraResume"> <i class="icon-download4"/>  Click here to download my full resume!</a></p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2 style={{marginBottom: '7px'}}>Santa Clara University <span>September 2019 - June 2023</span></h2>
                        <p style={{fontSize:'15px', fontFamily:'"Quicksand", Arial, sans-serif'}}><i>B.S. Computer Science (Minors: Economics, Japanese), Dean's List</i></p>
                        <p>Relevant Coursework: Data Structures and Algorithms, Introduction to Logic Design, Linear Algebra, Discrete Mathematics</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2 style={{marginBottom: '7px'}}>Singapore American School <span>August 2015 - May 2019</span></h2>
                        <p style={{fontSize:'15px', fontFamily:'"Quicksand", Arial, sans-serif'}}><i>High School Diploma, Graduated Cum Laude</i></p>
                        <p style={{marginBottom: '7px'}}>Relevant Coursework: AP Computer Science, AT Computer Science: Data Strucutres and Algorithms (Java)</p>
                        <p>Activities: Varsity Badminton, Technical Theatre, Biotechnology Club, Middle School Dance Instructor, EAA Help, National Honor Society</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3" style={{fontSize:'18px'}}>
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Computer Science Tutor <span>September 2020 - Present</span></h2>
                        <p>When school is in session, I work as a tutor for SCU's Drahmann Center (my university's center for undergrad academic advising and learning resources) to guide computer science students like me to greater academic success. I mainly tutor in object-oriented programming, data structures, algorithms, and finite automation.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4" style={{fontSize:'18px'}}>
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                      <h2 style={{marginBottom: '7px'}}>Korean Student Association <span>November 2019 - May 2022</span></h2>
                      <p style={{fontSize:'15px', fontFamily:'"Quicksand", Arial, sans-serif'}}><i>Freshman Representative (2019-2020), Events Coordinator (2020-2021), Co-Chair (2021-2022)</i></p>
                        <p>I work with one other event coordinator to create and host new online events to help promote conversation amongst our 70 members during the pandemic. Along with movie screenings and games, we plan events for critical dialogue on social issues within the multicultural community here in the Bay Area.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
