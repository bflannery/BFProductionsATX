import React from 'react';
import Scroll from 'react-scroll';

export default React.createClass({
  render() {
    let Element = Scroll.Element;
    return (
      <div className="about">
        <div className="about-container">
          <h3> Hi! Im Brian! </h3>
          <span>
            I’m an Austin based Web Developer and Photographer. I love coding, photography, quoting movies I’ve seen a million times, coffee, and living a healthy lifestyle in Austin, Texas.
          </span>
          <span>
            One of the greatest strengths about being a developer with a photography background is that not only do I enjoy being apart of and participating in the technical challenges of a project, but also understanding the visual aspects of those same projects.
          </span>
          <span>
            I like to work on code challenges and showcase my work as <a href='https://gist.github.com/bflannery' className="port-links">Gists</a>. I keep my professional life on <a href='https://www.linkedin.com/in/bflanneryatx' className="port-links">LinkedIn</a>, let my mind float on <a href='https://twitter.com/flanst1gram' className="port-links">Twitter</a>,  and I connect with my family & friends on <a href='https://www.facebook.com/brian.flannery.56211' className="port-links">Facebook</a>.
          </span>
          <span>
            Being an avid photographer, I take post my work for others to follow on <a href='https://www.instagram.com/bfproductionsatx/' className="port-links">Instagram</a> and <a href='https://500px.com/brianflannery' className="port-links">500px</a> (for those whose focus on the little details) and my videos on <a href='https://vimeo.com/bfproductions' className="port-links">Vimeo</a>. Check out my <a href='http://www.bfproductions.info/skyline/' className="port-links">BFProductions</a> photography portfolio!
          </span>
          <span>
            If you have any questions, feedback, or just want to say hello, you can contact me at bflannery66@gmail.com or fill out the contact form below.
          </span>
        </div>
        <img className="avatar" src='../../assets/images/about-avatar.jpg'/>
        <Element name="About" />
        <div className="social-container">
          <ul className="about-social-icons">
            <li><a href="https://github.com/bflannery" className="about-social-icon"> <i className="fa fa-github"></i></a></li>
            <li><a href="https://twitter.com/flanst1gram" className="about-social-icon"> <i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/bflanneryatx" className="about-social-icon"> <i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
});
