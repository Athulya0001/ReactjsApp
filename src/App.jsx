import React from "react"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: "Athulya"
    }
  }
  increment = ()=>{
    this.setState({count: this.state.count + 1})
    this.setState({name: this.state.name})
  }
  decrement = ()=>{

    if(this.state.count>0){
      this.setState({count: this.state.count -1})
    }
    this.setState({name: this.state.name})
  }
  componentDidMount(){
    console.log("Component Mounted")
  }
  componentWillUnmount(){
    console.log("Component Unmounted")
  }
  componentDidUpdate(){
    console.log("Compotent Updated")
  }
  render(){
    return(
      <div>
        <h1>Recat Demo App</h1>
        <h2>{this.state.name}</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

      </div>

    )
  }
}

export default App
