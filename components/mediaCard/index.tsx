import { Button, CardActions, CardContent, Typography } from '@mui/material';

import { StyledCard, StyledTypography } from './style';
import type { Article } from '../../types';

type MediaCardProps = Omit<Posts, 'id' | 'img'> & {
  onClick: () => void;
};

export default function MediaCard({ title, desc, onClick }: MediaCardProps) {
  return (
    <StyledCard sx={{ maxWidth: '100%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <StyledTypography variant="body2" color="text.secondary">
          {desc}
        </StyledTypography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick} size="small">
          Learn More
        </Button>
      </CardActions>
    </StyledCard>
  );
}
