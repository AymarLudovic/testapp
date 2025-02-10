import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import HomeHeader from '../components/HomeHeader';
import PostList from '../components/PostList';
import StoryList from '../components/StoryList';

import { AuthContext } from '../contexts/AuthContext';
import { PostContext } from '../contexts/PostContext';
import { StoryContext } from '../contexts/StoryContext';
import { UserContext } from '../contexts/UserContext';

import {
  HomeHeaderProps,
  Post,
  PostContextProps,
  Story,
  StoryContextProps,
  UserContextProps,
} from '../types';

import HomeStyles from './Home.styles';

const Home = ({ navigation }: HomeHeaderProps) => {
  const { user } = useContext(UserContext);
  const { posts } = useContext(PostContext);
  const { stories } = useContext(StoryContext);

  return (
    <View style={HomeStyles.container}>
      <HomeHeader navigation={navigation} user={user} />
      <StoryList stories={stories} />
      <PostList posts={posts} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;