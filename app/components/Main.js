var React = require('react');

var Main = React.createClass({
  render: function() {
    console.log('hello from main');
    return (
      <div>
        Hello from Main!
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
