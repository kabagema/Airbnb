import {Auth} from 'aws-amplify';
import React from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';

const ProfileScreen = () => {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={logout} style={styles.PressContainer}>
        <Text style={styles.submitText}>Log out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  PressContainer: {
    width: '80%',
    height: 50,
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    bottom: 20,
  },
  submitText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
