import React from 'react';
import Battle from '../components/Battle';
import { getPlayersInfo } from '../utils/githubHelpers';

class BattleContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      playersInfo: []
    };
  }
  //needs async keyword before function name to use async/await
  async componentDidMount() {
    const { query } = this.props.location;

    try {
      //pause here until players resolves
      const players = await getPlayersInfo([query.playerOne, query.playerTwo])
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      });
    } catch(error) {
      console.warn(`Error in BattleContainer: ${error}`);
    }
  }
  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  }
  render() {
    return (
      <Battle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle.bind(this)}
      />
    );
  }
}

BattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default BattleContainer;
