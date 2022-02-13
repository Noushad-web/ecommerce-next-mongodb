import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { getLimitedWords } from '../utils/functions';
export default function ProductCard({product}) {
  const
  {
    category,
    name,
    image,
    stock,
    slug, 
    brand,
    rating,
    price, 
    description,
  } = product;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {getLimitedWords(description, 220) + "..."}
        </Typography>
      </CardContent>
      <Link href={`/products/${slug}`} passHref>
        <a>
          <CardActionArea centerRipple>
            <CardActions
              sx={{ justifyContent: "center", backgroundColor: "Highlight" }}
            >
              <Button
                size="small"
                color="primary"
                sx={{ textAlign: "center", color: "white" }}
              >
                View More
              </Button>
            </CardActions>
          </CardActionArea>
        </a>
      </Link>
    </Card>
  );
}
