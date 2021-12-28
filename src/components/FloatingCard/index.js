import React from "react";
import {useNavigation} from '@react-navigation/native'

import FeatherIcon from 'react-native-vector-icons/Feather'

import {Container,
        CartPricing,
        CartTotalPrice,
        CartButtom,
        CartButtomText  
} from './styles';

export default function Floatingcard (){
    const navigation = useNavigation();

    return(
        <Container>
            <CartButtom onPress={() => navigation.navigate('Cart')}>
                <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
                <CartButtomText>2 Itens</CartButtomText>
                
                <CartPricing>
                    <CartTotalPrice>R$ 200,00</CartTotalPrice>
                </CartPricing>

                <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />      
            </CartButtom>
        </Container>
    )
}