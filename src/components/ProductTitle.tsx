import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/style.module.css';

export interface Props {
  className?: string;
  title?: string;
  activeClass?: string;
  style?: CSSProperties;
}
export const ProductTitle = ({title, className, style}: Props) => {
  const {product} = useContext(ProductContext);

  return (
    <span 
      className={`${styles.productDescription} ${className}`}
      style={style}
    >{title || product.title}</span>
  )
}