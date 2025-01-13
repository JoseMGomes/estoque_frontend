export interface ItemProps {
  id: number;
  name: string;
  image: string | null;
  description: string;
  quantity: number;
  value: number;
  createdAt: string;
  updatedAt: string;
  is_Stock_entry: boolean
}
