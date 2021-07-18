import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CardActions from "@material-ui/core/CardActions";
import { useHistory } from "react-router-dom";
import { createProductLink } from "../config/func";
const styles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 10px 40px -20px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 60px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: theme.spacing * 3,
  },
  divider: {
    margin: `${theme.spacing * 3}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing,
    },
  },
}));
const ProductComponent = () => {
  const classes = styles();
  const history = useHistory();
  const product = useSelector((state) => state.productReducer.product);
  const productDetails = (title, id) => {
    let productLink = createProductLink(title, id)
    history.push(productLink);
  };
  const renderProduct = (
    <Grid container spacing={4} justify="space-between" alignItems="center">
      {product?.map((product) => (
        <Grid item xs={6} sm={6} md={3} key={product.id}>
          <Card
            className={classes.card}
            onClick={() => productDetails(product.title, product.id)}
          >
            <CardMedia
              className={classes.media}
              image={product.image}
              alt={product.title}
            />
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading title-caption"}
                variant={"h6"}
                gutterBottom
              >
                {product.title}
              </Typography>
              <Typography className={"description-caption"} variant={"caption"}>
                {product.description}
              </Typography>
              {/* {faces.map(face => (
            <Avatar className={classes.avatar} key={face} src={face} />
          ))} */}
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
  return <>{renderProduct}</>;
};

export default ProductComponent;
