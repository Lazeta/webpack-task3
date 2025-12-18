import { Container } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductCardPage() {
  return (
    <Container sx={{display: "flex", flexWrap: "wrap"}}>
      <ProductCard />
    </Container>
  );
}
