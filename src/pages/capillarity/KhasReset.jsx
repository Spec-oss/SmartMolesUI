import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';


export default function AlignItemsList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Vana" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <TextField
          id="standard-number"
          label="KHAS Reset Sayısı"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Khas" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <TextField
          id="standard-number"
          label="Sensör Range Limit *"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
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
