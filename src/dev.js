import './dev.scss';
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


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
