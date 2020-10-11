import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Booking from './components/Booking';
import Table from './components/Table';
import Home from './components/Home';
import Footer from './components/Footer';


// class App extends Component {
//   render() {
//     return (
//       <div >
//         <Table></Table>
//         <header className="App-header">CYF Hotel</header>
//         {/* <h2>Hotel Booking</h2> */}
//         <Booking />
//       </div>
//     );
//   }
// }

// export default App;

const User = ({match}) => {
  return <h1>Welcome User {match.params.username}</h1>
  }
  
  
  function App() {
    const ulstyle = {
      margin: "0",
      padding: "0",
      overflow: "hidden",
      backgroundColor: "#333",
      listStyleType:"none"
    }
    const navlinkstyle ={
      display: "block",
      color: "white",
      textAlign: "center",
      padding: "14px 16px",
      textDecoration:"none"
    }
  
   var state = {
      loggedIn:false
    }
  
    // loginHandle = () => {
    //   this.loggedIn = true
    // }
    function loginHandle() {
      state.loggedIn=true
      alert(state.loggedIn)
    }
  
    return (
      <Router>
        <div className="App" style={{width:"100%", overflowX:"hidden"}}>
          <div style={{backgroundColor:"black",height:"100px"}}>
            <h3 style={{float:"right",color:"white", marginRight:"40px", marginTop:"20px"}}><i>Welcome!!!</i></h3>
          ​<nav className="navbar navbar-default"  style={{backgroundColor:"black"}}>
           <div className="container-fluid" style={{backgroundColor:"black",margin:"0px"}}>
      <ul className="" style={ulstyle}>
      <li style={{float:"left"}} className="active">
           <NavLink to = '/' exact activeStyle={
             {color:'yellow'}} style={navlinkstyle}>HOME</NavLink>
           </li>
           <li  style={{float:"left"}}>
           <NavLink to = '/booking' exact activeStyle={
             {color:'yellow'}} style={navlinkstyle}>BOOKINGS</NavLink> 
           </li>
           <li  style={{float:"left"}}>
           <NavLink to = '/staff' exact activeStyle={
             {color:'yellow'}} style={navlinkstyle}>STAFF</NavLink>
           </li>
           {/* <li  style={{float:"left"}}>
           <NavLink to = '/contact' exact activeStyle={
             {color:'yellow'}} style={navlinkstyle}>CONTACT</NavLink>
           </li> */}
      </ul>
    </div>
  </nav>
          </div>
        
        
          <Route path='/' exact strict render={
            () => {
              return (<Home></Home>)
            }
          }/>
          <Route path='/booking' exact strict render={
            () => {
              return (<Booking></Booking>)
            }
          }/>
  
           <Route path='/staff' exact strict render={
            () => {
              return (<Table></Table>)
            }
          }/>
          {/* <Route path='/contact' exact strict render={
            () => {
              return (<h1>You chose CONTACT</h1>)
            }
          }/> */}
          {/* <Route path='/user/:username' exact strict component={User}/>
           */}
           {/* <Route path='/user/:username' exact strict render={({match})=>(
            state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/"/>)
          )}/> */}
        </div>
        <Footer></Footer>
      </Router>     
      
    );
  }
  
  export default App;
