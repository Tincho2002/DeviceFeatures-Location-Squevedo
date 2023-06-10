import { Provider } from "react-redux";

import AppNavigator from "./navigation/index";
import { store } from "./store-toolkit";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
