// import logo from './logo.svg';
// import React, { useState, useEffect } from "react";
import React from "react";
import "./App.css";
//with class component
// import Bulb from "./Event handling/BulbWithClassComp";
//with functional component
import Bulb from "./Event handling/BulbWithFunctionalComp";
// -----------------------------------------------------------------------------
class App extends React.Component {
  render() {
    return <Bulb />;
  }
}

// -----------------------------------------------------------------------------

// import TodoList from "./TodoList";

// -----------------------------------------------------------------------------

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0,minutes:20 };

//   }

//   tick() {
//     this.setState(state => ({
//       seconds: state.seconds + 1
//     }));
//   }

//   tickMinutes() {
//     this.setState(state => ({
//       minutes: state.minutes + 10
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//     // this.interval = setInterval(() => this.tickMinutes(), 1000);
//   }

//     // componentWillUnmount() {
//     //   clearInterval(this.interval);
//     // }

//   render() {
//     return (
//       <div>
//         Seconds: {this.state.seconds}
//         <br />
//         Minutes: {this.state.minutes}
//       </div>
//     );
//   }
// }

// -------------------------------------------------
// class App extends React.Component {
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }
// ----------------------------------------------
// function App() {
// const [seconds,setSeconds]=useState(0);
// // const [minutes,setMinutes]=useState(10);
// useEffect(()=>{
//   setTimeout(() => {
//     setSeconds(()=>seconds+1)}, 1000
//   )

// })

//   return (
//     <h1>
//         Seconds : {seconds}
//       </h1>

//   );
// }
// ------------------------------------------------?
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {seconds:0};
//   }

//   tick(){
//   this.setState(state=>({
//     seconds:state.seconds+1
//   }))
//   }

//   componentDidMount(){
//     this.interval=  setInterval(()=>this.tick(),1000);
//   }
//   render(){
//     return (
//       <h1>
//         Seconds : {this.state.seconds}
//       </h1>
//     )
//   }
// }

// -----------------------------------------------------
// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state={items:[],text:'',id:''}
//     this.handleChange=this.handleChange.bind(this);
//     this.handleSubmit =this.handleSubmit.bind(this);

//   }

//   handleChange(e){
//     this.setState({text:e.target.value})
//   }

//   handleSubmit(e){
//     e.preventDefault();
//     if(this.state.text.length===''){
//       return;
//     }
//     const newItem={
//       text: this.state.text,
//       id: new Date()
//     }
//     this.setState(state=>({
//       items:state.items.concat(newItem),
//       text:''
//     }))

//   }

//   render(){
//     return(
//       <div className="App-header">
//         <h1>TODO</h1>
//         <TodoList items={this.state.items}/>

//         <form htmlFor="new-todo">
//           <h3>what needs to be done ?</h3>
//           <input   id="new-todo" onChange={this.handleChange} value={this.state.text} />

//           <button onClick={this.handleSubmit}>Add #{this.state.items.length+1}</button>

//         </form>

//       </div>

//     )
//   }
// }
// -------------------------------------------------------
// class App extends React.Component{
//   constructor(props){
//     super(props);

//     this.state={
//       text:''
//     }
//     this.handleChange=this.handleChange.bind(this);
//   }

//   handleChange(e){
//     this.setState({text:e.target.value})
//   }

//   render(){
//     return(
//       <div>
//       <h1>Input</h1>
//       <textarea onChange={this.handleChange}/>
//       <h1 >Output</h1>
//       <p>{this.state.text}</p>
//       </div>

//     )
//   }
// }

// --------------------USING OF REF -----------------------------

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       text: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ text: this.refs.anything.value });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Input</h1>
//         <textarea ref="anything" onChange={this.handleChange} />
//         <h1>Output</h1>
//         <p>{this.state.text}</p>
//         It is {new Date().getDate()}.<h1>default props {this.props.names}</h1>
//       </div>
//     );
//   }
// }
// App.defaultProps = {
//   name: "JavaTpoint",
// };
// -----------------------------------------------------------------------------

// function App() {
//   const [time, setTime] = useState();
//   useEffect(() => {
//     setTimeout(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//   });

//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is... {time}.</h2>
//     </div>
//   );
// }

// function tick() {
//   App.defaultProps = {
//     date: new Date(),
//   };
// }

// setInterval(tick(), 1000);

// -----------------------------------------------------------------------------
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date(), counter: 0 };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//     this.setState({ counter: this.state.counter + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!!{this.state.counter}</h1>

//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// -----------------------------------------------------------------------------
// function App() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     alert("You clicked submit.");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// ------------------------------- Conditional Rendering -----------------------

// function UserGreeting(props) {
//   return <h1>User : Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Guest : Please sign up.</h1>;
// }

// function Greeting({ isLoggedIn }) {
//   const isloggedIn = isLoggedIn;
//   if (isloggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return <button onClick={props.onClick}>Login</button>;
// }

// function LogoutButton(props) {
//   return <button onClick={props.onClick}>Logout</button>;
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLogin = this.handleLogin.bind(this);
//     this.handleLogout = this.handleLogout.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLogin() {
//     this.setState({ isLoggedIn: true });
//   }
//   handleLogout() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     let button;

//     if (this.state.isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogout} />;
//     } else {
//       button = <LoginButton onClick={this.handleLogin} />;
//     }
//     return (
//       <div>
//         <Greeting isLoggedIn={this.state.isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

export default App;
