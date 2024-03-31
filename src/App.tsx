import { Header } from "./Header";
import { Index } from "./Index";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Provider store={store}>
        <Header />
        <Index />
      </Provider>
    </div>
  );
}

export default App;
