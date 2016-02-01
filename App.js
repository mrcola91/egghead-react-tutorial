import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = { val: 0 };
  };
  update() {
    this.setState({ val: this.state.val + 1 });
  };
  componentWillMount() {
    console.log('will mount');
  };
  render(){
    return (
      <button onClick={ this.update }>
        {this.props.txt} - { this.props.val }
      </button>
    )
  };
};

export default App

// App.defaultProps = {val: 0};
// componentDidUpdate(prevProps, prevState) {
//   console.log('prevProps', prevProps);
// };
// componentWillReceiveProps(nextProps) {
//   this.setState({increasing: nextProps.val > this.props.val });
// };
// shouldComponentUpdate(nextProps, nextState) {
//   return nextProps.val % 5 === 0;
// };

// componentWillMount() {
//   this.setState({ m: 2 });
// };

// componentDidMount() {
//   this.inc = setInterval(this.update, 500);
// };
// componentWillUnmount() {
//   clearInterval(this.inc);
// };

// class Wrapper extends React.Component {
//   constructor() {
//     super();
//   };
//   mount() {
//     ReactDOM.render(<App />, document.getElementById('a'));
//   };
//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'));
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={ this.mount.bind(this) }>Mount</button>
//         <button onClick={ this.unmount.bind(this) }>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// };
// class Button extends React.Component {
//   render(){
//     return <button>{this.props.children}</button>
//   }
// }
//
// const Heart = () => <span className="glyphicon glyphicon-heart"></span>

// constructor() {
//   super();
//   this.state = {
//     red: 0,
//     green: 0,
//     blue: 0,
//   }
//   this.update = this.update.bind(this)
// };
// update(e) {
//   this.setState({
//     red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//     green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
//     blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
//   })
// };
// render() {
//   return (
//     <div>
//       <Slider ref="red" update={this.update} />
//       {this.state.red}
//       <br />
//       <Slider ref="green" update={this.update} />
//       {this.state.green}
//       <br />
//       <Slider ref="blue" update={this.update} />
//       {this.state.blue}
//       <br />
//     </div>
//   );
// };

// class Slider extends React.Component {
//   render() {
//     return (
//       <div>
//         <input ref="inp" type="range"
//           min="0"
//           max="255"
//           onChange={this.props.update} />
//       </div>
//     )
//   }
// }

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
