import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface LinkTabProps {
  key: string;
  label: string;
  href?: string;
}

const LinkTab: React.FC<LinkTabProps> = (props) => {
  return <Tab component="a" disabled={props.href === undefined} {...props} />;
};

export interface TabBarProps {
  index: number;
}

const TabContents = [
  { label: 'びじゅチューン', href: '/' },
  { label: 'お気に入り', href: '/favorite' },
  { label: 'プレイリスト', href: '/playlist' },
];

const TabBar: React.FC<TabBarProps> = ({ index }) => {
  return (
    <AppBar position="static">
      <Tabs value={index} centered>
        {TabContents.map(({ label, href }, i) => (
          <LinkTab
            key={href}
            label={label}
            href={index !== i ? href : undefined}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default TabBar;
