import './App.css';
import React from 'react';


const sounds = [
  { id: 'Q', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { id: 'W', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { id: 'E', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { id: 'A', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { id: 'S', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { id: 'D', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { id: 'Z', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { id: 'X', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { id: 'C', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'  },
]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    }
    this.pushPad = this.pushPad.bind(this)
  }
  pushPad(e) {
    let audio = new Audio(e.target.children[0].currentSrc)
    audio.play()
    this.setState({
      playing: true,
    })
    setTimeout(() => {
      this.setState({
        playing: false,
      })
    }, 500)
  }

  render() {
    const pads = sounds.map(pad => 
    <div className="drum-pad" id={pad.id} onClick={this.pushPad}>
      {pad.letter}
      <audio src={pad.src} className="clip" id={pad.id}></audio>
    </div>)
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="display">
            {pads}
          </div>
        </div>
        <div>
          <h1 className="title">Drum Machine</h1>
        </div>
      </div>
    )
  }
}

export default App;
