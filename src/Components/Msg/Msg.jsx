import PropTypes from 'prop-types'


const Msg = ({msg}) => {
  if (msg) {
    return (
      <div className="toast toast-top toast-center">
        <div className="alert alert-info">
          <span>Already in order list</span>
        </div>
      </div>
    );
  } else {
    return
  }
};

Msg.propTypes = {
    msg:PropTypes.bool.isRequired
}

export default Msg;
