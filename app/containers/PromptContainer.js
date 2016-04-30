import React from 'react';
import { transparentBg } from '../styles';
import Prompt from '../components/Prompt';

const PromptContainer = React.createClass({
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
    const { username } = this.state;
    this.setState({
      username: ''
    });

    const { playerOne } = this.props.routeParams;
    // checking for routeParams (<Route path='playerTwo/:playerOne' ... /> if playerOne is a routeParam then we must be on the /playerTwo route
    if (playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: { //will be passed as properties via this.props.location.query in the child
          playerOne,
          playerTwo: username
        }
      });
    } else {
      this.context.router.push(`/playerTwo/${username}`)
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

export default PromptContainer;
