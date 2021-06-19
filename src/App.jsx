/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { Route, Switch, Redirect } from 'react-router-dom';
import SideNav from './components/SideNav';
import classes from './App.module.scss';
import PageVendas from './pages/PageVendas.jsx';
import PageProdutos from './pages/PageProdutos.jsx';

function App() {
  return (
    <div className={classes.App}>
      <div className="d-flex row row col-12 m-0">
        <div className={` col-1 ${classes.AppSideNav}`}>
          <SideNav />
        </div>
        <div className={`col-11 ${classes.AppPages}`}>
          <Switch>
            <Route exact path="/vendas">
              <PageVendas />
            </Route>
            <Route exact path="/produtos">
              <PageProdutos />
            </Route>
            <Route exact path="*">
              <Redirect to="/vendas" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
