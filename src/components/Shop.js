import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {actionCreators} from "../state/index"; // this is the variable which has value of action-creator function (here dipositMoney and withdrawMoney fuction of action-creator/index which is imported already in state/index.js file)
import { bindActionCreators } from "redux"; // bindActionCreators method is binding dispatch function and the state variable , so we no need to each time to write full like: dispatch(actionCrators.methodName(argument))
// Shop component is created 

function Shop() {
  const dispatch = useDispatch(); // this useDispatch hook is used when you want to make alter the value of state variable
//  const action = bindActionCreators(actionCreators, dispatch); // bindActionCreators takes two argument, one is variable where wecan access action creators functions and second is dispatch function
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch); // we can also do destructuring here to get direct function names from action creator variable, so it rduce the code 
  const balance = useSelector(state=>state.amount); // useSelector hook of react-redux is used to display or show the state variable. (here amount is variable from state which is send from combineReducer function)

  return (
    <div>
      <div className="container">
        <h2>Deposit / Withdraw money</h2>
        {/* Without using bindActionCreator, we have to use onClick property of button and that property take dispatch function and in dispatch function we send which function from action-creator/index.js we have to call with argument (Here two fuction actionCreators.depositMoney() and actionCreators.withdrawMoney() with value as argument) */}
        {/*<button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(actionCreators.withdrawMoney(100));
          }}
        >
          -
        </button>
        Balance update
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(actionCreators.depositMoney(100));
          }}
        >
          +
        </button>*/}
        {/* With using bindActionCreator, we no need to each time pass action creator function as argument to dispatch method, the code is shorted */}
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withdrawMoney(100);
          }}
        >
          -
        </button>
        Balance update : {balance}
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            depositMoney(100);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Shop;
