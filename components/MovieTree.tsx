import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { MouseEvent, useCallback } from 'react';
import { BookData } from '../api/paths';

interface MovieTreeProps {
  book?: BookData;
  current: string;
}

interface NextLinkProps {
  href: string;
}

const useStyles = makeStyles({
  root: {
    marginBottom: '0.5rem',
  },
});

const NextLink: React.FC<NextLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      router.push(href);
    },
    [href]
  );
  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

const MovieTree: React.FC<MovieTreeProps> = ({ book, current }) => {
  const classes = useStyles();
  const links = [
    <NextLink key="root" href="/">
      びじゅチューン
    </NextLink>,
  ];
  if (book) {
    links.push(
      <NextLink key={book.name} href={`/${book.index}/`}>
        {book.name}
      </NextLink>
    );
  }
  links.push(
    <Typography key={current} color="textPrimary">
      {current}
    </Typography>
  );
  return <Breadcrumbs className={classes.root}>{links}</Breadcrumbs>;
};

export default MovieTree;
