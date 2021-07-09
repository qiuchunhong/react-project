import React, { Component } from "react";

import "./index.css";

export default class Item extends Component {
  // 切换选中状态
  updateTodo = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };
  // 删除item
  deleteTodoItem = (id) => {
    if (window.confirm("确认删除？")) {
      this.props.deleteTodoItem(id);
    }
  };
  // 鼠标经过item
  state = {
    showMouseEnter: false,
  };
  // 修改鼠标经过状态
  mouseTarget = (val) => {
    this.setState({ showMouseEnter: val });
  };
  render() {
    const { id, name, done } = this.props;
    const { showMouseEnter } = this.state;
    return (
      <li
        className={showMouseEnter ? "mouseover" : ""}
        onMouseEnter={() => {
          this.mouseTarget(true);
        }}
        onMouseLeave={() => {
          this.mouseTarget(false);
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.updateTodo(id)}
          />
          <span>{name}</span>
        </label>
        <button
          style={{ display: showMouseEnter ? "block" : "none" }}
          onClick={() => {
            this.deleteTodoItem(id);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
