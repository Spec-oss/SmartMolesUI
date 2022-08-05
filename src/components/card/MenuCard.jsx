import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------
const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

export default function MenuCard({title,path, to}) {

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <ProductImgStyle alt="Menü" src={path} />
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to={{pathname:`${to}`}} color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap textAlign={"center"}>
            {title}
          </Typography>
        </Link>
      </Stack>
    </Card>
  );
}
