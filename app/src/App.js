import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h1>Things To Study More</h1>
        <ol>
          <li>React.js</li>
          <li>HTML/CSS</li>
          <li>Using Git</li>
		  <li>JavaScript</li>
        </ol>
      </div>
    );
  }
}

class ContactInformation extends React.Component{
	render(){
		return(
			<div className="contactInfo">
				<p>Blake Buck</p>
				<p>blakemanbuck@gmail.com</p>
				<p>(000)000-0000</p>
			</div>
		);
	}
}

class Button extends React.Component{
	render(){
		return(
			<button>Useless Button</button>
		
		
		);
	}
}

class App extends React.Component{
	render(){
		return(
		<div>
			<List />
			<ContactInformation />
			<Button />
		</div>
		);
	}
}

export default App;
