import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useGetProductsQuery } from "./ProductsApi";
import { useState } from "react";

export default function ProductCard() {
  const [liked, setLiked] = useState<number[]>([]);
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
        p: 2,
      }}
    >
      {data.products.map((p: any) => (
        <Card
          key={p.id}
          sx={{
            maxWidth: 300,
            display: "flex",
            flexDirection: "column",
            "&:hover": {
              boxShadow: 4,
            },
          }}
        >
          <CardMedia
            sx={{ height: 200, objectFit: "contain" }}
            component="img"
            image={p.thumbnail}
            title={p.title}
          />
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontSize: "1.1rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: "2.6em",
              }}
            >
              {p.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
                mt: 1,
              }}
            >
              {p.price + "$"}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mt: 1,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                flexGrow: 1, // 🔑
              }}
            >
              {p.description.length > 100
                ? p.description.substring(0, 100) + "..."
                : p.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ mt: "auto" }}>
            <IconButton
              aria-label="add to favorites"
              onClick={() =>
                setLiked((prev) =>
                  prev.includes(p.id)
                    ? prev.filter((id) => id !== p.id)
                    : [...prev, p.id]
                )
              }
            >
              <FavoriteIcon
                sx={{
                  color: liked.includes(p.id) ? "red" : "grey",
                }}
              />
            </IconButton>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
