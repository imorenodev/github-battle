var React = require('react');
var PropTypes = React.PropTypes;

var Prompt = function(props) {
  return (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={props.styles} >
      <h1>{props.headerText}</h1>
      <div className='col-sm-12'>
        <form onSubmit={props.onSubmitUser}>
          <div className='form-group'>
            <input 
              className='form-control'
              placeholder={props.placeholderText}
              onChange={props.onUpdateUser}
              value={props.username}
              type='text' />
          </div>
          <div className='form-group col-sm-4 col-sm-offset-4'>
            <button
              className='btn btn-block btn-success'
              type='submit'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Prompt.propTypes = {
  headerText: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  placeholderText: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = Prompt;
