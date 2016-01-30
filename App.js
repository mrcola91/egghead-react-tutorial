import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    }
    this.update = this.update.bind(this)
  };
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs).value
    })
  };
  render() {
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
      </div>
    );
  };
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp" type="range"
          min="0"
          max="255"
          onChange={this.props.update} />
      </div>
    )
  }
}

// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text"
//         onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   );
// }

// const App = () => <h1>Hello World</h1>

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: 'this is the default txt',
//   cat: 15
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );

export default App
