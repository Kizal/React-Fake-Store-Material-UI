import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderBar from "./container/header";
import Page404 from "./container/page404";
import ProductDetail from "./container/productDetail";
import ProductList from "./container/productList";
function App() {
  return (
    <>
      <HeaderBar />
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route
            exact
            path="/product-detail/:productTitle/:id"
            component={ProductDetail}
          />
          <Route component={Page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
