import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function SensorOptions() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Vana" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="VANA AÇILMA MESAJI"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {"SULAMA ZAMANI GELDİ, NEM SEVİYESİ TK DEĞERİNİN ALTINA DÜŞTÜ"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="NEM" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="NEM SEVİYESİ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {
                "SAYIN ABONEMİZ -İNCESU1- DE SULAMAYI SONLANDIRMANIZI ÖNERİRİZ. SMARTMOLE'S"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="KHAS" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="KHAS"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {
                "  SAYIN ABONEMİZ -İNCESU1- DE SULAMAYI SONLANDIRMANIZI ÖNERİRİZ. SMARTMOLES"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Grid
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {" "}
        <Stack spacing={1} direction="row">
          <Button style={{ borderRadius: 80 }} size="small" variant="contained">
            Stratejileri Kaydet
          </Button>
        </Stack>
      </Grid>
    </List>
  );
}
