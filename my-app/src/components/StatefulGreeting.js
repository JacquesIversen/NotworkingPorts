import React from "react";

/* class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        });
        console.log(this.state.introduction);

    }


    render() {
        return (
            <div>
            <h1>{this.state.introduction} {this.props.greeting}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        </div>
        )
    }
}

export default StatefulGreeting; */

class Apps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicks: 0,
        show: true
      };
    }
  
    IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
      this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
      this.setState({ show: !this.state.show });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.IncrementItem}>Click to increment by 1</button>
          <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
          <button onClick={this.ToggleClick}>
            { this.state.show ? 'Hide number' : 'Show number' }
          </button>
          { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        </div>
      );
    }
  }
  
  export default Apps;