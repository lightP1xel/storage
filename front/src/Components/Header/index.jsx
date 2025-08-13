import { Link } from "react-router-dom";
import { BurgerMenu } from "../BurgerMenu";
import style from "./index.module.css";

export const Header = () => {

  return (
    <div className={style.wrapper}>
      <Link to="/" className={style.link}>Home</Link>
      <BurgerMenu/>
      <Link to="/latest" className={style.link}>Latest</Link>
      <Link to="/development" className={style.link}>Development</Link>
    </div>
  );
};
