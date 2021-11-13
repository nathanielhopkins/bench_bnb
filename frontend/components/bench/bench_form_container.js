import { connect } from 'react-redux';
import BenchForm from './bench_form';
import { createBench, clearBenchErrors } from '../../actions/bench_actions';

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get("lat"),
  lng: new URLSearchParams(location.search).get("lng"),
  errors: state.errors.bench
});

const mapDispatchToProps = dispatch => ({
  createBench: bench => dispatch(createBench(bench)),
  clearBenchErrors: () => dispatch(clearBenchErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);