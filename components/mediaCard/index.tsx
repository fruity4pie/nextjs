import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import type { Posts } from '../../types';

export default function MediaCard({ title, desc }: Omit<Posts, 'id' | 'img'>) {
  return (
    <Container maxWidth="xl">
      <Card sx={{ maxWidth: '100%' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
