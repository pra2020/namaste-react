import React from "react";

class UserClass extends React.Component{
  // props are recieved in constructor
  constructor(props){
    // to inherit the properties of parent class and access the this keyword inside the class
    super(props);
    this.state = {
      count: 0,
    };
    console.log(props);
  }

  // render is used to display this jsx into ui
  render() {

    //destructuring
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    return<div className="user-card">
    <h1>Count: {count}</h1>  
    <button onClick={() => {
      this.setState({
        count : this.state.count + 1
      })
    }}>Count Increase</button>
    <h2>Name: {name}</h2>
    <h2>Location: {location}</h2>
    <h2>Contact: @pranav</h2>
  </div>
  }

}

export default UserClass;