import * as React from "react";
import Container from "@mui/material/Container";
//import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
export default function GuestFooter() {
  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)',border:1, bottom: 0}} component="footer" square variant="outlined"  >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
<BatteryChargingFullIcon>
</BatteryChargingFullIcon>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="black">
            Copyright ©2023. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}




































