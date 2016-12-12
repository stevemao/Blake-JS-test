/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react';
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Body from 'components/Body';

describe('BodyComponent', () => {
  let BodyComponent;

  beforeEach(() => {
    BodyComponent = createComponent(Body, { hits: [{
      id: '1',
      apply_url: 'foourl'
    }, {
      id: '2',
      apply_url: 'barurl'
    }] });
  });

  it('should have 2 children', () => {
    expect(BodyComponent.props.children.length).to.eql(2);
  });

  it('should the right keys', () => {
    expect(BodyComponent.props.children[0].key).to.eql('1');
    expect(BodyComponent.props.children[1].key).to.eql('2');
  });
});
