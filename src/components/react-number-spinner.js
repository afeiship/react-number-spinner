import './style.scss';
import classNames from 'classnames';
import toThousands from 'to-thousands';
import noop from 'noop';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    min:React.PropTypes.number,
    max:React.PropTypes.number,
    step:React.PropTypes.number,
    value:React.PropTypes.string,
    precision:React.PropTypes.number,
    readOnly:React.PropTypes.bool,
    disabled:React.PropTypes.bool,
    onInputClick:React.PropTypes.func,
    onChange:React.PropTypes.func,
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
    value:'',
    readOnly:false,
    disabled:false,
    showThousand:false,
    onInputClick:noop,
    onChange:noop,
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
    this.change(value);
    this.change(value,'input');
  }

  plus(){
    var oldValue = parseFloat(this.state.value);
    var value = oldValue + this.props.step;
    var min = this.props.min;
    var max = this.props.max;
    switch(true){
      case oldValue<min:
        value = Math.max(min,value);
      break;
      case oldValue>=min && oldValue<=max:
        if(value>max){
          value = max;
        }
      break;
      case oldValue>max:
        value = oldValue;
      break;
    }

    this.change(value,'plus');
  }

  minus(){
    var oldValue = parseFloat(this.state.value);
    var value = oldValue - this.props.step;
    var min = this.props.min;
    var max = this.props.max;

    switch(true){
      case oldValue<min:
        value = oldValue;
      break;
      case oldValue>=min && oldValue<=max:
        if (value < min) {
          value = min;
        }
      break;
      case oldValue>max:
        value = max;
      break;
    }

    // if(oldValue<max){
    //   if (oldValue < min) {
    //     value = oldValue;
    //   } else {
    //     if (value < min) {
    //       value = min;
    //     }
    //   }
    // }else{
    //   value = Math.min(max,value);
    // }

    this.change(value,'minus');
  }

  change(inValue,inAction){
    var value = inValue;
    this.setState({ value },()=>{
        this.props.onChange({ value, action:inAction });
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps);
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
          disabled={this.state.value >= this.props.max}
          className="plus" onClick={this._click.bind(this,'plus')}>
          <span>{this.props.pulsText}</span>
        </button>
        <button
          disabled={this.state.value <= this.props.min}
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
