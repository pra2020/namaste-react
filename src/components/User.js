const User  = (props) => {
  return<div className="user-card">
    <h2>Name: {props.name}</h2>
    <h2>Location: Aurangabad</h2>
    <h2>Contact: @pranav</h2>
  </div>
}

export default User;