var React = require('react');
var PropTypes = React.PropTypes;

function printAll(object) {
  return <pre>{JSON.stringify(object, 2, ' ')}</pre>;
}

function Results (props) {
  return (
    <div> Results: {printAll(props)} </div>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
