/*
With toggle
*/
import React from 'react';
import CodeSnippetTitle from '../code-snippet-title';
import CodeToggle from '../../code-toggle';

export default class Custom extends React.Component {
  render() {
    function handleChange() {}
    return (
      <CodeSnippetTitle
        filename="ViewController"
        link="https://github.com/mapbox/"
        toggle={
          <CodeToggle
            id="some-id"
            onChange={handleChange}
            options={[
              {
                label: 'Swift',
                language: 'swift',
                preferredLanguage: true
              },
              {
                label: 'Objective-C',
                language: 'objectiveC',
                preferredLanguage: false
              }
            ]}
          />
        }
      />
    );
  }
}
