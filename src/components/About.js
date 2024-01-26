import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
    <h2>This is React</h2>
    <User name={"Pranav Kokate"}/>
    <UserClass name={"Pranav Kokate"} location={"Pune"}/>
    </div>
  )
}

export default About