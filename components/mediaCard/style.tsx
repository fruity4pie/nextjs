import { styled } from '@mui/system';
import { Card, Typography } from '@mui/material';

export const StyledCard = styled(Card)({
  marginBottom: 15,
});

export const StyledTypography = styled(Typography)({
  width: '100%',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});
