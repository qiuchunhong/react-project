import React, { Component } from "react";

// import qs from 'querystring'

let data = [
  { id: "1", content: "第一条数据" },
  { id: "2", content: "啦啦啦" },
  { id: "3", content: "第三条数据了" },
];

export default class index extends Component {
  render() {
    // console.log(this.props);
    // 方法一：接收params参数
    let { id, title } = this.props.match.params;


    // 方法二：接收search参数 : 接收的search="?id=3&title=message003"，需借助querystring插件
    // let {search} = this.props.location
    // let {id,title} = qs.parse(search.slice(1))

    // 方法三：接收state参数
    // let {id,title} = this.props.location.state

    const currentData = data.find((item) => {
      return item.id === id;
    });
    return (
      <ul>
        <li>id:{id}</li>
        <li>title:{title}</li>
        <li>content:{currentData.content}</li>
      </ul>
    );
  }
}
