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
        <input type='text'
          onChange={this.update} />
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

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
