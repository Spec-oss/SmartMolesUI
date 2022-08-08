import { useState } from 'react';
import { styled } from '@mui/material/styles';

import {
  Grid,
  Paper,
  Typography,
  TextField,
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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import BasicDatePicker from "../../components/dateRange/DateRange";
import logo from '../../assets/images/kostebek.png';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function LiveTab() {
  const [value, setValue] = useState(null);
  return (
    <Paper
      elevation={20}
      style={{
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
      <Grid container>
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
          <br />

          <Typography>BU ALANDA CANLI İZLEME YAPABİLİRSİNİZ</Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Divider variant="middle" />
            </Grid>
            <Grid style={{ marginLeft: 0 }} container spacing={2}>
              <Grid item xs={6}>
                <Card
                  sx={{
                    backgroundColor: '#d9d4c1',
                    marginTop: 2,
                    maxWidth: 'auto',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Gerçek Zaman
                      </Typography>
                      Çalıştır
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    backgroundColor: '#d9d4c1',
                    marginTop: 2,
                    maxWidth: 'auto',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Hızlı İzle
                      </Typography>
                      Çalıştır
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} style={{ marginBottom: 20 }}>
                <Card
                  sx={{
                    backgroundColor: '#d9d4c1',
                    marginTop: 2,
                    maxWidth: 'auto',
                    textAlign: 'center',
                  }}
                >
                  <CardActionArea>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Önceki Kapiler Hareket Faaliyeti
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: 'center' }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label={'Başlangıç Değeri'}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label={'Bitiş Değeri'}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </CardActions>
                </Card>
              </Grid>
              <Divider />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
