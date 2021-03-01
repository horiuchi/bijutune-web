import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { GetStaticProps } from 'next';
import { BookData, getAllPath } from '../api/paths';
import TabBar from '../components/TabBar';
import { useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';

interface HomeProps {
  data: BookData[];
}

interface DvdCardProps {
  book: BookData;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  image: {
    height: 320,
    backgroundSize: 'contain',
  },
});

export const getStaticProps: GetStaticProps = async (_) => {
  const data = await getAllPath();
  return { props: { data } };
};

const DvdCard: React.FC<DvdCardProps> = ({ book }) => {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/${book.index}/`);
  }, []);
  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia className={classes.image} image={book.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {book.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Home: React.FC<HomeProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TabBar index={0} />
      <Paper elevation={0}>
        <Typography variant="h3" gutterBottom>
          びじゅチューン DVD BOOK リスト
        </Typography>
        <Grid container spacing={2}>
          {data.map((book) => (
            <Grid item xs={4} key={book.name}>
              <DvdCard book={book} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
