import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  //arrow function to bind this to the class normal function would create a new scope
  handleIndexClick = (event) => {
    this.setState({
      //dataset references data-index in the html
      //coerces string to a number
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal_hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={() => {
                this.setState({ active: index });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
