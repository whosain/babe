import React from 'react';
// import {Switch, Route, Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'

// const HomePage=(props)=>{
//   console.log(props);
  
//   return (
//   <div>
//     {/* <Link to='/topics'>Topics</Link> */}
//     {/* === other ways to link === */}
//     <button onClick={()=>props.history.push('/topics')}>Topics</button>
//     <h1>HOME PAGE</h1>
//   </div>
//   )
// }



// const TopicList=(props)=>{
//   console.log(props);
  
//   return (  
//   <div>
//     <h1>TOPIC LIST PAGE</h1>
//   </div>
//   )
// }



// const TopicDetail=(props)=>{
// console.log(props);

// return ( 
//    <div>
//     <h1>TOPIC DETAIL PAGE : {props.match.params.topicId}</h1>
//   </div>
//   )
// }

const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)


function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      {/* <Route exact path='/topics' component={TopicList} />
      <Route path='/topics/:topicId' component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
