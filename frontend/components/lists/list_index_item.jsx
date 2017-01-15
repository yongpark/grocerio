import React from 'react';
import {Link} from 'react-router';

const ListIndexItem = ({list}) => (
  <li className='list-box'>
    <Link to={`/lists/${list.id}`}>
      <span>{list.title}</span>
    </Link>
  </li>
);

export default ListIndexItem;
