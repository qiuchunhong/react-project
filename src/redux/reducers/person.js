import { ADDPERSON } from "../constant";

const initData = [{ id: "112", name: "张三", age: 23 }];
export default function personReducer(preState = initData, action) {
  const { type, data } = action;
  switch (type) {
    case ADDPERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
