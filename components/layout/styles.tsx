import { styled } from '@mui/system';
import { Link } from '@mui/material';

export const StyledLink = styled(Link)((props) => {
  return {
    color: '#fff',
    ':last-child': {
      marginLeft: 15,
    },
  };
});
