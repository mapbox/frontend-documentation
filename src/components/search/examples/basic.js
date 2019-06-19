/*
Basic.
Pass the name of the `site` to the component to enable the site/"All docs" filter.
*/
import React from 'react';
import Search from '../search';

export default class Example extends React.Component {
  render() {
    return <Search site="API" />;
  }
}
