export interface ItemProps {
  id: number;
  name: string;
  image: string | null;
  description: string;
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  is_Stock_entry: boolean
}

export interface UpdateQuantityRequest {
  quantity: number;
  updateQuantity: "add" | "remove";  
}