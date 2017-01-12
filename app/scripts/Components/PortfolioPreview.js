import React from 'react';
import { browserHistory, Link } from 'react-router';

export default React.createClass({
  getInitialState() {
    return {
      examples: [],
      hoverImg: false,
      project: {},
    }
  },

  render() {
// console.log(this.state)
    let footer;
    let imageURL = this.props.example.image;

    if (this.state.hoverImg) {
      imageURL = this.props.example.imgHover;
      footer = (
          <footer className="preview-footer">
            <section className="footer-content">
              <p className="preview-about-app">{this.props.example.aboutBody}</p>
              <ul className="icons-container">
                <li>
                  <a className="portfolio-live-link" href={this.props.example.url}>
                    <i className="portfolio-icon fa fa-external-link" aria-hidden="true"></i>
                    <label className="app-label"> Live site</label>
                  </a>
                </li>
                <li>
                  <a className="portfolio-live-link" href={this.props.example.githubUrl}>
                    <i className="portfolio-icon fa fa-github-square" aria-hidden="true"></i>
                    <label className="app-label"> GitHub</label>
                  </a>
                </li>
              </ul>
            </section>
          </footer>);
    }
    return (
      <li className="portfolio-preview portfolio-side-item"
          style={{backgroundImage:`url(${imageURL})`}}
          onMouseOver={this.showFooter}
          onMouseLeave={this.hideFooter}
          onClick={this.routeToExample}>
        {footer}
      </li>
    );
  },

  routeToExample() {
    browserHistory.push(`/Projects/${this.props.example.name}`);
  },
  showFooter() {
    this.setState({hoverImg: true});
  },
  hideFooter() {
    this.setState({hoverImg: false});
  },
});
