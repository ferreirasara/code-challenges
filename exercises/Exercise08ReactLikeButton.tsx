// Create a simple like button component with React.

import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 100,
      liked: false,
    };
  }
  clickHandler = () => {
    this.setState({ count: this.state.liked ? this.state.count - 1 : this.state.count + 1 })
    this.setState({ liked: !this.state.liked })
  }
  render() {
    cx('like-button');
    return (
      <>
        <div>
          <button
            className={cx({ 'like-button': true, 'liked': this.state.liked })}
            onClick={() => this.clickHandler()}
          >
            Like | <span className='likes-counter'>{this.state.count}</span>
          </button>
        </div>
        <style>{`
          .like-button {
              font-size: 1rem;
              padding: 5px 10px;
              color:  #585858;
          }
          .liked {
              font-weight: bold;
              color: #1565c0;
          }
      `}</style>
      </>
    );
  }
}
