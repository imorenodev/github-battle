var React = require('react');
var Battle = require('../components/Battle');

var BattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    console.log('Query', query);
  },
  render: function() {
    return (
      <Battle 
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = BattleContainer;
