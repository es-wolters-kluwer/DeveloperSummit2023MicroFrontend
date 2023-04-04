import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./components/similar-products";

import "./index.scss";

const pathname = window.location.pathname;
const pathnameToArray = pathname.split("/");
const [first, path, categoryId] = pathnameToArray;

const App = () => <ProductList categoryId={categoryId} />;
ReactDOM.render(<App />, document.getElementById("app"));
