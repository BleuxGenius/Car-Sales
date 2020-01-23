import React from 'react';
import {connect} from 'react-redux'
import {removeFeature} from '../actions/actions.js';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log('additionalFeature', state);
  console.log('Addedfeatures', state.car.feature);

  return {
    car: state.car,
    additionalFeature: state.additionalFeature,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, {removeFeature })(AddedFeature);
