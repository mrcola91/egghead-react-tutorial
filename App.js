import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <Slider update={this.update} />
        <Slider update={this.update} />
        <Slider update={this.update} />
        <Slider update={this.update} />
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input type="range"
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
