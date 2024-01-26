import React from "react";
import User from "./User";
import UserClass from "./UserClass";

  // first constructor is called and then render method  and its child lifecycle is called and then compDidMount is called
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent CompDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h2>This is React Class Component</h2>
        <User name={"Pranav Kokate"} />
        <UserClass name={"Pranav Kokate"} location={"Pune"} />
        <UserClass name={"Elon Musk"} location={"Pune"} />
      </div>
    );
  }
}

export default About;
