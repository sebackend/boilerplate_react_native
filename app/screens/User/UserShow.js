import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getSingleUser, resetShowedUser } from '../../actions/users';

const UserShow = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { currentUser, ongoingRequest: { fetchingSingleUser } } = useSelector(state => state.users);
  const { id } = route.params;

  useEffect(() => {
    dispatch(getSingleUser({ userId: id }));
  }, []);

  // Limpiar el currentUser
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      dispatch(resetShowedUser());
    });

    return unsubscribe
  }, [navigation]);

  return(
    fetchingSingleUser || currentUser.id === 0 ? <Text>Cargando...</Text> : (
      <View style={{ flex: 1, paddingTop: 25, flexDirection: 'column' }}>
        <View style={{ alignContent: 'center' }}>
          <Image source={{ uri: 'https://i.pravatar.cc/200' }} style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            alignSelf: 'center'
          }} />
        </View>

        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 20, fontWeight: '600' }}>
          {currentUser?.attributes?.first_name} {currentUser?.attributes?.last_name}
        </Text>

        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>
          {currentUser?.attributes?.email}
        </Text>
      </View>
    )
  )
}

export default UserShow;