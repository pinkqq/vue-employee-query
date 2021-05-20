<template>
  <div class="employee-query">
    <input type="text" placeholder="姓名" v-model.trim="tempName" />
    <select v-model.number="tempSelected">
      <option value="0">部门</option>
      <option
        v-for="option in department"
        :value="option.departmentId"
        :key="option.departmentId"
      >
        {{ option.department }}
      </option>
    </select>
    <button @click="query">查询</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class EmployeeQuery extends Vue {
  @Prop(String)
  name?: string = "";

  @Prop({ type: Number, default: 0 })
  selected?: number = 0;

  @Prop({ type: Array, default: () => [] })
  department?: { department: string; departmentId: number }[];

  tempName: string = this.name!;
  tempSelected: number = this.selected!;

  query() {
    this.$emit("query", { name: this.tempName, selected: this.tempSelected });
  }
}
</script>
<style scoped>
.employee-query {
  display: flex;
}
input,
select {
  margin-right: 10px;
}
</style>
