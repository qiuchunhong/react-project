import React, { Component } from "react";

import Header from "./components/Header/index";
import List from "./components/List/index";
import Footer from "./components/Footer/index";

import "./app.css";

export default class App extends Component {
  state = {
    todoList: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "写代码", done: false },
    ],
  };

  //addTodoItem:添加数据
  addTodoItem = (todoObj) => {
    // 获取原数组
    const { todoList } = this.state;
    // 添加数据后的新数组
    const newTodoList = [todoObj, ...todoList];
    // 修改state
    this.setState({ todoList: newTodoList });
  };
  //updateTodo:切换列表done状态
  updateTodo = (id, done) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((val) => {
      return val.id === id ? { ...val, done } : val;
    });
    this.setState({ todoList: newTodoList });
  };
  //deleteTodoItem:删除数据
  deleteTodoItem = (id) => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter((val) => {
      return val.id !== id;
    });
    this.setState({ todoList: newTodoList });
  };
  // 全选切换
  checkedAllChange = (done) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((val) => {
      return { ...val, done };
    });
    this.setState({ todoList: newTodoList });
  };
  //clearDone:清除已选
  clearDone = () => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter((val) => {
      return !val.done;
    });
    this.setState({ todoList: newTodoList });
  };
  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodoItem={this.addTodoItem} />
          <List
            todoList={todoList}
            updateTodo={this.updateTodo}
            deleteTodoItem={this.deleteTodoItem}
          />
          <Footer
            todoList={todoList}
            checkedAllChange={this.checkedAllChange}
            clearDone={this.clearDone}
          />
        </div>
      </div>
    );
  }
}
