import './App.css';
import React from 'react';


const sounds = [
  { id: 'Q', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', sound: "Heater 1", keyCode: 81},
  { id: 'W', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', sound: "Heater 2", keyCode: 87 },
  { id: 'E', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', sound: "Heater 3", keyCode: 69 },
  { id: 'A', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', sound: "Heater 4", keyCode: 65 },
  { id: 'S', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', sound: "Clap", keyCode: 83},
  { id: 'D', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', sound: "Open HH", keyCode: 68 },
  { id: 'Z', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', sound: "Kick n' Hat", keyCode: 90 },
  { id: 'X', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', sound: "Kick", keyCode: 88 },
  { id: 'C', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', sound: "Closed HH", keyCode: 67  },
]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: 'Heater 1',
    }
    this.pushPad = this.pushPad.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  pushPad(e) {
    const audio = e.target.children[0];
    audio.play();
    this.setState({
      playing: e.target.id,
    })
  }

  handleKeyPress(e) {
    sounds.forEach(pad => {
      if (e.keyCode === pad.keyCode) {
        const audio = document.getElementById(pad.id)
        audio.play();
        this.setState({
          playing: pad.sound,
        })
      }
    })
  }

  render() {
    const pads = sounds.map((pad, index) => 
    <div key={index} className="drum-pad" id={pad.sound} onClick={this.pushPad}>
      <audio key={index} className="clip" id={pad.id} src={pad.src}></audio>
      {pad.letter}
    </div>)
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="pads">
            {pads}
          </div>
        </div>
        <div id="display">
          <h1 className="title">Drum Machine</h1>
          <p className="sound_name">{this.state.playing}</p>
        </div>
      </div>
    )
  }
}

export default App;
