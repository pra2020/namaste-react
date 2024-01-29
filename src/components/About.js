import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// first constructor is called and then render method  and its child lifecycle is called and then compDidMount is called
class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent CompDidMount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h2>This is React Class Component</h2>
        <h2>
          {/* Consumer is used to extract the data in class based component, in functional comp we use useContext */}
          Logged In User: <UserContext.Consumer>
            {({ loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </h2>
        {/* <User name={"Pranav Kokate"} /> */}
        <UserClass name={"Pranav Kokate"} location={"Pune"} />
        {/* <UserClass name={"Elon Musk"} location={"Pune"} /> */}
      </div>
    );
  }
}

export default About;
