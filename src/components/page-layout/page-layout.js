import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Content from './components/content';
import Sidebar from './components/sidebar';
import PageLayoutTopbar from './components/topbar';
import { findHasSection, findParentPath } from './utils';

// default configuration for each layout
// each option can be overriden in the frontMatter

const layoutConfig = {
  page: {
    sidebar: 'toc', // heading table of contents
    sidebarTheme: '' // blank sidebar background
  },
  accordion: {
    sidebar: 'accordion', // NavigationAccordion sidebar
    sidebarTheme: 'bg-gray-faint' // sidebar background
  },
  example: {
    sidebar: 'sectioned', // SectionedNavigation sidebar
    hideSubItems: false, // show headings and subitems in sitebar
    sidebarTheme: 'bg-gray-faint', // sidebar background
    includeFilterBar: false // hide filter bar
  },
  exampleIndex: {
    sidebar: 'sectioned', // SectionedNavigation sidebar
    hideSubItems: true, // only show sidebar headings
    showCards: true, // show example cards
    hideFeedback: true, // hide feedback module
    sidebarTheme: 'bg-gray-faint', // sidebar background
    includeFilterBar: false // hide filter bar
  },
  full: {
    sidebar: 'none' // no sidebar
  }
};

export default class PageLayout extends React.Component {
  render() {
    const {
      location,
      navigation,
      constants,
      topBarSticker,
      frontMatter
    } = this.props;

    const { navOrder } = frontMatter;

    // determine's if this is a single or multli-level site (the latter has sections)
    const hasSection = findHasSection(navigation, location.pathname);
    // get the parent's path, we need this for the top nav
    const parentPath = findParentPath(navigation, location.pathname);
    // if page has `section` then switch to multi-page
    const switchedNavigation = hasSection
      ? navigation[hasSection.path]
      : navigation;

    // set default layout to page
    if (!frontMatter.layout) frontMatter.layout = 'page';

    // if layout is example and has navOrder assume 'exampleIndex' layout
    const config = {
      ...(navOrder && frontMatter.layout === 'example'
        ? layoutConfig.exampleIndex
        : layoutConfig[frontMatter.layout]),
      ...frontMatter
    };

    return (
      <div>
        <div className="shell-header-buffer" />
        <PageLayoutTopbar
          constants={constants}
          navigation={switchedNavigation}
          parentPath={parentPath}
          topBarSticker={topBarSticker}
        />
        <div className="limiter">
          <div className="grid">
            {config.sidebar !== 'none' && (
              <div className={`col col--4-mm col--12 ${config.sidebarTheme}`}>
                <Sidebar
                  {...this.props}
                  navigation={switchedNavigation}
                  parentPath={parentPath}
                  layoutConfig={config}
                />
              </div>
            )}
            <div
              className={classnames('col col--12', {
                'col--8-mm': config.sidebar !== 'none'
              })}
            >
              <Content
                {...this.props}
                parentPath={parentPath}
                layoutConfig={config}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  /**
- `headings` - generated by Batfish
- `navOrder` - set this number for pages that should appear in the TopBarSticker.
- `layout` - one of: `page`, `accordion`, `example`, `full`, `exampleIndex`

Each `layout` is a configuration of different components. You can override any layout with the following frontMatter options:

- `hideTitle` - hide the title of the page.
- `hideFeedback` - hide the feedback component at the bottom of the page.
- `includeFilterBar` - add a filter bar to page using SectionedNavigation (using the `example` or  `exampleIndex` layouts, or `sidebar: sectioned`)
- `sidebar` - one of: `toc`, `accordion`, `sectioned`, `none`
- `sidebarTheme` - Mapbox Assembly class names to style the sidebar container.
- `showCards` - enables `CardsContainer`
   */
  frontMatter: PropTypes.shape({
    headings: PropTypes.array,
    navOrder: PropTypes.number,
    layout: PropTypes.oneOf([
      'page',
      'accordion',
      'example',
      'exampleIndex',
      'full'
    ]),
    hideTitle: PropTypes.bool,
    hideFeedback: PropTypes.bool,
    includeFilterBar: PropTypes.bool,
    sidebar: PropTypes.oneOf(['toc', 'accordion', 'sectioned', 'none']),
    sidebarTheme: PropTypes.string,
    showCards: PropTypes.bool
  }).isRequired,
  /**
- `navTabs` - links to be shown in the `TabList` of `TopBarSticker`, formatted as an array of object: `[{"href": "/overview", "id": "overview", "label": "Overview"}]`
- `accordion` - links to be added to NavigationAccordion, formatted as an object where the top key is the main page's path: `{"/overview/": [{"path": "/overview/", "title": "Overview"}, {"path": "/overview/layouts/", "title": "Layouts"}]}`
- `hierarchy` - Object of every path and their parent: `{"/overview/layous": {"parent": "/overview", "title": "Overview"}}`
- `title` - required for mult-structured layouts, this is the title for the `ProductMenu`
- `tag` - optional `tag` name to pass to `ProductMenu`, [see available options](#productmenu).
*/
  navigation: PropTypes.shape({
    navTabs: PropTypes.array,
    accordion: PropTypes.object,
    hierarchy: PropTypes.object,
    title: PropTypes.string,
    tag: PropTypes.string
  }).isRequired,
  /** An object of pages sorted by their `topic` frontMatter field. This dataset can be generated with [@mapbox/dr-ui/helpers/batfish/topics.js](https://github.com/mapbox/dr-ui/blob/main/src/helpers/bafish/README.md).*/
  topics: PropTypes.shape({
    path: PropTypes.string,
    topics: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number,
        name: PropTypes.string,
        pages: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            path: PropTypes.string,
            thumbnail: PropTypes.string,
            level: PropTypes.number,
            language: PropTypes.array
          })
        )
      })
    )
  }),
  /**
- `SITE` - the name of the site.
- `BASEURL` - the base url of the website, as used in the batfish.config.js
- `FORWARD_EVENT_WEBHOOK` - an object with to values: `production` and `staging`.
*/
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired,
    FORWARD_EVENT_WEBHOOK: PropTypes.shape({
      production: PropTypes.string.isRequired,
      staging: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  /** Required if using the `exampleIndex` layout. The value is the local `AppropriateImage` component. */
  AppropriateImage: PropTypes.func,
  /** If false, unstick the TopBarSticker */
  topBarSticker: PropTypes.bool
};
