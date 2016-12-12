/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react';
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import PageLink from 'components/PageLink';

describe('PageLinkComponent', () => {
  let PageLinkComponent;

  it('should be disabled', () => {
    PageLinkComponent = createComponent(PageLink, {
      page: 0,
      maxPage: 4,
      minPage: 1
    });

    expect(PageLinkComponent.props.to).to.be.an('undefined');

    PageLinkComponent = createComponent(PageLink, {
      page: 5,
      maxPage: 4,
      minPage: 1
    });

    expect(PageLinkComponent.props.to).to.be.an('undefined');
  });

  it('should be enabled', () => {
    PageLinkComponent = createComponent(PageLink, {
      page: 1,
      maxPage: 4,
      minPage: 1
    });

    expect(PageLinkComponent.props.to).to.eql('/1');
  });
});
