import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
    <Card style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 16,
    backgroundColor: "white",
  },
});
