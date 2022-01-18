import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Keyboard,
  Modal,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { DefaultButton, TextButton, Input, MainLogo } from '../../components';
import { requestSignIn } from '../../actions/auth';

import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [recoverEmail, setRecoverEmail] = useState('')
  const {
    ongoingRequest: {
      signIn
  }} = useSelector(state => state.auth);

  const toggleModalVisible = (visible) => {
    setModalVisible(visible);
  }

  const signInAsync = async (email, password) => {
    dispatch(requestSignIn({
      user: {
        email,
        password
      }
    }));
  };

  const handlePasswordRecovery = () => {
    Alert.alert('ESTO ENVIA UN CORREO A', recoverEmail)
    // const { dispatch } = this.props;
    // dispatch(requestPasswordRecovery({ email }));
    // this.setModalVisible(false);
  }

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enable
    >
      <ScrollView>
        <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
          <View style={styles.loginContainer}>
            <View style={styles.titleContainer}>
              <MainLogo extraStyle={{ width: 100, height: 100, marginBottom: 20 }} />
              <Text style={styles.titleText}>Bienvenido</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.formContainer}>
                <Input
                  value={email}
                  onChangeText={email => setEmail(email)}
                  autoCapitalize="none"
                  autoCorrect={false}
                  blurOnSubmit={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                  placeholderText="example@email.com"
                />

                <Input
                  onSubmitEditing={() => signInAsync(email, password)}
                  onChangeText={password => setPassword(password)}
                  returnKeyType="go"
                  placeholderText="**********"
                  secureTextEntry
                />
                <View style={styles.containerButtons}>
                  <DefaultButton
                    title={signIn ? 'Cargando...' : 'Iniciar Sesión'}
                    containerStyles={styles.loginButton}
                    onPress={() => signInAsync(email, password)}
                    disabled={signIn}
                    textStyles={{fontSize: 18}}
                  />
                </View>
                <View style={{ flex: 1, marginTop: 20, alignItems:'center' }}>
                  <TextButton
                    title="¿Olvidaste tu contraseña?"
                    textStyles={styles.forgetButtonText}
                    onPress={() => toggleModalVisible(true)}
                    disabled={signIn}
                  />

                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => toggleModalVisible(false)}
                  >
                    <KeyboardAvoidingView behavior="padding" style={styles.modalContainer}>
                      <TouchableWithoutFeedback accessible={false} onPress={() => Keyboard.dismiss()}>
                        <View>
                          <TouchableOpacity
                            style={styles.buttonIcon}
                            onPress={() => toggleModalVisible(false)}
                          >
                            <Icon
                              name={styles.iconName}
                              size={styles.iconSize}
                              color={styles.iconColor}
                            />
                          </TouchableOpacity>
                          <Text style={styles.modalTitle}>Recuperar contraseña</Text>
                          <Text style={styles.modalText}>
                            Ingresa tu correo electrónico para que te enviemos las instrucciones para
                            recuperar tu contraseña
                          </Text>
                          <Input
                            value={recoverEmail}
                            onChangeText={email => setRecoverEmail(email)}
                            onSubmitEditing={handlePasswordRecovery}
                            returnKeyType="go"
                            keyboardType="email-address"
                            placeholder="Correo electrónico"
                            autoCapitalize="none"
                          />
                          <DefaultButton
                            title="Enviar"
                            onPress={handlePasswordRecovery}
                          />
                        </View>
                      </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                  </Modal>
                </View>
                
                <View style={{ marginTop: 30, borderBottomWidth: 2, borderBottomColor: '#ccc' }}></View>
                
                <View style={styles.bottomContainer}>
                  <Text style={[styles.forgetButtonText, { alignSelf: 'center' }]}>¿No tienes cuenta?</Text>
                  <DefaultButton
                    title="Registrarse"
                    containerStyles={styles.registerButton}
                    onPress={() => navigation.navigate('Register')}
                    textStyles={{fontSize: 18}}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
