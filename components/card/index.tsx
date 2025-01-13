import React from "react";
import { Container, Content, ImageItem, TextContent, Title } from "./styles";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { ItemProps } from "@/types/itemEstoque";
import { colors } from "@/constants/colors";

interface EstoqueListProps {
  item: ItemProps;
  onPress: () => void;
}

const Card: React.FC<EstoqueListProps> = ({ item, onPress }) => {
  const navigationScreen = () => {
    onPress();
  };

  const itemPrice = item.price
    ? parseFloat(String(item.price)).toFixed(2)
    : "0.00";

  const isOutOfStock = item.quantity === 0;

  return (
    <Container onPress={navigationScreen}>
      <Content>
        <ImageItem
          source={
            item.image
              ? { uri: item.image }
              : require("../../assets/images/productList.png")
          }
        />
        <TextContent>
          <Title>{item.name}</Title>
          <Text
            style={{
              color: isOutOfStock ? colors.exit : colors.enter,
              fontSize: 16,
              marginBottom: 5,
            }}
          >
            Quantidade: {isOutOfStock ? "0" : item.quantity}
          </Text>
          <Text
            style={{
              color: colors.white,
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            R$ {itemPrice}
          </Text>
          <Text style={{ color: colors.white, marginTop: 5 }}>
            {item.description}
          </Text>
        </TextContent>
      </Content>
      <Icon
        name={isOutOfStock ? "arrowdown" : "arrowup"}
        size={25}
        color={isOutOfStock ? colors.exit : colors.enter}
        style={{ marginRight: 10 }}
      />
    </Container>
  );
};

export default Card;
