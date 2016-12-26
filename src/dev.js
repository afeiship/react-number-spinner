import './dev.scss';
import ReactNumberSpinner from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-number-spinner">
        <ReactNumberSpinner onInputClick={()=>{
            console.log('number click');
          }} min={10000} max={1000000} readOnly={true} step={5000} value="10000" />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
