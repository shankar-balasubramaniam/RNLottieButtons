/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, createRef} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LottieView from 'lottie-react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // buttons
  let play_btn = createRef();
  let switch_btn = createRef();
  let like_btn = createRef();
  let submit_btn = createRef();

  const [switchState, setSwitchState] = useState(false);
  const [liked, setLiked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loop, setLoop] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.button}>
        <TouchableWithoutFeedback
          onPress={() => {
            play_btn.current.play();
          }}>
          <LottieView
            ref={play_btn}
            source={require('./assets/play.json')}
            loop={false}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.button}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (switchState) {
              switch_btn.current.play(105, 210);
            } else {
              switch_btn.current.play(0, 105);
            }
            setSwitchState(!switchState);
          }}>
          <LottieView
            ref={switch_btn}
            source={require('./assets/switch.json')}
            loop={false}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.button}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (liked) {
              like_btn.current.reset();
            } else {
              like_btn.current.play(25, 90);
            }
            setLiked(!liked);
          }}>
          <LottieView
            ref={like_btn}
            source={require('./assets/like.json')}
            speed={2}
            loop={false}
          />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 400,
    height: 150,
  },
});

export default App;
