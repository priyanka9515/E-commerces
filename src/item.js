import React from "react";
import "./item.css";
import ProductList from "./components/ProductList";
import { Button } from "reactstrap";

// export default class Item extends React.Component {
//   static getDerivedStateFromProps(props, state) {
//     if (props.location.image || !sessionStorage.getItem("img"))
//       sessionStorage.setItem("img", props.location.image.display);
//   }
//   handleAddToCart = () => {
//     let item = sessionStorage.getItem("img");
//     localStorage.setItem("cartitem", item);
//   };
//   render() {
//     console.log("item-obj:", this.props.location.object);
//     return (
//       <div className="item">
//         <img
//           src={
//             !sessionStorage.getItem("img")
//               ? this.props.location.image.display
//               : sessionStorage.getItem("img")
//           }
//         ></img>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={this.handleAddToCart}
//         >
//           Add to Cart
//         </Button>
//         <p>product description</p>
//       </div>
//     );
//   }
// }
// export const createTodoItem = (sectionId, name) => {
//     return (dispatch) => {
//       dispatch({
//         type: actionType.CREATE_TODO_REQUEST
//       })
//       export const loadSpecificSection = (sectionId) => {
//         return (dispatch) => {
//           dispatch(push(`/${sectionId}`))
//         }
//       }
class Item extends React.Component {
  //...
  onSectionClick = sectionId => {
    this.props.loadSpecificSection(sectionId);
  };
  render() {
    return (
      <div>
        <ProductList
          sections={this.props.sections}
          onClick={this.onSectionClick}
        />
        <form onSubmit={this.onSubmit}>
          <input ref="section-name" />
          <Button>Add new section</Button>
          rgrfhgtgrdhtrhtr console.log("gfdgvfd")
        </form>
      </div>
    );
  }
}

export default Item;
