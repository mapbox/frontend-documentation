import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

class Image extends React.Component {
  render() {
    const { color, icon } = this.props;
    return (
      <div
        className={`bg-${color}-light round-full color-${color} flex-parent flex-parent--center-main flex-parent--center-cross`}
        style={{ width: 50, height: 50 }}
      >
        <Icon name={icon} size="40" />
      </div>
    );
  }
}

Image.propTypes = {
  color: PropTypes.oneOf([
    'gray',
    'orange',
    'red',
    'green',
    'purple',
    'pink',
    'yellow',
    'blue'
  ]).isRequired,
  icon: PropTypes.string
};

const themes = {
  default: {
    image: <Image icon="book" color="gray" />,
    label: 'Note',
    styles: {
      background: '#f4f7fb',
      color: '#547190'
    }
  },
  warning: {
    image: <Image icon="alert" color="orange" />,
    label: 'Warning',
    styles: {
      background: '#feefe2',
      color: '#945823',
      borderColor: '#dea573'
    }
  },
  error: {
    image: <Image icon="alert" color="red" />,
    label: 'Error',
    styles: {
      background: '#fbe5e5',
      color: '#ba3b3f'
    }
  },
  beta: {
    image: <Image icon="marker" color="green" />,
    label: 'Beta',
    tooltipText: 'This feature is in public beta and is subject to changes.',
    styles: {
      background: '#e8f5ee',
      color: '#1b7d4f',
      borderColor: '#75c684'
    }
  },
  download: {
    image: <Image icon="arrow-down" color="purple" />,
    label: 'Download',
    styles: {
      background: '#f2effa',
      color: '#5a3fc0'
    }
  },
  fundamentals: {
    label: 'Fundamentals',
    tooltipText:
      'The concepts described here are fundamental to using this product.',
    styles: {
      background: '#fff0f7',
      color: '#cf1c61',
      borderColor: '#fd8ac0'
    }
  }
};
/* duplicate themes */
themes.legacy = Object.assign({}, themes.warning);
themes.legacy.label = 'Legacy';
(themes.legacy.tooltipText =
  'This feature is no longer in active development.'),
  (themes.new = Object.assign({}, themes.beta));
themes.new.label = 'New!';
themes.new.tooltipText = 'This feature was released recently.';

export default themes;
