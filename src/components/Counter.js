import { connect } from "react-redux";

import Controls from "./Controls";
import Value from "./Value";
import * as actions from "../redux/counter/counter-actions";

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.counterValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actions.increment(1)),
    onDecrement: () => dispatch(actions.decrement(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
