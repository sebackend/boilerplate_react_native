import EStyleSheet from 'react-native-extended-stylesheet';
import generalStyle from '../../assets/styles/application';

const styles = {
  general: generalStyle,
  defaultButtom: EStyleSheet.create({
    buttonContainer: {
      backgroundColor: '$primary',
      paddingVertical: 10,
      marginBottom: 5,
      borderRadius: 5
    },
    buttonContainerDisabled: {
      backgroundColor: 'gray',
      paddingVertical: 10,
      marginBottom: 5,
      borderRadius: 5
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700',
    },
    icon: {
      color: '#fff',
      marginLeft: 5,
    },
    circleButton: {
      borderWidth: 0.8,
      borderColor: '$line',
      backgroundColor: '$white',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
    }
  }),
  homeButton: EStyleSheet.create({
    button: {
      minHeight: 80,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderRadius: 10,
    },
    icon: {
      color: '#fff',
      fontSize: 25,
    },
    text: {
      color: '#fff',
      fontSize: 12,
      textAlign: 'center',
    },
  }),
  external: EStyleSheet.create({
    container: {
      borderRadius: 10,
    },
    img: {
      borderRadius: 10,
      aspectRatio: 1,
    },
    text: {
      color: '$dark',
      fontSize: 12,
      alignSelf: 'flex-start',
      fontWeight: '800',
      height: 40,
      marginTop: 5,
    },
  }),
  iconButton: {
    backgroundColor: '$primary',
    width: 45,
    height: 45,
    paddingVertical: 7.5,
    paddingHorizontal: 7.5,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonicon: {
    width: 20,
    height: 20,
    textAlign: 'center',
  }
};

export default styles;
