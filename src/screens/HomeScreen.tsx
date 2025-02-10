import { useContext, useEffect } from 'react';

import { HomeScreenStyles } from './HomeScreen.styles';
import { FeedContext } from '../contexts/FeedContext';
import { UserContext } from '../contexts/UserContext';
import { Post } from '../types';
import FeedPost from '../components/FeedPost';

const HomeScreen: React.FC = () => {
  const { feed, getFeed } = useContext(FeedContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <HomeScreenStyles.Container>
      {feed.map((post: Post) => (
        <FeedPost user={user} key={post.id} post={post} />
      ))}
    </HomeScreenStyles.Container>
  );
};

export default HomeScreen;