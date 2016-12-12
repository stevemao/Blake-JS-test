/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Main from 'components/Main';

describe('MainComponent', () => {
  let MainComponent;

  it('should return loading', () => {
    MainComponent = createComponent(Main, {
      isFetching: true
    });
    expect(MainComponent.props.style.position).to.eql('fixed');
  });

  it('should return error with reason', () => {
    MainComponent = createComponent(Main, {
      invalid: true,
      reason: 'this is dumb'
    });
    expect(MainComponent).to.eql(
      <div>
        Error<br />
        this is dumb
      </div>
    );
  });

  it('should return the app', () => {
    MainComponent = createComponent(Main, {
      data: {
        hits: [],
        meta: {
          page_count: 0
        }
      },
      params: {
        page: 1
      }
    });
    expect(MainComponent.props.children.length).to.eql(3);
  });

  it('should return the default error', () => {
    MainComponent = createComponent(Main);
    expect(MainComponent).to.eql(
      <div>
        Error
      </div>
    );
  });
});
