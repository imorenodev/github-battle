var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    }
  },
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },
  handleSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    // checking for routeParams (<Route path='playerTwo/:playerOne' ... /> if playerOne is a routeParam then we must be on the /playerTwo route
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: { //will be passed as properties via this.props.location.query in the child
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function() {
    return (
      <Prompt 
        headerText={this.props.route.header}
        styles={transparentBg} 
        onSubmitUser={this.handleSubmitUser}
        placeholderText='Github Username'
        onUpdateUser={this.handleUpdateUser}
        username={this.state.username}
      />
    );
  }
});

module.exports = PromptContainer;
