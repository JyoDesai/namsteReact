import UserClass from "./UserClass";
import User from "./User";
import React from "react";

// const About = () =>{
//     return(
//         <div>
//         <h1>This is About components</h1>
//         <UserClass name={"jyoti desai(class)"} location={"Panvel"} email={"jyodesai@.com"}/>
//         <User name={"jyo desai functional(functional)"}  />
//         </div>
//     )
// }

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");

    return (
      <div>
        <h1>This is About components</h1>
        <UserClass
          name={"jyoti desai(class)"}
          location={"Panvel"}
          email={"jyodesai@.com"}
        />
        <UserClass
          name={"alka desai(class)"}
          location={"nashik"}
          email={"alkadesai@.com"}
        />
        <User name={"jyo desai functional(functional)"} />
      </div>
    );
  }
}

export default About;
