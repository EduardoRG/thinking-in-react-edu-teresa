import React from 'react';

export default function BookFilter(props) {
  const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

  const tabItems = filters.map(filter => (
    <li
      className={filter === props.selectedFilter ? 'active' : ''}
      key={filter}
      onClick={() => props.selectFilter(filter)}
    >
      <a href="#0">{filter}</a>
    </li>
  ))

  return (
    <div className="row">
      <div className="col-lg-12">
        <ul className="nav nav-pills text-center">{tabItems}</ul>
      </div>
    </div>
  );
}
