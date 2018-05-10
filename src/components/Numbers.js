export default class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.numberPressed = this.numberPressed.bind(this);
  }

  numberPressed(e) {
    const numberPressed = e.target.innerHTML;
    this.props.numberPressed(e);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.numberPressed}> 7 </button>
          <button onClick={this.numberPressed}> 8 </button>
          <button onClick={this.numberPressed}> 9 </button>
        </div>
        <div>
          <button onClick={this.numberPressed}> 4 </button>
          <button onClick={this.numberPressed}> 5 </button>
          <button onClick={this.numberPressed}> 6 </button>
        </div>
        <div>
          <button onClick={this.numberPressed}> 1 </button>
          <button onClick={this.numberPressed}> 2 </button>
          <button onClick={this.numberPressed}> 3 </button>
        </div>
      </div>
    );
  }
}
