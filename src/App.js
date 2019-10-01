import React from "react";
import Header from "./components/Header";
import SliderImage from "./components/SliderImage";
import RecipeCard from "./components/RecipeCard";
import "./App.css";

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: [],
      isloaded: false,
      isrecipe: false,
      recipes: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=f9b13b6aea5248ec9afbeb7cb5a231f2&number=5&query=water`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isloaded: true,
          slider: json,
          isrecipe: false
        });
      });

    fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=f9b13b6aea5248ec9afbeb7cb5a231f2&offset=6&number=16`
    )
      .then(res1 => res1.json())
      .then(json1 => {
        this.setState({
          recipes: json1,
          isrecipe: true
        });
      });
  }

  render() {
    const { isloaded, slider, recipes, isrecipe } = this.state;

    if (!isloaded) {
      return <div>Loading</div>;
    } else {
      const baseUri = slider.baseUri;
      return (
        <div>
        {/* Showing header information here*/}
        <Header />
        {/* End header information here*/}

        <SliderImage />
        {/* <div className="clear"></div> */}

        {/* Showing Content information here*/}
        {!isrecipe ? (
          "Loading recipes..."
        ) : (
          <div className="recipes-item container">
            {recipes.results.map(el => (
              <RecipeCard key={el.id} el={el} baseUri={baseUri} />
            ))}
            `{" "}
          </div>
        )}
        {/* End Content Part From Here using the API*/}
        </div>
      );
    }
  }
}
