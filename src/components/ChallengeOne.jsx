import React, { Component } from 'react';
//import images
import lookLeft from '../assets/look-left.jpeg';
import lookRight from '../assets/look-right.jpeg';

class ChallengeOne extends Component {
  //declare the state here
  state = {
    direction: 'right',
  };

  //click left/right button handler goes here

  onClickToRight = () => {
    this.setState({
      direction: 'right',
    })
  };

  onClickToLeft = () => {
    this.setState({
      direction: 'left',
    })
  };

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.direction === 'right' ? lookRight : lookLeft}
            alt="women"
          />
        </div>
        <button className="btn" onClick={this.onClickToLeft}>⭠</button>
        <button className="btn" onClick={this.onClickToRight}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;