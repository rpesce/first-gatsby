import React from "react"
import Urlinput from "../components/urlinput"
import Container from "../components/container"




//Start application
const init = function(){
	console.log("Application mode on");
	setupEventListeners();
};

//Set event listener on click and keypress
const setupEventListeners = function(){
	document.querySelector('.newUrlSubmit').addEventListener('click', getInput);
	document.addEventListener('keypress', function(e){
		if (e.keyCode === 13 || e.which === 13){
			getInput();
		}
	}
});

// Get the content from the input field and store in a variable
let getInput = function () {
	return document.querySelector('.newUrl').value
};

//Redirect user to the next screen while supplying iframe src with the URL specified by user


init();


export default () => (
	<Container>
		<div style={{ color: `purple` }}>
			<Urlinput />
		</div>
	</Container>
)