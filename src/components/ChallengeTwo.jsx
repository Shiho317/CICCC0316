import React, { Component } from 'react';

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: [],
    visible: 'hidden',
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() { 
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({
        visible: 'visible'
      })
    }, 3000)
    
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    const shuffled = studentList.sort(() => Math.random() - 0.5);
    
    this.setState({
      arr: [shuffled]
    })

  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        
        {this.state.visible === 'visible' && 
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */}
            {studentList.map((student, index) => (
              <li key={index}>
                {student}
              </li>
            ))}
          </ul>
        </div>
        }
        
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}
