import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BookData, getAllPath, MovieGroup } from '../../api/paths';
import TabBar from '../../components/TabBar';
import { useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';
import MovieTree from '../../components/MovieTree';

interface BookProps {
  book: BookData;
}

interface MovieCardProps {
  bookIndex: number;
  movie: MovieGroup;
}

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
});

export const getStaticPaths: GetStaticPaths = async (_) => {
  const data = await getAllPath();
  const paths = data.map((_, i) => `/${i}/`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getAllPath();
  const index = parseInt(params!.book!.toString(), 10);
  return { props: { book: data[index] } };
};

const MovieCard: React.FC<MovieCardProps> = ({ bookIndex, movie }) => {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/${bookIndex}/${movie.index}/`);
  }, []);
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleClick}>
        <CardMedia className={classes.image} image={movie.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Book: React.FC<BookProps> = ({ book }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TabBar index={0} />
      <Paper elevation={0}>
        <MovieTree current={book.name} />
        <Typography variant="h3" gutterBottom>
          {book.name}
        </Typography>
        <Grid container spacing={2}>
          {book.movies.map(m => (
            <Grid item key={m.name}>
              <MovieCard bookIndex={book.index} movie={m} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default Book;
