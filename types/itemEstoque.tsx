export interface ItemProps {
  id: number;
  name: string;
  image_path?: string | null;
  description: string;
  is_active: boolean;
  is_stock_entry: boolean;
  quant: number;
  value: number;
  createdAt: string;
  updatedAt: string;
}
