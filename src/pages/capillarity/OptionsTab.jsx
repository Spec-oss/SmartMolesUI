import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { BorderAllSharp } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import OptionTabsList from "./OptionTabsList";
import KhasReset from './KhasReset';
import SensorOptions from "./SensorOptions";
import logo from '../../assets/images/kostebek.png';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #1976d2",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

const GREY = "#9E9E9E";

export default function OptionsTab() {
  const [open, setOpen] = React.useState(false);
  const [openManuel, setOpenManuel] = React.useState(false);
  const [openKhas, setOpenKhas] = React.useState(false);
  const [openSensor, setOpenSensor] = React.useState(false);
  const handleCloseManuel = () => setOpenManuel(!openManuel);
  const handleCloseKhas = () => setOpenKhas(!openKhas);
  const handleCloseSensor = () => setOpenSensor(!openSensor);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src={logo}
            />
          </ButtonBase>

          <Typography>
            BU ALANDA NEM, TARİH GİBİ BİR ÇOK BİLGİYİ GÖREBİLİRSİNİZ
          </Typography>
        </Grid>
        <Grid item xs={12} sm container style={{ textAlign: 'center' }}>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Divider>
                <Chip label="Program Bilgileri" />
              </Divider>
              <Typography mt={2} variant="subtitle2" component="span">
                <b>Vana Çalışma Saat Aralığı</b>
                <br />
                Başlama Saati: 19:30 <br />
                Bitiş Saati: 00:00
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle2" component="span">
                <b>Vana Programı</b>
                <br />
                Çalışma Süresi: 0 dk <br />
                Bekleme Süresi: 0 dk <br /> Toplam Çalışma Süresi: 0 dk
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle2" component="span">
                <b>Nem Sensörü Programı</b>
                <br />
                Başlama Saati: 19:30 <br />
                Bitiş Saati: 00:00
              </Typography>
              <Divider variant="middle" />
            </Grid>
            <Grid style={{ marginLeft: 0 }} container>
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
                  <CardActionArea onClick={()=> handleOpen()}>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Nem Koşulu
                      </Typography>
                    </CardContent>
                  </CardActionArea>
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
                  <CardActionArea onClick={() => handleCloseManuel()}>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Manuel Yönetim Ayarları
                      </Typography>
                      <Modal
                        open={openManuel}
                        onClose={handleCloseManuel}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  Bilgilendirme
                                </Typography>
                                <OptionTabsList />
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Box>
                      </Modal>
                    </CardContent>
                  </CardActionArea>
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
                  <CardActionArea onClick={handleCloseSensor}>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        Sensör Digital Yüzde Limit Ayarları
                      </Typography>
                      <Modal
                        open={openSensor}
                        onClose={handleCloseSensor}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  Bilgilendirme
                                </Typography>
                                <SensorOptions />
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Box>
                      </Modal>
                    </CardContent>
                  </CardActionArea>
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
                  <CardActionArea onClick={() => handleCloseKhas()}>
                    <CardContent style={{ height: 120 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        KHAS Reset
                      </Typography>
                      <Modal
                        open={openKhas}
                        onClose={handleCloseKhas}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  KHAS Reset Sayısı
                                </Typography>
                                <KhasReset />
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Box>
                      </Modal>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
