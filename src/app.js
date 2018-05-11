class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.numberPressed = this.numberPressed.bind(this);
    this.functionPressed = this.functionPressed.bind(this);
    this.state = {
      answer: 0,
      number: 0,
      tempAns: 0,
      currentOperation: '',
      answerOnScreen: 0
    }
  }

  numberPressed(e) {
    const numberPressed = e.target.innerHTML;
      switch (this.state.currentOperation) {
        case document.getElementById('plus').innerHTML:
          this.setState((prevState) => {
            const toCalc = +(prevState.number + numberPressed).replace(/\s/g,'');
            const tempAns = +(toCalc + +this.state.answer);

            return {
              number: toCalc,
              answerOnScreen: tempAns
            }
          });
          break;
        case document.getElementById('minus').innerHTML:
          this.setState((prevState) => {
            const toCalc = +(prevState.number + numberPressed).replace(/\s/g,'');
            const tempAns = +(this.state.answer - +toCalc);
            return {
              number: toCalc,
              answerOnScreen: tempAns
            }
          });
          break;
        case document.getElementById('times').innerHTML:
          this.setState((prevState) => {
            const toCalc = +(prevState.number + numberPressed).replace(/\s/g,'');
            const tempAns = +(this.state.answer * +toCalc);
            return {
              number: toCalc,
              answerOnScreen: tempAns
            }
          });
          break;
        case document.getElementById('devide').innerHTML:
          this.setState((prevState) => {
            const toCalc = +(prevState.number + numberPressed).replace(/\s/g,'');
            const tempAns = +(this.state.answer / +toCalc);
            return {
              number: toCalc,
              answerOnScreen: tempAns
            }
          });
          break;
        default:
        this.setState((prevState) => {
          const toCalc = +(prevState.number + numberPressed).replace(/\s/g,'');
          const tempAns = +(toCalc + 0)
          return {
            number: this.state.currentOperation == '' ? toCalc : 0,
            answerOnScreen: tempAns,
            currentOperation: this.state.currentOperation == '' &&  document.getElementById('plus').innerHTML
          }
        });
      }
  }

  functionPressed(e) {
    let currentOperation = e.target.innerHTML;
    this.setState((prevState) => ({ currentOperation }));
        switch (this.state.currentOperation) {
          case document.getElementById('plus').innerHTML:
            this.setState((prevState) => {
              return {
                answer: +this.state.answer + +this.state.number,
                number: 0
              }
            });
            break;
          case document.getElementById('minus').innerHTML:
            this.setState((prevState) => {
              return {
                answer: +this.state.answer - +this.state.number,
                number: 0
              }
            });
            break;
          case document.getElementById('times').innerHTML:
            this.setState((prevState) => {
              return {
                answer: +this.state.answer * +this.state.number,
                number: 0
              }
            });
            break;
          case document.getElementById('devide').innerHTML:
            this.setState((prevState) => {
              return {
                answer: +this.state.answer / +this.state.number,
                number: 0
              }
            });
            break;
          default:
           this.setState((prevState) => {
             return {
               answer: 0,
               number: 0,
               tempAns: 0,
               answerOnScreen: 0
             }
           });
       }
      }
  render() {
    return(
      <div>
        <Header />
        <Screen answer= {this.state.answerOnScreen} number= {this.state.number} />
        <Keys numberPressed= {this.numberPressed} functionPressed= {this.functionPressed} />
      </div>
    );
  }
}

const Header = () => {
  return(
    <div>
      <h1>title</h1>
      <p>subtitle</p>
    </div>
  );
}

const Screen = (props) => {
    return(
      <div>
        <div>
          {props.number}
        </div>
        <div>
          {props.answer}
        </div>
      </div>
    );
}

const Keys = (props) => {
    return(
      <div>
        <Numbers numberPressed={props.numberPressed} />
        <Functions functionPressed= {props.functionPressed}/>
      </div>
    );
}

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.numberPressed = this.numberPressed.bind(this);
  }

  numberPressed(e) {
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
        <div>
          <button onClick={this.numberPressed}> 0 </button>
        </div>
      </div>
    );
  }
}

class Functions extends React.Component {
  constructor(props) {
    super(props);
    this.functionPressed = this.functionPressed.bind(this);
  }

  functionPressed(e) {
    this.props.functionPressed(e);
  }
  render() {
    return (
      <div>
        <button id=   'plus' onClick= {this.functionPressed}> + </button>
        <button id=  'minus' onClick= {this.functionPressed}> - </button>
        <button id=  'times' onClick= {this.functionPressed}> * </button>
        <button id= 'devide' onClick= {this.functionPressed}> / </button>
        <button id= 'equals' onClick= {this.functionPressed}> = </button>
      </div>
    );
  }
}

ReactDOM.render(<AppMain />, document.getElementById('app'));
