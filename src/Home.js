import Products from "./component/products";
function HomePage() {
  return (
    <main className="App my-5 ">
      <div className="container">
        <section className="cards my-4">
          <Products />
        </section>
      </div>
    </main>
  );
}
export default HomePage;
