import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("Parent Component did mount");
  }
  render() {
    console.log("parent render called");
    return (
      <div>
        <h1>About</h1> {/* <User /> */}
        <UserClass name={"First"} location={"Pune"} />
        <UserClass name={"Second"} location={"Bengaluru"} />
        <UserClass name={"Third"} location={"Frances"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       {/* <User /> */}
//       <UserClass name={"Neelkamal"} location={"Pune"} />
//     </div>
//   );
// };

export default About;
