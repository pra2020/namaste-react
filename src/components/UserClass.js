import React from "react";

class UserClass extends React.Component{

  // first constructor is called and then render method is called and tehn compDidMount is called

  // props are recieved in constructor
  constructor(props){
    // to inherit the properties of parent class and access the this keyword inside the class

    
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy",
        id: "Default",
        avatar_url: ""
      }
    };
    // console.log(this.props.name,"Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name,"child compDidMount");
    // api call
    const data = await fetch("https://api.github.com/users/pra2020");
    const json = await data.json();
    this.setState({
      userInfo: json
    })
  }

  componentDidUpdate() {
    console.log("yyy");
  }

  componentWillUnmount() {
    console.log("xxx");
  }

  // render is used to display this jsx into ui
  render() {

    //destructuring
    const { login, id, avatar_url } = this.state.userInfo;
    
    // console.log(name,"Child Render");
    return<div className="user-card">
    <img src={avatar_url}/>
    <h2>Name: {login}</h2>
    <h2>Location: {id}</h2>
    <h2>Contact: @pranav</h2>
  </div>
  }

}

export default UserClass;