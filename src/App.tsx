// import { RouterProvider } from "react-router-dom";
// import router from "./route/route";

// const App = () => {
//   return <RouterProvider router={router}></RouterProvider>;
// };

// export default App;

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
