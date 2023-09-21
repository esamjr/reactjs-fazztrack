import { useParams } from "react-router-dom";
import "./detail.css";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProductById = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://hplussport.com/api/products?id=${id}`
      );
      localStorage.setItem("idProduct", id);
      setProduct(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  return (
    <div className="container">
      <Navbar />
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product?.name || "Product Detail"}
          </li>
        </ol>
      </nav>
      {/* End Breadcrumb */}
      <div className="container detail-container">
        <div className="detail-img">
          <img src={product?.image} alt={product?.name} />
        </div>
        <div className="detail-price">Rp {product?.price || 100000}</div>
        <div className="detail-name" style={{ fontWeight: 700 }}>
          {product?.name}
        </div>
        <div className="detail-desc">
          {product?.description}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
