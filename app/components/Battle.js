var React = require('react');

var Battle = function(props) {
  return(
    props.isLoading === true
      ? <p>LOADING..</p>
      : <h1>Confirm Battle</h1>
  );
}

module.exports = Battle;
