import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useCallback } from 'react';
import {
  BookData,
  getAllPath,
  getMovieUrl,
  MovieGroup,
} from '../../../api/paths';
import MovieTree from '../../../components/MovieTree';
import TitleBar from '../../../components/TitleBar';

interface MovieProps {
  book: BookData;
  movie: MovieGroup;
}

interface MovieCardProps {
  url: string;
  type: string;
  image?: string;
}

interface YouTubeCardProps {
  videoId: string;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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

export const getStaticPaths: GetStaticPaths = async (_) => {
  const data = await getAllPath();
  const paths = data.flatMap((book) =>
    book.movies.map((movie) => `/${book.index}/${movie.index}`)
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getAllPath();
  const bookIndex = parseInt(params?.book?.toString() ?? '', 10);
  const movieIndex = parseInt(params?.movie?.toString() ?? '', 10);
  return {
    props: { book: data[bookIndex], movie: data[bookIndex].movies[movieIndex] },
  };
};

const MovieCard: React.FC<MovieCardProps> = ({ url, type, image }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        className={classes.image}
        component="video"
        src={url}
        poster={image}
        controls
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {type}
        </Typography>
      </CardContent>
    </Card>
  );
};

const YouTubeCard: React.FC<YouTubeCardProps> = ({ videoId }) => {
  const classes = useStyles();
  const handleClick = useCallback(() => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }, []);
  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.image}
          component="img"
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            YouTube
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Movie: React.FC<MovieProps> = ({ book, movie }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TitleBar title={movie.name} />
      <MovieTree book={book} current={movie.name} />
      <Paper elevation={0}>
        <Grid container spacing={2}>
          <Grid item>
            <MovieCard
              url={getMovieUrl(movie.main.path)}
              type="うた"
              image={movie.image}
            />
          </Grid>
          <Grid item>
            <MovieCard
              url={getMovieUrl(movie.explanatory.path)}
              type="解説"
              image="/explanatory.jpg"
            />
          </Grid>
          <Grid item>
            <MovieCard
              url={getMovieUrl(movie.karaoke.path)}
              type="カラオケ"
              image={movie.image}
            />
          </Grid>
          <Grid item>
            <YouTubeCard videoId={movie.youtubeId} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Movie;
