import { Link } from "react-router-dom";
import "./HeaderLinks.style.scss";
import { useAccountContext } from "@/context";

function HeaderLinks() {
  const { logout } = useAccountContext();
  return (
    <div className="HeaderLinks">
      <img src="https://i.pinimg.com/originals/2e/6f/b7/2e6fb7e9ebf41c20077d4a8560d52c9d.png" alt="menu" />
      <Link to={"/"}>Return To Menu</Link>
      |<img src="https://cdn-icons-png.flaticon.com/512/25/25613.png" alt="map" /><Link to={"/sitemap"}>Site Map</Link>
      |<img src="https://icons.veryicon.com/png/o/miscellaneous/flat-icon/help-252.png" alt="help" /><Link to={"/help"}>Help</Link>
      |<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-6Z1CeO2FgHNrV_H7xRMbhTMnvK2xIgO7A&s" alt="login" /><Link to={"/login"}>
        <span onClick={() => logout()}>Logout</span>
      </Link>
    </div>
  );
}

export default HeaderLinks;
