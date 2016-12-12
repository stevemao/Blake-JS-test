/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react';
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Header from 'components/Header';

describe('HeaderComponent', () => {
  let HeaderComponent;

  beforeEach(() => {
    HeaderComponent = createComponent(Header);
  });

  it('should generate static html', () => {
    expect(HeaderComponent).to.eql(
      <div className="row">
        <span key="name" className="col-xs-2"><b>Name</b></span>
        <span key="advertised_rate" className="col-xs-2"><b>Advertised Rate</b></span>
        <span key="annual_fees" className="col-xs-2"><b>Annual Fees</b></span>
        <span key="application_fee" className="col-xs-2"><b>Application Fee</b></span>
        <span key="comparison_rate" className="col-xs-2"><b>Comparison Rate</b></span>
        <span key="discharge_fee" className="col-xs-2"><b>Discharge Fee</b></span>
      </div>
    );
  });
});
