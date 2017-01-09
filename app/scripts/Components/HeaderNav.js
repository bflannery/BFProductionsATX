import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  getInitialState(){
    return{
      menu:false,
      contact:false
    };
  },
  render(){
    let nav= <i className="fa fa-bars" aria-hidden="true" onClick={this.handleMenu}></i>
    if(this.state.menu){
      nav=(
        <nav>
          <i className="fa fa-times" aria-hidden="true" onClick={this.closeMenu}></i>
          <a onClick={this.closeMenu} href="/"><li className="nav-link">Home</li></a>
          <a onClick={this.closeMenu}  href="#about"><li className="nav-link">About</li></a>
          <a onClick={this.closeMenu}  href="#portfolio"><li className="nav-link">Portfolio</li></a>
          <a onClick={this.openContact}  href="#contact"><li className="nav-link">Contact</li></a>
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
              <a href="/"><li className="nav-link">Home</li></a>
              <a href="#about"><li className="nav-link">About</li></a>
              <a href="#portfolio"><li className="nav-link">Portfolio</li></a>
              <a onClick={this.openContact}  href="#contact"><li className="nav-link">Contact</li></a>
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
  },
  openContact(){
    this.setState({
      contact:true
    });
  },
  closeContact(){
    this.setState({
      contact:false,
      menu:false
    });
  }
});
