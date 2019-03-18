import * as React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <ScrollView>
      {['star', 'square', 'circle', 'bubble', 'octogon', 'hexagon', '29gon', 'line', 'dot', 'parabola'].map(name => (
        <View key={name} style={styles.nameCard}><Text>{name}</Text></View>
      ))}
    </ScrollView>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    <ScrollView>
      {['bob', 'jim', 'jam', 'job', 'bill', 'fred', 'jerry', 'greg', 'alex', 'steve', 'chuck'].map(name => (
        <View key={name} style={styles.nameCard}><Text>{name}</Text></View>
      ))}
    </ScrollView>
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#00a8ff' }]}>
    <ScrollView>
      {['jan', 'becky', 'agatha', 'martha', 'mary', 'jane', 'beth', 'doris', 'cathy', 'sally'].map(name => (
        <View key={name} style={styles.nameCard}><Text>{name}</Text></View>
      ))}
    </ScrollView>
  </View>
);

export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  nameCard: {
    padding: 30,
    backgroundColor: '#ffffff',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});
