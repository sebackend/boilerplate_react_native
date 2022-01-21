import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const UserRow = ({ userItem, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.container}
    >
      <View>
        <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{userItem?.attributes?.first_name} {userItem?.attributes?.last_name}</Text>
        <Text style={styles.subtitle}>{userItem?.attributes?.email}</Text>
      </View>
      <View style={styles.right}>
        <Icon name='ios-arrow-forward' color="#666" size={20} />
      </View>
      
    </TouchableOpacity>
  )
};

export default UserRow;