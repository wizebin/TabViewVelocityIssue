import * as React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text, SafeAreaView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      <SafeAreaView style={styles.container}>
        <TabView
          style={styles.tabView}
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
        <View>
          <TouchableOpacity style={styles.tab1Button} onPress={() => {this.setState({ index: 0 })}}><Text>Programmatically move to tab 1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tab2Button} onPress={() => {this.setState({ index: 1 })}}><Text>Programmatically move to tab 2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tab3Button} onPress={() => {this.setState({ index: 2 })}}><Text>Programmatically move to tab 3</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const baseTabButtonStyle = {
  padding: 10,
  margin: 5,
  borderRadius: 6,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
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
  scene: {
    flex: 1,
  },
  tabView: {
    flex: 1,
  },
  tab1Button: {
    ...baseTabButtonStyle,
    backgroundColor: '#ff4081'
  },
  tab2Button: {
    ...baseTabButtonStyle,
    backgroundColor: '#673ab7'
  },
  tab3Button: {
    ...baseTabButtonStyle,
    backgroundColor: '#00a8ff'
  },
});
