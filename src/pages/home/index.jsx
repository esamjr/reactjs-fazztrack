import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getData = async () => {
    try {
      const data = await axios.get("http://hplussport.com/api/products");
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <main>
        <section className="header">
          <h2>Products</h2>
          <div className="input">
            <input
              className="form-control me-2"
              type="text"
              name="search"
              id="search"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        <section className="prod">
          <div className="row">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className={`col-lg-${filteredProducts.length === 1 ? '12' : '3'} col-md-6 col-sm-12`}
              >
                <Card imgProd={p.image} price={p.price} name={p.name} id={p.id} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
