import NavLink from "./NavLink";
import routes from "../routes";

export default function NavLinks() {
  return <nav>
    {routes.map(route => <NavLink key={route.name} navLink={route} />)}
  </nav>;
}
