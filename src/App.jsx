import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from './app/store';
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
