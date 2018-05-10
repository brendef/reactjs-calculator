import Header from './Header';
import Screen from './Screen';
import Keys from './Keys';

export default class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 0,
      number: 0
    }
  }

  numberPressed(e) {
    const numberPressed = e.target.innerHTML;
    this.setState(() => ({
      number: numPressed
    }));
  }

  render() {
    return(
      <div>
        <Header />
        <Screen answer= {this.state.answer} number= {this.state.number} />
        <Keys numberPressed= {this.numberPressed} />
      </div>
    );
  }
}
