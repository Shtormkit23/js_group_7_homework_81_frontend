import React from 'react';
import Layout from "./components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import UrlForm from "./components/UrlForm/UrlForm";

const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={UrlForm}/>
        <Route render={() => <h1>404 Not Found</h1>}/>
      </Switch>
    </Layout>
);

export default App;
