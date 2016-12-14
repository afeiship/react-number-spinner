import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    pulsText:React.PropTypes.string,
    minusText:React.PropTypes.string,
    size:React.PropTypes.string,
    width:React.PropTypes.string,
    value:React.PropTypes.string,
  };

  static defaultProps = {
    min:0,
    max:100,
    step:10,
    readOnly:false,
    pulsText:'+',
    minusText:'-',
    size:'18px',
    width:'100%',
    value:'0'
  };

  constructor(props){
    super(props);
    this.state = {
      value:props.value
    };
  }

  _click(args,ev){
    this[args]();
    ev.preventDefault();
  }

  _inputChange(ev){
    var value = ev.target.value ;
    value = this.checkValue(value);
    this.setState({
      value:value
    })
  }

  plus(){
    var value = parseInt(this.state.value) + this.props.step;
    this.setState({
      value:value
    })
  }

  minus(){
    var value = parseInt(this.state.value) - this.props.step;
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

  render(){
    return (
      <div
        style={{
          width:this.props.width,
          fontSize:this.props.size
        }}
        className={classNames('react-numer-spinner',this.props.cssClass)}>
        <button
          disabled={this.state.value === this.props.max}
          className="plus" onClick={this._click.bind(this,'plus')}>
          <span>{this.props.pulsText}</span>
        </button>
        <button
          disabled={this.state.value === this.props.min}
          className="minus" onClick={this._click.bind(this,'minus')}>
          <span>{this.props.minusText}</span>
        </button>
        <input className="input" pattern='[0-9]*' value={this.state.value} onChange={this._inputChange.bind(this)} />
      </div>
    );
  }
}
