import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src="https://avatars2.githubusercontent.com/u/13744304?s=400&v=4"
          alt="Our Developer Liro"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by {'  '}
          <strong>
            <a href="https://github.com/roughike">Our Developer Liro</a>
          </strong>{' '}
          who lives and works in Helsinki building useful things.{' '}
          <a href="https://twitter.com/koorankka">You should follow him on Twitter</a>
        </p>
      </div>
    );
  }
}

export default Bio;
