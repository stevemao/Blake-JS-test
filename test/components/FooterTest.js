/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react';
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Footer from 'components/Footer';

describe('FooterComponent', () => {
  let FooterComponent;

  beforeEach(() => {
    FooterComponent = createComponent(Footer, {
      pageCount: 4,
      page: 1
    });
  });

  it('should have 5 children', () => {
    expect(FooterComponent.props.children.length).to.eql(5);
  });

  it('should the right page number', () => {
    expect(FooterComponent.props.children[0].props.page).to.eql(0);
    expect(FooterComponent.props.children[4].props.page).to.eql(2);
  });

  it('should the right max page number', () => {
    expect(FooterComponent.props.children[0].props.maxPage).to.eql(4);
    expect(FooterComponent.props.children[4].props.maxPage).to.eql(4);
  });

  it('should have the right page indicator', () => {
    expect(FooterComponent.props.children[2]).to.eql(
      <span>{1}/{4}</span>
    );
  });
});
