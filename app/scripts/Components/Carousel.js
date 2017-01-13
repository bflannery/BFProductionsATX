import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      images: this.props.project.projectImages,
      i: 0,
      slide: '',
    }
  },
  slideLeft() {
    let newI;
    if (this.state.i < (this.state.images.length - 1)) {
      newI = this.state.i + 1;
    } else if (this.state.i === (this.state.images.length - 1)) {
      newI = 0;
    }
    this.setState({
      slide: 'slide-out-left'
    });

    window.setTimeout(() => {
      this.setState({
        i: newI,
        slide: 'slide-in-right',
      });

    }, 400);
  },
  slideRight() {
    let newI;
    if (this.state.i > 0) {
      newI = this.state.i - 1;
    } else {
      newI = this.state.images.length - 1;
    }
    this.setState({slide: 'slide-out-right'});

    window.setTimeout(() => {
      this.setState({
        i: newI,
        slide: 'slide-in-left',
      });
    }, 400);

  },
  skipToImg(e) {
    this.setState({i: e.target.value})
  },
  routeLiveSite() {

  },
  componentDidMount() {
    this.setState({i: 0});
  },
  render() {
    console.log(this.state)
    console.log(this.props)
    let sliderBtns = this.state.images.map((url, i) => {
      let currentImg;
      if (this.state.i === i) {
        currentImg = 'current-image';
      }
      return (<li key={i} id={currentImg} className="slider-button" onClick={this.skipToImg} value={i}></li>)
    });
    return (
      <div className="project-container">
          <h2 className="project-heading" onClick={this.routeLiveSite}>
            <a className="project-link" href={this.props.project.url}>{this.props.project.name}</a>
          </h2>
          <div className= {this.props.project.id}>
          <div className="project-visual-container">
            <div className="project-images-container">
            <div className="arrow-div prev-div" onClick={this.slideRight}><i className="fa fa-arrow-left" aria-hidden="true" onClick={this.slideRight}></i></div>
              <figure className="project-image"
                  id={this.state.slide}
                  style={{backgroundImage:`url(${this.state.images[this.state.i]})`}}>
                </figure>
            <div className="arrow-div next-div" onClick={this.slideLeft}><i className="fa fa-arrow-right" aria-hidden="true" onClick={this.slideLeft}></i></div>
          </div>

        {
        // <section className="next-btns">
        //
        //
        // </section>
        }
        <ul className="slider-container">
          {sliderBtns}
        </ul>
        </div>
        <figcaption className="project-caption-container">
        <p className="project-caption">{this.props.project.pitch}</p>
        <ul className="portfolio-links-container">
          <li className="portfolio-links">
            <a className="portfolio-live-link project-live-link" href={this.props.project.url}>
              <i className="portfolio-icon fa fa-external-link" aria-hidden="true"></i>
              <label className="app-label"> Live site</label>
            </a>
          </li>
          <li>
            <a className="portfolio-live-link project-live-link" href={this.props.project.githubUrl}>
              <i className="portfolio-icon fa fa-github-square" aria-hidden="true"></i>
              <label className="app-label"> GitHub</label>
            </a>
          </li>
        </ul>
        </figcaption>
        </div>
      </div>
    );
  }
});
