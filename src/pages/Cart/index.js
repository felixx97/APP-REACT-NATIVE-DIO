import React, {useState} from "react";
import {View} from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'

import { 
    Container,
    productContainer,
    ProductList,
    Product,
    ProductImage,
    ProductTitleContainer,
    ProductTitle,
    productPriceContainer,
    totalContainer,
    ProductSinglePrice,
    productPrice,
    ProductQuantity,
    ActionContainer,
    ActionButton,
    TotalProductsContainer,
    totalProductsText,
    SubTotalValor,
} from './styles';

import formatValue from "../../utils/formatValue";

export default function Cart(){
    return <Container />
}