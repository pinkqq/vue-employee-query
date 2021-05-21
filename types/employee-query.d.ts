import Vue from "vue";

declare class EmployeeQuery extends Vue {
  // 添加成员
  name: string;
  selected: number;
  department: { department: string; departmentId: number }[];
  query(): void;
}

export as namespace EmployeeQuery; // umd 库声明，这条语句必不可少。

export = EmployeeQuery;
