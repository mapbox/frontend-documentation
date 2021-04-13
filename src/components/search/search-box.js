import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import SearchModal from './search-modal';
import SearchResult from './search-result';
import { getFilterValueDisplay } from '@elastic/react-search-ui-views/lib/view-helpers';
import { Facet } from '@elastic/react-search-ui';
import classnames from 'classnames';

export class SearchBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true // open model for a smooth transition from the facade
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.renderSearchBar = this.renderSearchBar.bind(this);
    this.singleLinksFacet = this.singleLinksFacet.bind(this);
    // if resultsOnly and overrideSearchTerm, set the search term
    if (this.props.resultsOnly && this.props.overrideSearchTerm) {
      props.setSearchTerm(this.props.overrideSearchTerm);
    }
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.props.reset();
    this.setState({ modalOpen: false });
  }

  singleLinksFacet = ({
    className, // eslint-disable-line
    label, // eslint-disable-line
    onRemove,
    onSelect,
    options,
    values = []
  }) => {
    const value = values[0];
    const siteFilter = options.filter(
      (opt) => opt.value === this.props.site
    )[0];

    return siteFilter ? (
      <div className="py12 border-b border--gray-faint mx6">
        <div className="toggle-group">
          <div className="toggle-container">
            <button
              key={getFilterValueDisplay(siteFilter.value)}
              className={`toggle py3 ${
                value === siteFilter.value ? 'bg-gray color-white' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                // track click
                if (window && window.analytics) {
                  analytics.track(this.props.segmentTrackEvent, {
                    query: this.props.searchTerm,
                    toggle: true,
                    site: this.props.site
                  });
                }
                onSelect(siteFilter.value);
              }}
            >
              {getFilterValueDisplay(siteFilter.value)}
            </button>
          </div>

          <div className="toggle-container">
            <button
              onClick={(e) => {
                e.preventDefault();
                onRemove(value);
              }}
              className={`toggle py3 ${!value ? 'bg-gray color-white' : ''}`}
            >
              All docs
            </button>
          </div>
        </div>
      </div>
    ) : (
      ''
    );
  };

  renderSearchBar() {
    const { props } = this;
    return (
      <Downshift
        id={this.props.inputId}
        inputValue={this.props.searchTerm}
        onChange={(selection) => {
          // track click
          if (window && window.analytics) {
            analytics.track(this.props.segmentTrackEvent, {
              query: this.props.searchTerm,
              clicked: selection.url.raw
            });
          }
          this.props.trackClickThrough(selection.id.raw); // track selection click through
          window.open(selection.url.raw, '_self'); // open selection in current window
        }}
        onInputValueChange={(newValue) => {
          if (props.searchTerm === newValue) return;
          props.setSearchTerm(newValue, { debounce: 1500 });
          // track query
          if (window && window.analytics) {
            analytics.track(this.props.segmentTrackEvent, {
              query: newValue
            });
          }
        }}
        itemToString={() => props.searchTerm}
      >
        {(downshiftProps) => {
          const {
            getInputProps,
            isOpen,
            getLabelProps,
            openMenu
          } = downshiftProps;

          return (
            <div>
              {!props.resultsOnly && (
                <React.Fragment>
                  <SearchInput
                    autoFocus={true}
                    isLoading={props.isLoading}
                    useModal={props.useModal}
                    placeholder={props.placeholder}
                    getLabelProps={getLabelProps}
                    getInputProps={getInputProps({
                      onFocus: () => {
                        openMenu();
                      }
                    })}
                  />
                </React.Fragment>
              )}
              {(isOpen || props.resultsOnly) && props.searchTerm && (
                <React.Fragment>
                  {props.isLoading && (
                    <div className="w-full h360 bg-white opacity75 absolute">
                      <div className="loading mx-auto mt60" />
                    </div>
                  )}
                  <div
                    className={classnames(
                      'color-text round mt3 bg-white w-full align-l',
                      {
                        'hmax360 scroll-auto scroll-styled absolute shadow-darken25 z4': !props.resultsOnly
                      }
                    )}
                  >
                    <React.Fragment>
                      <Facet
                        show={20}
                        field="site"
                        label="Site"
                        view={this.singleLinksFacet}
                      />

                      {props.wasSearched &&
                        (this.props.results.length ? (
                          <ul>
                            {this.props.results.map((result, index) => (
                              <SearchResult
                                key={index}
                                result={result}
                                index={index}
                                downshiftProps={downshiftProps}
                                themeCompact={props.themeCompact}
                              />
                            ))}
                          </ul>
                        ) : (
                          <div
                            className={classnames('px12', {
                              'py6 txt-s': props.themeCompact,
                              'py12 prose': !props.themeCompact
                            })}
                          >
                            {props.emptyResultMessage}
                          </div>
                        ))}
                    </React.Fragment>
                  </div>
                </React.Fragment>
              )}
            </div>
          );
        }}
      </Downshift>
    );
  }

  renderModal() {
    const { props } = this;
    if (!this.state.modalOpen) {
      return null;
    }
    return (
      <SearchModal
        accessibleTitle="Search bar"
        onExit={this.closeModal}
        initialFocus={`#${props.inputId}-input`}
      >
        <div>{this.renderSearchBar()}</div>
      </SearchModal>
    );
  }

  render() {
    // hide results until overrideSearchTerm not null
    const hideResultsOnly = this.props.resultsOnly
      ? this.props.overrideSearchTerm === undefined
      : false;
    return (
      <div>
        {!this.props.useModal ? (
          !hideResultsOnly && (
            <div className="w-full">{this.renderSearchBar()}</div>
          )
        ) : (
          <div>
            <SearchButton
              isFacade={false}
              onClick={this.openModal}
              background={this.props.background}
              narrow={this.props.narrow}
            />
            {this.renderModal()}
          </div>
        )}
      </div>
    );
  }
}

SearchBox.propTypes = {
  searchTerm: PropTypes.string,
  trackClickThrough: PropTypes.func,
  isLoading: PropTypes.bool,
  setSearchTerm: PropTypes.func,
  reset: PropTypes.func,
  results: PropTypes.array,
  placeholder: PropTypes.string,
  background: PropTypes.oneOf(['light', 'dark']).isRequired,
  inputId: PropTypes.string,
  narrow: PropTypes.bool,
  site: PropTypes.string,
  wasSearched: PropTypes.bool,
  resultsOnly: PropTypes.bool,
  segmentTrackEvent: PropTypes.string,
  overrideSearchTerm: PropTypes.string,
  themeCompact: PropTypes.bool,
  emptyResultMessage: PropTypes.node,
  useModal: PropTypes.bool.isRequired
};

export class SearchButton extends React.PureComponent {
  render() {
    const { background, narrow, isFacade, onClick } = this.props;
    const Element = isFacade ? 'div' : 'button';
    const buttonProps = {
      ...(!isFacade && { onClick })
    };
    return (
      <Element
        className={classnames(
          'flex-parent flex-parent--center-cross btn--gray color-gray-light btn btn--stroke py3 pl6 pr12 round mb6',
          {
            'btn--white': background !== 'light',
            wmax30: narrow,
            'w-full': !narrow
          }
        )}
        {...buttonProps}
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
      </Element>
    );
  }
}

SearchButton.defaultProps = {
  background: 'light',
  isFacade: true
};

SearchButton.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  narrow: PropTypes.bool,
  isFacade: PropTypes.bool,
  onClick: PropTypes.func
};

export class SearchInput extends React.PureComponent {
  render() {
    const {
      placeholder,
      getLabelProps,
      useModal,
      getInputProps,
      autoFocus,
      isLoading
    } = this.props;
    const labelProps = {
      ...(getLabelProps && getLabelProps())
    };
    const inputProps = {
      ...(getInputProps && getInputProps)
    };
    return (
      <>
        <label className="cursor-pointer" {...labelProps}>
          <div
            className={classnames(
              'absolute flex-parent flex-parent--center-cross flex-parent--center-main',
              {
                'w60 h60': useModal,
                'w36 h36': !useModal
              }
            )}
          >
            <svg
              className={classnames('icon color-gray', {
                'w24 h24': useModal,
                'w18 h18': !useModal
              })}
            >
              <title>Search</title>
              <use xlinkHref="#icon-search" />
            </svg>
          </div>
          {isLoading && (
            <div
              className="loading loading--s absolute bg-white"
              style={{
                top: useModal ? '21px' : '10px',
                right: '26px',
                zIndex: 5
              }}
            />
          )}
        </label>
        <input
          autoFocus={autoFocus}
          placeholder={placeholder}
          className={classnames('input bg-white', {
            'px60 h60 txt-l': useModal,
            'px36 h36': !useModal
          })}
          {...inputProps}
        />
      </>
    );
  }
}

SearchInput.propTypes = {
  autoFocus: false
};

SearchInput.propTypes = {
  getLabelProps: PropTypes.func,
  getInputProps: PropTypes.object,
  useModal: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  isLoading: PropTypes.bool
};
