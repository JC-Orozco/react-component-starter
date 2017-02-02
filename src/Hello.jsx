export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {greeting: "Hello"};
    // If props.name does not exist props.name = "World"
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}, {this.props.name}!</h1>
      </div>
    );
  }
}
