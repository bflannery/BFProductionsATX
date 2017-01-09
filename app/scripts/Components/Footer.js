import React from 'react';
import FooterNav from './FooterNav';

export default React.createClass({
  render() {
    return (
      <div className="footer">
        <div className="copyright">
          <h5> BFProductions </h5>
        </div>
        <FooterNav />
      </div>
    );
  }
});
