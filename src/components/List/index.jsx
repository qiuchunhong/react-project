import React, { Component } from "react";

import Item from "../Item/index";
import "./index.css";
export default class List extends Component {
  render() {
    const { todoList, updateTodo, deleteTodoItem } = this.props;
    return (
      <ul className="todo-main">
        {todoList.map((item) => (
          <Item
            {...item}
            key={item.id}
            updateTodo={updateTodo}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </ul>
    );
  }
}
