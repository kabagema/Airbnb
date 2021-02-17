import {API, graphqlOperation} from 'aws-amplify';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {FlatList, View} from 'react-native';

import {listPosts} from '../../graphql/queries';
import Post from '../../components/Post';

const SearchResultScreen = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(graphqlOperation(listPosts));

        setPosts(postResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultScreen;
