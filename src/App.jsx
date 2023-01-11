function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href=""
    </header>
  )
}

function ProductsNew() {}

function ProductsIndex() {}

function Footer() {}

function Content() {
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
