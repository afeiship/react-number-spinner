import './style.scss';
import classNames from 'classnames';
import toThousands from 'to-thousands';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    min:React.PropTypes.number,
    max:React.PropTypes.number,
    step:React.PropTypes.number,
    precision:React.PropTypes.number,
    readOnly:React.PropTypes.bool,
    disabled:React.PropTypes.bool,
    onInputClick:React.PropTypes.func,
    pulsText:React.PropTypes.string,
    minusText:React.PropTypes.string,
    size:React.PropTypes.string,
    width:React.PropTypes.string,
    value:React.PropTypes.string,
    showThousand:React.PropTypes.bool
  };

  static defaultProps = {
    min:0,
    max:100,
    step:10,
    precision:2,
    readOnly:false,
    disabled:false,
    showThousand:true,
    pulsText:'+',
    minusText:'-',
    size:'18px',
    width:'100%',
    value:'0.00'
  };

  constructor(props){
    super(props);
    this.state = {
      value:props.value,
      readOnly:props.readOnly,
      disabled:props.disabled,
    };
  }

  _click(args,ev){
    this[args]();
    ev.preventDefault();
  }

  _inputChange(ev){
    var value = ev.target.value ;
    console.log(value);
    value = this.checkValue(value);
    this.setState({
      value:value
    })
  }

  plus(){
    var value = parseFloat(this.state.value) + this.props.step;
    value = this.checkValue(value);
    this.setState({
      value:value
    })
  }

  minus(){
    var value = parseFloat(this.state.value) - this.props.step;
    value = this.checkValue(value);
    this.setState({
      value:value
    })
  }

  checkValue(inValue){
    var max = this.props.max;
    var min = this.props.min;
    if(inValue>max){
      return max;
    }
    if(inValue<min){
      return min;
    }
    return inValue;
  }

  processValue(inValue){
    var precisionValue = parseFloat(inValue).toFixed(this.props.precision);
    if(this.props.showThousand){
      return toThousands(precisionValue);
    }
    return precisionValue;
  }

  render(){
    return (
      <div
        style={{
          width:this.props.width,
          fontSize:this.props.size
        }}
        className={classNames('react-number-spinner',this.props.cssClass)}>
        <button
          disabled={this.state.value == this.props.max}
          className="plus" onClick={this._click.bind(this,'plus')}>
          <span>{this.props.pulsText}</span>
        </button>
        <button
          disabled={this.state.value == this.props.min}
          className="minus" onClick={this._click.bind(this,'minus')}>
          <span>{this.props.minusText}</span>
        </button>
        <input className="input" pattern='[0-9]*'
          readOnly={this.state.readOnly}
          disabled={this.state.disabled}
          onClick={this.props.onInputClick}
          value={this.processValue(this.state.value)} onChange={this._inputChange.bind(this)} />
      </div>
    );
  }
}
