import React from 'react';
import { transparentBg } from '../styles';
import Prompt from '../components/Prompt';

class PromptContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  } 
  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    });
  }
  handleSubmitUser(e) {
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
  }
  render() {
    return (
      <Prompt
        headerText={this.props.route.header}
        styles={transparentBg}
        onSubmitUser={this.handleSubmitUser.bind(this)}
        placeholderText='Github Username'
        onUpdateUser={this.handleUpdateUser.bind(this)}
        username={this.state.username}
      />
    );
  }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default PromptContainer;
