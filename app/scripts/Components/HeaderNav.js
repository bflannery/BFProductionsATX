import React from 'react';
import { browserHistory } from 'react-router';
import Scroll from 'react-scroll';
var Link = Scroll.Link;


export default React.createClass({
  getInitialState(){
    return{
      menu:false,
    };
  },

  routeToLink(e) {
    let link = e.target.innerHTML.split(' ').join('');
    browserHistory.push("/" + link);
  },
  routeHome() {
    browserHistory.push("/Home");
  },

  render(){
    let nav= <i className="fa fa-bars" aria-hidden="true" onClick={this.handleMenu}></i>
    if(this.state.menu){
      nav=(
        <nav>
          <i className="fa fa-times" aria-hidden="true" onClick={this.closeMenu}></i>
          <li className="nav-link">
        <Link to="Home"
              smooth={true}
              duration={400}
              onClick={this.routeToLink}>Home</Link>
        </li>
        <li className="nav-link">
        <Link to="About"
              smooth={true}
              duration={500}
              offset={-350}
              onClick={this.routeToLink}>About</Link>
        </li>
        <li className="nav-link">
        <Link to="Portfolio"
              smooth={true}
              duration={500}
              offset={-220}
              onClick={this.routeToLink}>Portfolio</Link>
        </li>
        <li className="nav-link">
        <Link to="Contact"
              smooth={true}
              duration={500}
              offset={-60}
              onClick={this.routeToLink}>Contact</Link>
        </li>
        </nav>
      );
    }
    if(this.state.contact){
      nav=(
        <div>
          <i id="close" className="fa fa-times" aria-hidden="true" onClick={this.closeContact}></i>
          <Contact/>
        </div>
      );
    }
    return(<div className="nav">
            <ul className="full-nav">
            <li className="nav-link">
          <Link to="Home"
                smooth={true}
                duration={400}
                onClick={this.routeToLink}>Home</Link>
        </li>
        <li className="nav-link">
          <Link to="About"
                smooth={true}
                duration={500}
                offset={-350}
                onClick={this.routeToLink}>About</Link>
        </li>
        <li className="nav-link">
          <Link to="Portfolio"
                smooth={true}
                duration={500}
                offset={-220}
                onClick={this.routeToLink}>Portfolio</Link>
        </li>
        <li className="nav-link">
          <Link to="Contact"
                smooth={true}
                duration={500}
                offset={-60}
                onClick={this.routeToLink}>Contact</Link>
        </li>
            </ul>
            {nav}
          </div>
    );
  },
  handleMenu(){
    this.setState({
      menu:true
    });
  },
  closeMenu(){
    this.setState({
      menu:false
    });
  }
});
