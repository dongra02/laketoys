import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import ToyItem from './ToyItem'

// style and space out grid & paper items here.

const ToyGrid = ({ toys }) => {

  return (
    <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
      {toys.map(toy => {
        return (
          <Grid item xs={3} key={toy.id}>
            <Paper>
              <ToyItem {...toy} />
            </Paper>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ToyGrid