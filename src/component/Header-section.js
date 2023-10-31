function Header({ props }) {
  return (
    <div className="sectoin-heders text-center my-3">
      <h6 className="third-header text-uppercase">Wolmart collections</h6>
      <h2 className="main-header text-uppercase my-2">{props}</h2>
      <h5 className="secondary-header my-1">
        Wolmart is a powerful eCommerce theme for Shopify.
      </h5>
    </div>
  );
}

export default Header;
