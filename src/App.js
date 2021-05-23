import React, {Component} from 'react'
import './App.css';


class AJAX1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        };

    }

    clickHandler = (event) => {
        var xhr = new XMLHttpRequest();
        var json_obj, status = false;
        xhr.open("GET", "https://jsonplaceholder.typicode.com/photos/", true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var json_obj = JSON.parse(xhr.responseText).slice(0,6);
                    status = true;
                    this.setState({ data:json_obj });
                } else {
                    console.error(xhr.statusText);
                }
            }
        }.bind(this);
        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        };
        xhr.send(null);
    }



    render() {
        return(
            <div>

                <div>
                    {this.state.data.map(home => <div>{home.title}</div>)}


                </div>
                <button
                    type="button"
                    onClick={event =>this.clickHandler(event)}
                >Get Names</button>
            </div>);
    }


}


class AJAX2 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        };

    }

    clickHandler = (event) => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({data:users}))
    }


    render() {
        return(
            <div>

                <div>
                    {this.state.data.map(home => <div>{home.phone}</div>)}


                </div>
                <button
                    type="button"
                    onClick={event =>this.clickHandler(event)}
                >Get Phones</button>
            </div>);
    }
}


class App extends Component {
    state = {}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    render() {
        console.log(this.state)
        return (<div className="App"><AJAX1/><AJAX2/></div>)
    }
}

export default App

































// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
