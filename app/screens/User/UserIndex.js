import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, RefreshControl } from 'react-native';
import { UserRow } from '../../components';
import { getUsers } from '../../actions/users';

const UserIndex = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { usersList, ongoingRequest: { fetchingUsers } } = useSelector(state => state.users);

  const fetchUsersIndex = () => {
    dispatch(getUsers());
  }

  useEffect(() => {
    fetchUsersIndex();
  }, []);

  return(
    fetchingUsers ? 
      <Text>Cargando...</Text>
    : 
    (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={usersList}
        refreshControl={
          <RefreshControl
            colors={['#E40046']}
            refreshing={fetchingUsers}
            onRefresh={fetchUsersIndex}
          />
        }
        renderItem={({ item, index }) => (
          <UserRow
            key={index}
            userItem={item}
            onPress={() => navigation.navigate('UserShow', { id: item.id })}
          />)}
      />
    ) 
  )
}

export default UserIndex;