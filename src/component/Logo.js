import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      className="logo-name navbar-brand text-decoration-none text-uppercase"
      to={"/"}
    >
      𝒜𝓁𝓌𝒶𝒶𝓃
    </Link>
  );
}
