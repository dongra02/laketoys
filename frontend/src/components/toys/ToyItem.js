import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import ButtonBase from '@material-ui/core/ButtonBase'

// add useStyles to update this layout as
const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 180,
    maxHeight: 220,
    overflow: 'scroll',
  },
  image: {
    width: 100,
    height: 100,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}))

const ToyItem = ({ name, description, rate, avgRating, categories, images }) => {
  const classes = useStyles()

  return (
    <ButtonBase>
      <Paper className={classes.paper}>
        <Grid item container alignItems='center' justify='space-around'>
          <Grid item>
            <div className={classes.image}>
              <img src={images[0]} alt='outdoor toy' className={classes.img}/>
            </div>
          </Grid>
          <Grid item>
            <Typography variant='h6'>
              {`$${rate}`}
            </Typography>
          </Grid>
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
          </Grid>
        </Grid>
      </Paper>
    </ButtonBase>
  )
}

export default ToyItem