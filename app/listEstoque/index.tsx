import React, { useState } from "react";
import { Container } from "./styles";
import { FlatList } from "react-native";

import { ItemProps } from "@/types/itemEstoque";
import Header from "@/components/header";
import Card from "@/components/card";

interface ItemFlatList {
  index: number;
  item: ItemProps;
}

export const ListEstoque: React.FC = () => {
  const [data, setData] = useState<ItemProps[]>([
    {
      createdAt: "2024-04-22T18:46:40.000Z",
      description: "Descrição",
      id: 1,
      image_path: "https://example.com/image1.jpg",
      is_active: true,
      is_stock_entry: true,
      name: "Item 1",
      quant: 10,
      updatedAt: "2024-04-22T18:46:40.000Z",
      value: 100,
    },
    {
      createdAt: "2024-04-23T18:46:40.000Z",
      description: "Descrição",
      id: 2,
      image_path: "https://example.com/image2.jpg",
      is_active: true,
      is_stock_entry: false,
      name: "Item 2",
      quant: 5,
      updatedAt: "2024-04-23T18:46:40.000Z",
      value: 50,
    },
  ]);

  return (
    <Container>
      <Header title="Listagem de estoque" />
      <FlatList
        style={{ width: "90%", height: 500, marginTop: 50 }}
        data={data}
        renderItem={(item: ItemFlatList) => <Card item={item.item} />}
        keyExtractor={(item: ItemProps) => item.id.toString()}
      />
    </Container>
  );
};

export default ListEstoque;
