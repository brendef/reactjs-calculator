'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppMain = function (_React$Component) {
  _inherits(AppMain, _React$Component);

  function AppMain(props) {
    _classCallCheck(this, AppMain);

    var _this = _possibleConstructorReturn(this, (AppMain.__proto__ || Object.getPrototypeOf(AppMain)).call(this, props));

    _this.numberPressed = _this.numberPressed.bind(_this);
    _this.functionPressed = _this.functionPressed.bind(_this);
    _this.state = {
      answer: 0,
      number: 0,
      tempAns: 0,
      currentOperation: '',
      answerOnScreen: 0
    };
    return _this;
  }

  _createClass(AppMain, [{
    key: 'numberPressed',
    value: function numberPressed(e) {
      var _this2 = this;

      var numberPressed = e.target.innerHTML;
      switch (this.state.currentOperation) {
        case document.getElementById('plus').innerHTML:
          this.setState(function (prevState) {
            var toCalc = +(prevState.number + numberPressed).replace(/\s/g, '');
            var tempAns = +(toCalc + +_this2.state.answer);

            return {
              number: toCalc,
              answerOnScreen: tempAns
            };
          });
          break;
        case document.getElementById('minus').innerHTML:
          this.setState(function (prevState) {
            var toCalc = +(prevState.number + numberPressed).replace(/\s/g, '');
            var tempAns = +(_this2.state.answer - +toCalc);
            return {
              number: toCalc,
              answerOnScreen: tempAns
            };
          });
          break;
        case document.getElementById('times').innerHTML:
          this.setState(function (prevState) {
            var toCalc = +(prevState.number + numberPressed).replace(/\s/g, '');
            var tempAns = +(_this2.state.answer * +toCalc);
            return {
              number: toCalc,
              answerOnScreen: tempAns
            };
          });
          break;
        case document.getElementById('devide').innerHTML:
          this.setState(function (prevState) {
            var toCalc = +(prevState.number + numberPressed).replace(/\s/g, '');
            var tempAns = +(_this2.state.answer / +toCalc);
            return {
              number: toCalc,
              answerOnScreen: tempAns
            };
          });
          break;
        default:
          this.setState(function (prevState) {
            var toCalc = +(prevState.number + numberPressed).replace(/\s/g, '');
            var tempAns = +(toCalc + 0);
            return {
              number: _this2.state.currentOperation == '' ? toCalc : 0,
              answerOnScreen: tempAns,
              currentOperation: _this2.state.currentOperation == '' && document.getElementById('plus').innerHTML
            };
          });
      }
    }
  }, {
    key: 'functionPressed',
    value: function functionPressed(e) {
      var _this3 = this;

      var currentOperation = e.target.innerHTML;
      this.setState(function (prevState) {
        return { currentOperation: currentOperation };
      });
      switch (this.state.currentOperation) {
        case document.getElementById('plus').innerHTML:
          this.setState(function (prevState) {
            return {
              answer: +_this3.state.answer + +_this3.state.number,
              number: 0
            };
          });
          break;
        case document.getElementById('minus').innerHTML:
          this.setState(function (prevState) {
            return {
              answer: +_this3.state.answer - +_this3.state.number,
              number: 0
            };
          });
          break;
        case document.getElementById('times').innerHTML:
          this.setState(function (prevState) {
            return {
              answer: +_this3.state.answer * +_this3.state.number,
              number: 0
            };
          });
          break;
        case document.getElementById('devide').innerHTML:
          this.setState(function (prevState) {
            return {
              answer: +_this3.state.answer / +_this3.state.number,
              number: 0
            };
          });
          break;
        default:
          this.setState(function (prevState) {
            return {
              answer: 0,
              number: 0,
              tempAns: 0,
              answerOnScreen: 0
            };
          });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(Screen, { answer: this.state.answerOnScreen, number: this.state.number }),
        React.createElement(Keys, { numberPressed: this.numberPressed, functionPressed: this.functionPressed })
      );
    }
  }]);

  return AppMain;
}(React.Component);

var Header = function Header() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'title'
    ),
    React.createElement(
      'p',
      null,
      'subtitle'
    )
  );
};

var Screen = function Screen(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      props.number
    ),
    React.createElement(
      'div',
      null,
      props.answer
    )
  );
};

var Keys = function Keys(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(Numbers, { numberPressed: props.numberPressed }),
    React.createElement(Functions, { functionPressed: props.functionPressed })
  );
};

var Numbers = function (_React$Component2) {
  _inherits(Numbers, _React$Component2);

  function Numbers(props) {
    _classCallCheck(this, Numbers);

    var _this4 = _possibleConstructorReturn(this, (Numbers.__proto__ || Object.getPrototypeOf(Numbers)).call(this, props));

    _this4.numberPressed = _this4.numberPressed.bind(_this4);
    return _this4;
  }

  _createClass(Numbers, [{
    key: 'numberPressed',
    value: function numberPressed(e) {
      this.props.numberPressed(e);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: this.numberPressed },
            ' 7 '
          ),
          React.createElement(
            'button',
            { onClick: this.numberPressed },
            ' 8 '
          ),
          React.createElement(
            'button',
            { onClick: this.numberPressed },
            ' 9 '
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: this.numberPressed },
            ' 4 '
          ),
          React.createElement(
            'button',
            { onClick: this.numberPressed },
            ' 5 '
          ),
          React.createElement(
            'button',
            { onClick: this.numberPressed },
            ' 6 '
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: this.numberPressed },
            ' 1 '
          ),
          React.createElement(
            'button',
            { onClick: this.numberPressed },
            ' 2 '
          ),
          React.createElement(
            'button',
            { onClick: this.numberPressed },
            ' 3 '
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: this.numberPressed },
            ' 0 '
          )
        )
      );
    }
  }]);

  return Numbers;
}(React.Component);

var Functions = function (_React$Component3) {
  _inherits(Functions, _React$Component3);

  function Functions(props) {
    _classCallCheck(this, Functions);

    var _this5 = _possibleConstructorReturn(this, (Functions.__proto__ || Object.getPrototypeOf(Functions)).call(this, props));

    _this5.functionPressed = _this5.functionPressed.bind(_this5);
    return _this5;
  }

  _createClass(Functions, [{
    key: 'functionPressed',
    value: function functionPressed(e) {
      this.props.functionPressed(e);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { id: 'plus', onClick: this.functionPressed },
          ' + '
        ),
        React.createElement(
          'button',
          { id: 'minus', onClick: this.functionPressed },
          ' - '
        ),
        React.createElement(
          'button',
          { id: 'times', onClick: this.functionPressed },
          ' * '
        ),
        React.createElement(
          'button',
          { id: 'devide', onClick: this.functionPressed },
          ' / '
        ),
        React.createElement(
          'button',
          { id: 'equals', onClick: this.functionPressed },
          ' = '
        )
      );
    }
  }]);

  return Functions;
}(React.Component);

ReactDOM.render(React.createElement(AppMain, null), document.getElementById('app'));
