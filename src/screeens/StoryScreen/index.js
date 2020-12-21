import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import styles from './styles';
import StoriesData from './../../data/stories';
import {useState} from 'react';
import {useEffect} from 'react';
import UserStoryPreview from './../../components/UserStoryPreview';
const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const route = useRoute();
  const userId = route.params.userId;

  const navigation = useNavigation();

  useEffect(() => {
    const userStory = StoriesData.find((data) => data.user.id === userId);

    setUserStories(userStory);
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {
    if (!userStories) {
      return;
    }
    if (activeStoryIndex < 0) {
      setActiveStoryIndex(0);
      return;
    }

    if (activeStoryIndex >= userStories.stories.length) {
      setActiveStoryIndex(userStories.stories.length - 1);
      return;
    }
  }, [activeStoryIndex]);

  const handleStoryPress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  const navigateToNextUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };
  const navigateToPrevUser = () => {
    if (userId > 0) {
      navigation.navigate('Home');
    }
    navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  if (!userStories) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="grey" />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handleStoryPress}>
        <ImageBackground
          source={{uri: activeStory.imageUri}}
          style={styles.image}>
          <UserStoryPreview user={userStories} />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
