
import React from 'react';
import { withLoading } from '../hocs/withLoading';

const YourComponent = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <h1>Your Component</h1>
    <li>
      <img
        alt="me"
        src='https://picsum.photos/200/200/'
        style={{ margin: '0 auto' }}
      />
    </li>
    <li>Random Image</li>
  </ul>
);

export default withLoading(YourComponent);