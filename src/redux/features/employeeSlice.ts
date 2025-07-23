import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Employee {
  employeeName: string;
  employeeJobTitle: string;
  employeeManager: string;
}

interface EmployeeState {
  list: Employee[];
}

const initialState: EmployeeState = {
  list: [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
