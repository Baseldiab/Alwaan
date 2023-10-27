import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      className="logo-name navbar-brand text-decoration-none text-uppercase"
      to={"/"}
    >
      <Image
        src={
          "https://portotheme.com/html/wolmart/assets/landing/images/logo.png"
        }
        style={{ width: "145px", maxWidth: "100%", height: "auto" }}
        alt="logo"
      />
    </Link>
  );
}
