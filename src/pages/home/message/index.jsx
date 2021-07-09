import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Deatil from "./detail";

export default class Message extends Component {
  state = {
    dataList: [
      { id: "1", title: "message001" },
      { id: "2", title: "message002" },
      { id: "3", title: "message003" },
    ],
  };

  push = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`);
  };
  replace = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`);
  };
  render() {
    const { dataList } = this.state;
    return (
      <div>
        <ul>
          {dataList.map((item) => {
            return (
              <li key={item.id}>
                {/* 方法一：向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link>
                {/* 方法二：向路由组件传递search参数 */}
                {/* <Link
                  to={`/home/message/detail?id=${item.id}&title=${item.title}`}
                >
                  {item.title}
                </Link> */}
                {/* 方法三：向路由组件传递state参数 */}
                {/* <Link
                  to={{pathname:"/home/message/detail",state:{id:item.id,title:item.title}}}
                >
                  {item.title}
                </Link> */}
                <button
                  onClick={() => {
                    this.push(item.id, item.title);
                  }}
                >
                  查看详情(push)
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replace(item.id, item.title);
                  }}
                >
                  查看详情(replace)
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 方法一：声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Deatil} />

        {/* 方法二：无需接收search参数 */}
        {/* <Route path="/home/message/detail" component={Deatil} /> */}

        {/* 方法三：无需接收state参数 */}
        {/* <Route path="/home/message/detail" component={Deatil} /> */}
      </div>
    );
  }
}
