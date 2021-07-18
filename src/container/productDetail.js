import { Button, Container } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../productDetail.css";
import { removeSelectedProduct, fetchProductDetail } from "../redux/action";

const useStyles = makeStyles((theme) => ({
  containerMargin: {
    marginTop: "2rem",
  },
}));
const ProductDetail = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { title, price, description, category, image } = useSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    if (id) dispatch(fetchProductDetail(id));

    return () => {
      dispatch(removeSelectedProduct());
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container maxWidth="lg" className={classes.containerMargin}>
      <div className="card">
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src={image} alt={title} />
              {/* <img
                src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                alt="shoe image"
              />
              <img
                src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                alt="shoe image"
              />
              <img
                src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                alt="shoe image"
              /> */}
            </div>
          </div>
          {/* <div className="img-select">
            <div className="img-item">
              <a href="#" data-id="1">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                  alt="shoe image"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="2">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                  alt="shoe image"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="3">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                  alt="shoe image"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="4">
                <img
                  src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                  alt="shoe image"
                />
              </a>
            </div>
          </div> */}
        </div>
        <div className="product-content">
          <h2 className="product-title">{title}</h2>
          {/* <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div> */}

          <div className="product-price">
            {/* <p className="last-price">
              Old Price: <span>$257.00</span>
            </p> */}
            <p className="new-price">
              Price: <span>₹ {price} (5%)</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>
            <p>{description}</p>

            <ul>
              <li>
                Available: <span>in stock</span>
              </li>
              <li>
                Category: <span>{category}</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <Button variant="contained" color="secondary">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
