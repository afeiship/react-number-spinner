import './dev.scss';
import ReactNumberSpinner from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-number-spinner">
        <ReactNumberSpinner onInputClick={()=>{
            console.log('number click');
          }} min={10000} max={1000000} precision={0} readOnly={true} step={5000} value="10000" />

        <ReactNumberSpinner onChange={(args)=>{
            console.log(args);
          }} onInputClick={()=>{
              console.log('number click');
            }} min={10000} max={1000000} showThousand={true} readOnly={true} step={5000} value="10000" />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
