import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup',
  currentUser: state.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user)),
  ownProps
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);