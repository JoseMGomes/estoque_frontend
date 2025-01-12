import React from "react";
import { Container, Content, ImageItem } from "./styles";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { ItemProps } from "@/types/itemEstoque";
import { colors } from "@/constants/colors";

interface EstoqueListProps {
  item: ItemProps;
}

const Card: React.FC<EstoqueListProps> = ({ item }: EstoqueListProps) => {
  const navigationScreen = () => {
    
  };

  return (
    <Container onPress={navigationScreen}>
      <Content>
        {item.image ? (
          <ImageItem source={require("../../assets/images/productList.png")} />
        ) : (
            <ImageItem source={require("../../assets/images/productList.png")} />
        )}
        <View>
          <Text
            style={{
              color: colors.white,
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 8,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: colors.white,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            Quantidade: {item.quant}
          </Text>
          <Text style={{ color: colors.white, marginBottom: 4 }}>
            {item.description}
          </Text>
        </View>
      </Content>
      <Text style={{ marginRight: 20, color: colors.white }}>
        {item.is_stock_entry ? (
          <Icon name="arrowup" size={25} color={colors.enter} />
        ) : (
          <Icon name="arrowdown" size={25} color={colors.exit} />
        )}
      </Text>
    </Container>
  );
};

export default Card;
