/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import deepFreeze from 'deep-freeze';
import { mapStateToProps } from 'containers/App';

describe('App mapStateToProps', () => {
  it('should map to props if page doesn\'t exist', () => {
    const state = deepFreeze({
      questionsByPage: {
        '2': 'data'
      }
    });
    const ownProps = deepFreeze({
      params: {
        page: 1
      }
    });
    expect(mapStateToProps(state, ownProps)).to.eql({});
  });

  it('should map to props if page exists', () => {
    const state = deepFreeze({
      questionsByPage: {
        '1': 'data'
      }
    });
    const ownProps = deepFreeze({
      params: {
        page: 1
      }
    });
    expect(mapStateToProps(state, ownProps)).to.eql('data');
  });

  it('should page default to 1', () => {
    const state = deepFreeze({
      questionsByPage: {
        '1': 'data'
      }
    });
    const ownProps = deepFreeze({
      params: {}
    });
    expect(mapStateToProps(state, ownProps)).to.eql('data');
  });
});
