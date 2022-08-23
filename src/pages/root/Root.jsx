import React from 'react';
import { Container, Grid, Paper, Box, Typography, Card, CardContent, Badge } from '@mui/material';
import Page from '../../components/Page';

const Root = () => {
  return (
    <Page title="Ayarlar">
      <Container maxWidth="xl">
        <Paper
          style={{
            textAlign: 'center',
            margin: '10px 10px',
            padding: '10px 10px',
            borderWidth: 11,
            backgroundImage: 'url("https://i.hizliresim.com/5l5bt2b.jpg")',
            backgroundRepeat: 'round',
          }}
        >
          <Grid container>
            {/* <Grid
          item
          xs={12}
          style={{ borderRightStyle: 'inset', borderRightWidth: 'thin', borderRightColor: 'white' }}
        >
          <Card sx={{ maxWidth: 'auto', margin: '0px 15px 15px 15px' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Tarih : 2021-06-14 21:18:43, 2.Veri
              </Typography>
            </CardContent>
          </Card>
          <Grid container style={{ margin: '10px' }}>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <Badge badgeContent={1} color="primary">
                  <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                </Badge>
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
            <Grid justifyContent={'center'} display={'flex'} item xs={3}>
              <Box>
                <img width={'85px'} src="https://i.ibb.co/kQLqnHg/m2i8-G6b1-G6b1-A0-N4.png" alt="Root" />
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid> */}
            <Grid item xs={12} style={{}}>
              <Card sx={{ maxWidth: 'auto', margin: '0px 15px 15px 15px' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Tarih : 2021-06-14 21:18:43, 2.Veri
                  </Typography>
                </CardContent>
              </Card>
              <Box>
                <Badge badgeContent={1} color="primary">
                  <img
                    width={'100%'}
                    src="https://i.hizliresim.com/c44c0x8.png"
                    style={{ filter: 'invert(1)' }}
                    alt="Root"
                  />
                </Badge>
                <Typography variant="subtitle2" gutterBottom component="div">
                  10
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Page>
  );
};

export default Root;
