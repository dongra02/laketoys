import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// add useStyles to update this layout as

const ToyItem = ({ name, description, rate, avgRating, categories }) => {

  return (
    <Grid item container direction='column' alignItems='center'>
      <Grid item>
        <Typography variant='h5' align='center'>
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          {avgRating}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body2'>
          {description}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ToyItem