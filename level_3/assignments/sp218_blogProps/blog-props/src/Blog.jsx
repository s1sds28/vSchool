import React from 'react';

import data from './data'

import styles from './Blog.css'

const Blog = (props) => {
  return (
    <div className="blog">
      <h2>{props.title}</h2>
      <p>{props.subTitle}</p>
      <p>{props.author}</p>
      <p>{props.date}</p>
      <hr />
    </div>
  );
};


export default Blog;
