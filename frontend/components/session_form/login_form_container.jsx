import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'login',
  currentUser: state.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  ownProps
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);