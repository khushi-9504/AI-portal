import { createSlice } from "@reduxjs/toolkit";

interface LayoutState {
  isSidebarCollapsed: boolean;
}

const initialState: LayoutState = {
  isSidebarCollapsed: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
  },
});

export const { toggleSidebar } = layoutSlice.actions;
export default layoutSlice.reducer;
