# react-number-spinner
> Number spinner component for react.


## props:
```javascript
static propTypes = {
  className:React.PropTypes.string,
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
  showThousand:React.PropTypes.bool
};
```
## usage:
+ Need 'FastClick' support.
+ http://cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js
```jsx
import ReactNumberSpinner from './main';

class App extends React.Component{
  render(){
    return (
      <div className="hello-react-number-spinner">
        <ReactNumberSpinner onInputClick={()=>{
            console.log('number click');
          }} min={150} max={600} precision={0} readOnly={true} step={100} value="600" />


    </div>
    );
  }
}
```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
