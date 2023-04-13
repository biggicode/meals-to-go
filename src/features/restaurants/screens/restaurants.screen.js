import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchbarWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantInfoCardWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex-grow: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <StyledSafeAreaView>
      <SearchbarWrapper>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchbarWrapper>
      <RestaurantInfoCardWrapper>
        <RestaurantInfoCard />
      </RestaurantInfoCardWrapper>
    </StyledSafeAreaView>
  );
};
