import AppRouter from './router';
import './App.css';
// 引入Redux Store
import { Provider } from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <AppRouter></AppRouter>
      </Provider>
    </div>
  );
}

export default App;
