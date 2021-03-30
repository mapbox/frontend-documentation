import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class SearchBox extends React.Component {
  render() {
    const { background, narrow } = this.props;
    return (
      <div
        className={classnames(
          'flex-parent flex-parent--center-cross btn--gray color-gray-light btn btn--stroke py3 pl6 pr12 round mb6',
          {
            'btn--white': background !== 'light',
            'w-full': !narrow
          }
        )}
        style={narrow ? { paddingLeft: '12px', paddingRight: '12px' } : {}}
      >
        <span
          className={classnames('', {
            mr6: !narrow,
            'color-gray': background === 'light'
          })}
        >
          <svg className="icon w18 h18">
            {narrow && <title>Search</title>}
            <use xlinkHref="#icon-search" />
          </svg>
        </span>{' '}
        {!narrow && (
          <span
            className={classnames('', {
              'color-gray': background === 'light'
            })}
          >
            Search
          </span>
        )}
      </div>
    );
  }
}

SearchBox.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']).isRequired,
  narrow: PropTypes.bool
};

export class SearchInput extends React.Component {
  render() {
    const { placeholder } = this.props;
    return (
      <>
        <label className="cursor-pointer">
          <div className="absolute flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
            <svg className="icon color-gray w18 h18">
              <title>Search</title>
              <use xlinkHref="#icon-search" />
            </svg>
          </div>
        </label>
        <div placeholder={placeholder} className="input bg-white px36 h36" />
      </>
    );
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string
};
