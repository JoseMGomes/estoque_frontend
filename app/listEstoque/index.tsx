import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { FlatList, ActivityIndicator } from "react-native";
import { ItemProps } from "@/types/itemEstoque";
import Header from "@/components/header";
import Card from "@/components/card";
import { getAllItemsAsync } from "@/services/estoqueServices";
import { colors } from "@/constants/colors";

interface ItemFlatList {
  index: number;
  item: ItemProps;
}

export const ListEstoque: React.FC = () => {
  const [data, setData] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getAllItemsAsync();
      if (items) {
        setData(items);
      }
      setLoading(false);  
    };

    fetchItems();
  }, []);  

  if (loading) {
    return (
      <Container>
        <Header title="Listagem de estoque" />
        <ActivityIndicator size="large" color={colors.primary} />  
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Listagem de estoque" />
      <FlatList
        style={{ width: "90%", height: 500, marginTop: 50 }}
        data={data}
        renderItem={({ item }: ItemFlatList) => <Card item={item} />}
        keyExtractor={(item: ItemProps) => item.id.toString()}
      />
    </Container>
  );
};

export default ListEstoque;
