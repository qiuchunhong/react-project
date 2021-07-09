import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
  addTodoItem = (event) => {
    const { target, keyCode } = event;
    // 回车提交
    if (keyCode !== 13) return;
    // 内容不为空
    if (target.value.trim() === "") return;
    // 获取数据
    let todoObj = {
      id: nanoid(),
      name: target.value,
      done: false,
    };
    // 执行回调
    this.props.addTodoItem(todoObj);
    // 清空文本框
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称, 按回车键确认"
          onKeyUp={this.addTodoItem}
        />
      </div>
    );
  }
}
