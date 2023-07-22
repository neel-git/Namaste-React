import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(`${this.props.name} Child constructor`);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  componentDidMount() {
    console.log(`${this.props.name} Child Component Did Mount`);
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log(`${this.props.name} Child render called`);
    return (
      <div className="user-card">
        <button
          className="btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Count - {count}</h2>
        <h2>Name - {name}</h2>
        <h3>Address - {location}</h3>
      </div>
    );
  }
}

export default UserClass;
