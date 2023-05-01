import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize= 12;

  state ={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (

      <>    
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
      <Route exact path="/" element={<News setProgress={this.setProgress} key= "general" pageSize={this.pageSize} country ="in" category="general"/>} />
      <Route exact path="/Business" element={<News setProgress={this.setProgress} key= "Business" pageSize={this.pageSize} country ="in" category="Business"/>} />
      <Route exact path="/General" element={<News setProgress={this.setProgress} key= "General" pageSize={this.pageSize} country ="in" category="General"/>} />     
      <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key= "Entertainment" pageSize={this.pageSize} country ="in" category="Entertainment"/>} />
      <Route exact path="/Science" element={<News setProgress={this.setProgress} key= "science" pageSize={this.pageSize} country ="in" category="science"/>} />
      <Route exact path="/Technology" element={<News setProgress={this.setProgress} key= "Technology" pageSize={this.pageSize} country ="in" category="Technology"/>} />
      <Route exact path="/Sports" element={<News setProgress={this.setProgress} key= "Sports" pageSize={this.pageSize} country ="in" category="Sports"/>} />   
      <Route exact path="/Health" element={<News setProgress={this.setProgress} key= "Health" pageSize={this.pageSize} country ="in" category="Health"/>} />  
      </Routes>             
      </BrowserRouter>
      </>
    )
  }
}
