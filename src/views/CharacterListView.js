import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getData } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();

  }

  componentDidMount() {
    // call our action
    this.props.getData();
  }

  render() {
    // console.log(this.props)

    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      <div>data fetching</div>
    }


    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  isFetching: state.charsReducer.isFetching
})
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getData
  }
)(CharacterListView);
