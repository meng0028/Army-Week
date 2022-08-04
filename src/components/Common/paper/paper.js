import * as React from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import PaperContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export default function Variants() {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 800,
          height: 400,
        },
      }}
    >
      <Paper variant="outlined">
        <PaperContent>
          <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
            Recent News
          </Typography>
        </PaperContent>
      </Paper>
      <Paper variant="outlined">
        <PaperContent>
          <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
            Recent Proposals
          </Typography>
        </PaperContent>
      </Paper>
    </Box>
  )
}
