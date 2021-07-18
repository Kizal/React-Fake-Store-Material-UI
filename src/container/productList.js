import React from "react";
import Container from "@material-ui/core/Container";
import { useDispatch} from "react-redux";
import ajax from "../common/ajax";
import { useEffect } from "react";
import { fetchProduct, setProduct } from "../redux/action";
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

 
  useEffect(() => {
    dispatch(fetchProduct()); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container maxWidth="lg" className={classes.containerMargin}>
      <ProductComponent />
    </Container>
  );
};

export default ProductList;
