import { Provider } from "react-redux";
import Root from "./Views/Root";
import store from "./Stores/store";

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
