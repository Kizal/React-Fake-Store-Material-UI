import React from "react";
import Container from "@material-ui/core/Container";
import { useDispatch} from "react-redux";
import ajax from "../common/ajax";
import { useEffect } from "react";
import { setProduct } from "../redux/action";
import ProductComponent from "./productComponent";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  containerMargin:{
      marginTop:"2rem",
  }
}));
const ProductList = () => {
  const classes = useStyles();  
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    await ajax("get", "products")
      .then((response) => {
        dispatch(setProduct(response.data));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <Container maxWidth="lg" className={classes.containerMargin}>
      <ProductComponent />
    </Container>
  );
};

export default ProductList;
