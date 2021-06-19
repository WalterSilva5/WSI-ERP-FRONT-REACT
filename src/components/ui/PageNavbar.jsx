import classes from './PageNavbar.module.scss'

const PageNavbar = (props) => (
  <nav className={`navbar wsi-black px-3 mx-0 justify-content-start ${classes.PageNavbar}`}>
    <div>
      {props.children}
    </div>
  </nav>
);

export default PageNavbar;
