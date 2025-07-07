import { Link } from "react-router-dom";
import style from "./index.module.css";

export const Header = () => {
  const navigationButtons = [
    { id: 1, to: "/", title: "Home" },
    { id: 2, to: "/blog", title: "Blog" },
    { id: 3, to: "/latest", title: "Latest" },
    { id: 4, to: "/development", title: "Development" },
  ];

  return (
    <div className={style.wrapper}>
      {navigationButtons.map(({ to, title }) => (
        <Link to={to} className={style.link}>
          {title}
        </Link>
      ))}
    </div>
  );
};
