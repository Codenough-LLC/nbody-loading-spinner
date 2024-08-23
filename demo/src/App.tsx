import { Box, Unstable_Grid2 as Grid } from '@mui/material'
import { JSX, useEffect, useRef } from 'react'
import DarkModeToggle from './DarkModeToggle'
import { createLoadingSpinner } from 'nbody-loading-spinner'

function App(): JSX.Element {
  const loadingRef = useRef(null)

  useEffect(() => {
    createLoadingSpinner(loadingRef.current)
  }, [])

  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid>
          <DarkModeToggle />
        </Grid>
        <Grid>
          <svg ref={loadingRef}></svg>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
