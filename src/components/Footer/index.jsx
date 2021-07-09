import React, { Component } from "react";

import "./index.css";

export default class Footer extends Component {
  // 全选切换
  checkedAllChange = (event) => {
    this.props.checkedAllChange(event.target.checked);
  };
  clearDone = () => {
    // console.log(total,'to');
    // if(this.total === 0)return
    // if( window.confirm('确认清除已选任务？')){
    this.props.clearDone();
    // }
  };
  render() {
    const { todoList } = this.props;
    // 已完成
    const completedNumber = todoList.reduce(
      (pre, cur) => pre + (cur.done ? 1 : 0),
      0
    );
    // 全部
    const total = todoList.length;
    // 全选checked
    const checkedAll = completedNumber === total && total !== 0;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={checkedAll}
            onChange={this.checkedAllChange}
          />
        </label>
        <span>
          <span>已完成 {completedNumber}</span> / 全部 {total}
        </span>
        <button className="btn btn-danger" onClick={this.clearDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
