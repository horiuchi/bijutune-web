import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback } from 'react';
import MovieTree from '../components/MovieTree';
import TitleBar from '../components/TitleBar';
import { YOUTUBE_VIDEO_IDS } from '../utils/const';

export const UnrecordedTitle = '未収録曲';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    width: 300,
  },
  image: {
    width: 300,
    height: 160,
    backgroundSize: 'contain',
  },
  youtube: {
    width: 300,
    height: 160,
    backgroundSize: 'contain',
    pointerEvents: 'none',
  },
});

interface YouTubeCardProps {
  videoId: string;
  name: string;
}

const YouTubeCard: React.FC<YouTubeCardProps> = ({ videoId, name }) => {
  const classes = useStyles();
  const handleClick = useCallback(() => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }, [videoId]);
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.image}
          component="img"
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Unrecorded: React.FC = () => {
  const classes = useStyles();
  const youtubes = YOUTUBE_VIDEO_IDS[YOUTUBE_VIDEO_IDS.length - 1];
  return (
    <div className={classes.root}>
      <TitleBar title={UnrecordedTitle} />
      <MovieTree current={UnrecordedTitle} />
      <Paper elevation={0}>
        <Grid container spacing={2}>
          {youtubes.map((y) => (
            <Grid item key={y.id}>
              <YouTubeCard videoId={y.id} name={y.name} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default Unrecorded;
