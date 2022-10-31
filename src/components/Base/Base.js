import { Grid } from "@mui/material"
import Box from '@mui/material/Box';
export default function Base() {
  return (
    <>
      <Grid container>
        <Grid item>
          <Box sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>Item 1</Box>
        </Grid>







      </Grid>

    </>
  )
}
