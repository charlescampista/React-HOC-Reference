
import React from 'react';
import { withLoading } from '../hocs/withLoading';

const MyComponent = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <h1>My Component</h1>
    <li>
      <img
        alt="me"
        src='https://picsum.photos/300/300/'
        style={{ margin: '0 auto' }}
      />
    </li>
    <li>Random Image</li>
  </ul>
);

export default withLoading(MyComponent);