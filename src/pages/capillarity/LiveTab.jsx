import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { BorderAllSharp } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
// import BasicDatePicker from "../../components/dateRange/DateRange";
import logo from '../../assets/images/kostebek.png';


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const GREY = "#9E9E9E";

export default function LiveTab() {
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
        margin: "auto",
        maxWidth: 735,
        flexGrow: 1,
        backgroundColor: "#EFEAD8",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <ButtonBase sx={{ width: 128, height: 128}}>
            <Img
              alt="complex"
              src={logo}
            />
          </ButtonBase>
          <br />

          <Typography>
            BU ALANDA CANLI İZLEME YAPABİLİRSİNİZ
          </Typography>
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
                    boxShadow: '10px 15px 20px #a9a495',
                    backgroundColor: "#d9d4c1",
                    marginTop: 2,
                    borderRadius: 8,
                    maxWidth: 'auto',
                    textAlign: "center",
                  }}
                >
                  <CardActionArea>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Gerçek Zaman
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Stack spacing={1} direction="row">
                      <Button
                        style={{ borderRadius: 80, backgroundColor: '#0C81C5' }}
                        size="small"
                        variant="contained"
                      >
                        Çalıştır
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    boxShadow: '10px 15px 20px #a9a495',
                    backgroundColor: "#d9d4c1",
                    marginTop: 2,
                    borderRadius: 8,
                    maxWidth: 'auto',
                    textAlign: "center",
                  }}
                >
                  <CardActionArea>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Hızlı İzle
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Stack spacing={1} direction="row">
                      <Button
                        style={{ borderRadius: 80, backgroundColor: '#0C81C5' }}
                        size="small"
                        variant="contained"
                      >
                        Çalıştır
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} style={{ marginBottom: 20 }}>
                <Card
                  sx={{
                    boxShadow: '10px 15px 20px #a9a495',
                    backgroundColor: "#d9d4c1",
                    marginTop: 2,
                    borderRadius: 8,
                    maxWidth: "auto",
                    textAlign: "center",
                  }}
                >
                  <CardActionArea>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Önceki Kapiler Hareket Faaliyeti
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "center" }}>
                    {/* <BasicDatePicker style={{ minWidth: '45%'}} />
                    <BasicDatePicker style={{ minWidth: '45%' }} /> */}
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
