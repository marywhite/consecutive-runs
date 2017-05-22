import React, { Component } from 'react'
import { Card, Tag } from 'antd';

class Result extends Component {

  render() {
    const { value } = this.props
    return (
      <div className="tags-container">
        {value.map((tag) => {
          return (
            <Tag key={tag}> {tag} </Tag>
          );
        })}
        {
          value.length === 0 ?
          <p>No Runs Found</p> : 
          ''
        }
      </div>
    );
  }
}

export default Result