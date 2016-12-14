import './dev.scss';
import ReactNumerSpinner from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-numer-spinner">
        <ReactNumerSpinner />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
