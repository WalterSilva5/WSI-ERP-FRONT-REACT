/* eslint-disable react/button-has-type */

import { NavLink, withRouter } from 'react-router-dom';
import styles from './SideNav.module.scss';

const SideNav = () => {
  const [telaCheia, settelaCheia] = React.useState(false);
  // const fullScreen = () => {
  //   if (telaCheia == false) {
  //     telaCheia = true;
  //     document.getElementById('app').requestFullscreen();
  //   } else {
  //     telaCheia = false;
  //     document.exitFullscreen();
  //   }
  // };
  return (
    <div>
      <div>
        <div
          className="justify-content-center text-center d-flex p-2 m-0 justify-content-evenly wsi-navbar col-12"
        >
          <div className="sidebar-header col-12 container-fluid px-1">
            <div>
              <NavLink
                activeClassName="btn-danger"
                exact
                to="/vendas"
                className="btn wsi-btn-primary wsi-btn-menu col-12 wsi-btn-menu-shadow"
              >
                VENDAS
              </NavLink>
              <NavLink
                exact
                activeClassName="btn-danger"
                to="/produtos"
                className="btn wsi-btn-primary wsi-btn-menu col-12 wsi-btn-menu-shadow"
              >
                PRODUTOS
              </NavLink>
            </div>
            <div className="">
              <button
                className={`btn wsi-btn-primary wsi-btn-menu col-12 wsi-btn-menu-shadow mt-5 ${styles.SideNavButtonFullScreen}`}
              >
                TELA CHEIA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SideNav);
