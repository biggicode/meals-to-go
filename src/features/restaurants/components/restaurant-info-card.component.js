import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: #fff;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: #fff;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = ["https://picsum.photos/200/300"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};
