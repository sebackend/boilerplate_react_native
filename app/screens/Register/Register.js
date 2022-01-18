import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { MainLogo, DefaultButton, TextButton, Input } from '../../components';
import { requestSignUp } from '../../actions/auth';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [wrongFirstName, setWrongFirstName] = useState(false);
  const [wrongLastName, setWrongLastName] = useState(false);
  const [wrongMail, setWrongMail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const {
    ongoingRequest: {
      signUp
  }} = useSelector(state => state.auth);

  const handleLoginScreen = () => {
    navigation.navigate('Login');
  };

  const validateMail = (text) => {
    
    if (email.length === 0) { return false; }
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
    setEmail(text);
    return !reg.test(text);
  };

  const validatePassword = () => {
    return password !== confirmPassword;
  };

  const signUpAsync = () => {
    setWrongFirstName(firstName.length === 0)
    setWrongLastName(lastName.length === 0);
    setWrongPassword(validatePassword());
    setWrongMail(validateMail(email));

    if (wrongFirstName || wrongLastName || wrongMail || wrongPassword) {
        
    } else {
      dispatch(requestSignUp({
        user: {
          email,
          password,
          password_confirmation: confirmPassword,
          first_name: firstName,
          last_name: lastName,
        }})
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.mainContainer}
      enabled
    >
      <ScrollView>
        <SafeAreaView>
          <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
            <View style={styles.loginContainer}>
              <View style={styles.titleContainer}>
                <MainLogo extraStyle={{ width: 100, height: 100, marginBottom: 20 }} />
                <Text style={styles.titleText}>Crear cuenta</Text>
              </View>
              <View style={styles.container}>
                <Input
                  // reference={(component) => {
                  //   this.firstNameInput = component;
                  // }}
                  value={firstName}
                  onChangeText={firstName => setFirstName(firstName)}
                  //onSubmitEditing={() => this.lastNameInput.focus()}
                  blurOnSubmit={false}
                  keyboardType="default"
                  returnKeyType="next"
                  placeholder="Nombre"
                />
                <Input
                  value={lastName}
                  onChangeText={lastName => setLastName(lastName)}
                  blurOnSubmit={false}
                  keyboardType="default"
                  returnKeyType="next"
                  placeholder="Apellido"
                />
                <Input
                  value={email}
                  onChangeText={email => setEmail(email)}
                  autoCapitalize="none"
                  autoCorrect={false}
                  blurOnSubmit={false}
                  keyboardType="email-address"
                  returnKeyType="next"
                  placeholder="Email"
                />
                <Input
                  onChangeText={password => setPassword(password)}
                  returnKeyType="next"
                  autoCapitalize="none"
                  placeholder="Contraseña"
                  secureTextEntry
                />
                <Input
                  onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                  onSubmitEditing={() => null}
                  returnKeyType="next"
                  autoCapitalize="none"
                  placeholder="Confirmar contraseña"
                  secureTextEntry
                />
              </View>
              
              {wrongFirstName ? (
                <Text style={styles.alertParraf}>El Nombre es requerido</Text>
              ) : (
                null
              )}

              {wrongLastName ? (
                <Text style={styles.alertParraf}>El Apellido es requerido</Text>
              ) : (
                null
              )}

              {wrongMail ? (
                <Text style={styles.alertParraf}>El email ingresado no es válido</Text>
              ) : (
                null
              )}
              {wrongPassword ? (
                <Text style={styles.alertParraf}>Verifique que las contraseñas sean la misma</Text>
              ) : (
                <View />
              )}
              
              <View style={styles.bottom}>
                <DefaultButton
                  title={signUp ? 'Cargando...' : 'Registrar'}
                  containerStyles={{ marginTop: 2 }}
                  onPress={signUpAsync}
                  disabled={signUp}
                  textStyles={{fontSize: 18}}
                />
                <TextButton
                  title="Volver"
                  containerStyles={{ marginTop: 20 }}
                  onPress={handleLoginScreen}
                  disabled={signUp}
                  textStyles={{fontSize: 18, textAlign: 'center', }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;
