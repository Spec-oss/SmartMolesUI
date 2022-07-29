import * as React from 'react';
import {
  styled,
  Grid,
  Paper,
  Typography,
  ButtonBase,
  Divider,
  Stack,
  Button,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
} from '@mui/material';
import { BorderAllSharp } from '@mui/icons-material';
import logo from '../../assets/images/kostebek.png';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const GREY = '#9E9E9E';

export default function InfoTab() {
  return (
    <Paper
      style={{
        boxShadow: `15px 20px 20px ${GREY}`,
        border: BorderAllSharp,
        borderWidth: 11,
        borderRadius: 50,
      }}
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 735,
        flexGrow: 1,
        backgroundColor: '#EFEAD8',
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            display: 'flex',
          }}
        >
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={logo} />
          </ButtonBase>

          <Typography>BU ALANDA NEM, TARİH GİBİ BİR ÇOK BİLGİYİ GÖREBİLİRSİNİZ</Typography>
        </Grid>
        <Grid item xs={12} sm container style={{ textAlign: 'center' }}>
          <Grid item xs container direction="column" spacing={0}>
            <Divider />
            <Typography mt={1} mb={1} variant="subtitle2" component="span">
              <b>Smart Capillarity:</b>
            </Typography>
            <Typography variant="subtitle2">
              22.06.2000 <br /> 19:30
            </Typography>
            <Divider />
            <Typography mt={1} mb={1} variant="body2" component="span">
              <b>HUB İsmi:</b>
            </Typography>
            <Typography variant="subtitle2">KONSEPT TARIM INCESU-1</Typography>
            <Divider />
            <Typography mt={1} mb={1} variant="body2" component="span">
              <b>Sensör-1 Kalibrasyon Zamanı :</b>
            </Typography>
            <Typography variant="subtitle2">2022-06-21 18:45:46</Typography>
            <Divider />
            <Typography mt={1} mb={1} variant="body2" component="span">
              <b>Sensör-1 Kalibrasyon Nemi : </b>
            </Typography>
            <Typography variant="subtitle2">%10.20</Typography>
            <Divider />
            <Typography mt={1} mb={1} variant="body2" component="span">
              <b>Sulama Metodu:</b>
            </Typography>
            <Typography variant="subtitle2">Yağmurlama Sulama</Typography>
            <Divider />
            <Typography mt={1} mb={1} variant="body2" component="span">
              <b>Su Basınç ve Kaçak Sensörü:</b>
            </Typography>
            <Typography variant="subtitle2">0</Typography>
            <Divider />
            <Typography mt={1} mb={1} variant="body2" component="span">
              <b>Son Sulama Miktarı:</b>
            </Typography>
            <Typography variant="subtitle2">0</Typography>
            <Divider />
            <Typography mt={1} mb={1} variant="body2" component="span">
              <b>Günlük Sulama Miktarı:</b>
            </Typography>
            <Typography variant="subtitle2">0</Typography>
            <Divider />
            <Typography mt={1} mb={1} variant="body2" component="span">
              <b> Sezonluk Toplam Sulama Miktarı:</b>
            </Typography>
            <Typography variant="subtitle2">0</Typography>
            <Divider />
            <Typography mt={1} mb={1} variant="subtitle2" component="span">
              <b>** Değerler litre cinsindendir.</b>
            </Typography>
            <Divider />
            <Grid style={{ marginLeft: 0 }} container>
              <Grid item xs={6}>
                <Card
                  sx={{
                    boxShadow: '10px 15px 20px #a9a495',
                    backgroundColor: '#d9d4c1',
                    margin: 2,
                    borderRadius: 8,
                    maxWidth: 'auto',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Vana Durumu
                      </Typography>
                      <Typography variant="center" color="text.secondary">
                        Manuel
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions style={{ justifyContent: 'center' }}>
                    <Stack spacing={1} direction="row">
                      <Button style={{ borderRadius: 80, backgroundColor:'#0C81C5' }} size="small" variant="contained">
                        Değiştir
                      </Button>
                    </Stack>
                  </CardActions> */}
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    boxShadow: '10px 15px 20px #a9a495',
                    backgroundColor: '#d9d4c1',
                    margin: 2,
                    borderRadius: 8,
                    maxWidth: 'auto',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Vana
                      </Typography>
                      <Typography variant="center" color="text.secondary">
                        Kapalı
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions style={{ justifyContent: 'center' }}>
                    <Stack spacing={1} direction="row">
                      <Button style={{ borderRadius: 80, backgroundColor: '#0C81C5' }} size="small" variant="contained">
                        Değiştir
                      </Button>
                    </Stack>
                  </CardActions> */}
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    boxShadow: '10px 15px 20px #a9a495',
                    backgroundColor: '#d9d4c1',
                    margin: 2,
                    borderRadius: 8,
                    maxWidth: 'auto',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Gerçek Zamanlı Kalibrasyon
                      </Typography>
                      <Typography variant="center" color="text.secondary">
                        Başlat
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions style={{ justifyContent: 'center' }}>
                    <Stack spacing={1} direction="row">
                      <Button style={{ borderRadius: 80, backgroundColor: '#0C81C5' }} size="small" variant="contained">
                        Başlat
                      </Button>
                    </Stack>
                  </CardActions> */}
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    boxShadow: '10px 15px 20px #a9a495',
                    backgroundColor: '#d9d4c1',
                    margin: 2,
                    borderRadius: 8,
                    maxWidth: 'auto',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Nem Kalibrasyon
                      </Typography>
                      <Typography variant="center" color="text.secondary">
                        Başlat
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions style={{ justifyContent: 'center' }}>
                    <Stack spacing={1} direction="row">
                      <Button style={{ borderRadius: 80, backgroundColor: '#0C81C5' }} size="small" variant="contained">
                        Başlat
                      </Button>
                    </Stack>
                  </CardActions> */}
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
