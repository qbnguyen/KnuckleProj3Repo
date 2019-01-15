import React, { Component } from "react";
import "./style.css";
import resultImage1 from "./result1.jpg";
import resultImage2 from "./result2.jpg";
import resultImage3 from "./result3.jpg";
import resultImage4 from "./result4.jpg";
import result_icon1 from "./result_icon1.png";
import result_icon2 from "./result_icon2.png";
import result_icon3 from "./result_icon3.png";
import result_icon4 from "./result_icon4.png";
import Modal from "../Modal";


 class SaveFavorite extends Component {
   constructor(props) {
     super(props)
     this.state = {
       status: false,
       modal:"#modal1"
     }
     this.handleClick = this.handleClick.bind(this)
   }
   handleClick() {
     this.setState({
       status: !this.state.status
     })
   }
   render() {
     return (
       <div>
       <SaveFavoriteChild className={this.state.status ? "fas fa-heart pp-sm-heart" : "far fa-heart pp-sm-heart"} toggleClassName={this.handleClick} href={this.state.modal}></SaveFavoriteChild>
      </div>
     )
   }
 }

 class SaveFavoriteChild extends React.Component {
   render() {
     return (
       <span className="pp-sm-favme">
       <i className={ this.props.className }
       onClick={ this.props.toggleClassName }
       href={this.props.href}
       >
       { this.props.children }
         </i></span>
     )
   }
 }

//This is a functional component that displays a card for each recipe that we get back from Edamam.
//It only displays these cards if the state(renderComponent) from our ingredients component is passed
//as true.
export function FoodDisplayCard(props){
  let renderComponent = props.renderComponent;
//The function showRecipe from our Ingredients component is passed as a prop to the FoodDisplayCard Component,
//and this function is run given the recipeID as a parameter. 
  if(renderComponent){
    return(
      <div data-name={props.name} className="col s12 m6">
        <div className="pp-fd-results">
          <div className="pp-sm-fav-btn">
            <SaveFavorite />
          </div>
          <div>
            <img src={props.image} alt="food"/>
          </div>
          <div className="pp-fd-icon">
            <img src={result_icon1} alt="food icon" />
          </div>
          <div className="pp-fd-link">
            <a href={props.href} data-recipeID={props.recipeID} onClick={() => props.showRecipe(props.recipeID)}>See Recipe</a>
            {/* props.buttonClick */}
          </div>
        </div>
      </div>
    );
  }
}

//This is a functional component that acts as the container for the cards.
export function FoodDisplay({props, children}) {
  return (
    <div>
      <div className="pp-fd">
        <div className="container">
          <div className="row">
            <div className="col s12 center">
              <h1>Here are some meals to consider</h1>
            </div>
          </div>
          <div className="row">
            {children}
          </div>
        </div> 
      </div>
      <Modal show={props.status} handleClose={this.handleClick}>
        <h4>Success!</h4>
        <p>Your favorites have been updated.</p>
      </Modal>
    </div>
  );
}

// export default {FoodDisplay, FoodDisplayCard}; 