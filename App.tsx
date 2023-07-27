/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const [todo, setTodo] = React.useState([{title: 'test', completed: false}]);
  const [text, setText] = React.useState('');

  const handleAdd = () => {
    let temp = todo;
    let newTodo = {
      title: text,
      completed: false,
    };
    console.log(temp);
    temp.push(newTodo);
    setTodo(temp);
  };

  console.log(todo);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{flex: 1}}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={val => setText(val)}
          />
          <Pressable onPress={handleAdd} style={buttonStyles.button}>
            <Text style={buttonStyles.text}>Add</Text>
          </Pressable>
        </View>
        <View>
          <FlatList
            data={todo}
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <CheckBox value={item.completed} />
                  <Text style={{paddingHorizontal: 10}}>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: '#949494',
    borderWidth: 1,
    width: '80%',
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    margingVertical: 10,
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    padding: 8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
// theresa.james@supercoder.co
