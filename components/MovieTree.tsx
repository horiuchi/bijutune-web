import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
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
  const links = [<NextLink key='root' href="/">びじゅチューン</NextLink>];
  if (book) {
    links.push(<NextLink key={book.name} href={`/${book.index}/`}>{book.name}</NextLink>);
  }
  links.push(<Typography key={current} color="textPrimary">{current}</Typography>);
  return <Breadcrumbs>{links}</Breadcrumbs>;
};

export default MovieTree;
