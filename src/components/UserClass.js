import React from "react";

class UserClass extends React.Component{
  // props are recieved in constructor
  constructor(props){
    // to inherit the properties of parent class and access the this keyword inside the class
    super(props);

    console.log(props);
  }

  // render is used to display this jsx into ui
  render() {

    const { name, location } = this.props;

    return<div className="user-card">
    <h2>Name: {name}</h2>
    <h2>Location: {location}</h2>
    <h2>Contact: @pranav</h2>
  </div>
  }

}

export default UserClass;