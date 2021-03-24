
import React from 'react';
import { withLoading } from '../hocs/withLoading';

const TheirComponent = () => (
    <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
        <h1>Their Component</h1>
        <li>
            <img
                alt="me"
                src='https://picsum.photos/100/100/'
                style={{ margin: '0 auto' }}
            />
        </li>
        <li>Random Image</li>
    </ul>
);

export default withLoading(TheirComponent);