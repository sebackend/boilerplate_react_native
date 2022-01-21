import React from 'react';
import { View, Text } from 'react-native';
import { requestSignOut } from '../../actions/auth';
import { DefaultButton, TextButton } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  
  const signOut = () => {
    dispatch(requestSignOut());
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.detailsView}>
        <Text style={styles.detailsText}>Mi cuenta</Text>
      </View>
      <View style={styles.detailsView}>
        <Text style={styles.detailsText}>EMAIL</Text>
        <Text style={styles.detailsText}>{user?.email}</Text>
      </View>
      <View style={styles.detailsView}>
        <Text style={styles.detailsText}>NOMBRE</Text>
        <Text style={styles.detailsText}>{`${user?.first_name} ${user?.last_name}`}</Text>
      </View>

      <View style={styles.buttonsBox}>
        <TextButton
          title="Editar Perfil"
          textStyles={styles.editProfileButtonText}
          containerStyles={styles.editProfileButtonContainer}
          onPress={() => null}
        />
        <TextButton
          title="Mis Preferencias"
          textStyles={styles.editProfileButtonText}
          containerStyles={styles.editProfileButtonContainer}
          onPress={() => null}
        />
        <DefaultButton  
          title={(false ? 'Cargando...' : 'Cerrar Sesión')}
          onPress={signOut}
        />
      </View>
    </View>
  )
}

export default ProfileScreen;