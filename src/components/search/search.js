import React from 'react';
import PropTypes from 'prop-types';
import { SearchBox } from './search-elements';
import loadable from '@loadable/component';

const LazyLoadComponent = loadable(() => import('./search-provider.js'));

export default class SearchFacade extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadSearch: false };
  }

  loadSearch = () => {
    this.setState({ loadSearch: true });
  };
  render() {
    return this.state.loadSearch ? (
      <LazyLoadComponent modalOpen={true} {...this.props} />
    ) : (
      <button className="w-full block" onClick={this.loadSearch}>
        <SearchBox {...this.props} />
      </button>
    );
  }
}

SearchFacade.propTypes = {
  /** replace the input placehoder with a different string */
  placeholder: PropTypes.string,
  /** collapse input to fit in a crowded space */
  narrow: PropTypes.bool, //
  background: PropTypes.oneOf(['light', 'dark']),
  /** override default id for input/label, used for testing */
  inputId: PropTypes.string
};

SearchFacade.defaultProps = {
  background: 'light',
  placeholder: 'Search docs.mapbox.com',
  inputId: 'docs-search'
};
