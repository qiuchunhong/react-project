import React, { Component } from "react";

import { connect } from "react-redux";

import { increment, decrement, incrementSync } from "../../redux/actions/count";

class Count extends Component {
  increment = () => {
    const { value } = this.selectVal;
    this.props.increment(value * 1);
  };
  decrease = () => {
    const { value } = this.selectVal;
    this.props.decrement(value * 1);
  };
  incrementOfAdd = () => {
    const { value } = this.selectVal;
    const count = this.props.count;
    if (count % 2 === 1) {
      this.props.increment(value * 1);
    }
  };
  incrementSync = () => {
    const { value } = this.selectVal;
    this.props.incrementSync(value * 1, 1000);
  };

  render() {
    return (
      <div>
        <h2>
          合为：{this.props.count} ，下面人数为：{this.props.personCount}
        </h2>
        <br />
        <select ref={(c) => (this.selectVal = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrease}>-</button>&nbsp;
        <button onClick={this.incrementOfAdd}>奇数加</button>&nbsp;
        <button onClick={this.incrementSync}>异步加</button>
      </div>
    );
  }
}

export default connect(
  // 状态
  (state) => ({ count: state.count, personCount: state.person.length }),
  // 修改状态的方法
  {
    increment,
    decrement,
    incrementSync,
  }
)(Count);
