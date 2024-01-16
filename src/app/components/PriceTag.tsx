import { formatPrice } from "@/lib/format";
import { JsxElement } from "typescript";

interface PriceTagProps {
  price: number;
  className?: string;
}
export default function PriceTag ({ price, className }: PriceTagProps) {
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
}
