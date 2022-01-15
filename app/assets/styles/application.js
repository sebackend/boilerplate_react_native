import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $backgroundMyColor: 'transparent',
  $white: '#fff',
  $backgroundColor: '#FFFFFF',
  $cardBackground: '#f0f1f3',
  $inputBackground: '#EFEFEF',
  $primary: '#71a7f7',
  $primaryDark: '#243764',
  $primaryLight: '#71a7f7',
  $secondary: '#f7931e',
  $tertiary: '#31ca7b',
  $pink: '#f7586f',
  $orange: '#f66232',
  $lightBlue: '#49c5d4',
  $dark: '#424242',
  $gray: '#6c6d6d',
  $lightGray: '#999999',
  $line: '#D8D8D8',
  $black: '#303030',
  $darkGray: '#727272',
  $mainBackground: '#F4F4F4',
  $iconColor: '#6D6E71',
  $red: '#D8622A',
  $black: '#000',
  $justGray: '#F5F5F5',
});

const generalStyles = EStyleSheet.create({
  containerFull: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '$white'
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '$white'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$white'
  },
  lineThrough: {
    textDecorationLine: 'line-through'
  },
  textBold: {
    fontSize: 16,
    color: '$black',
    fontWeight: 'bold',
  },
  textBorderedButtonContainer: {
    borderWidth: 1,
    borderColor: '$primary',
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  textBorderedButtonText: {
    textAlign: 'center',
    color: '$primary',
    fontWeight: '700',
  },
  bannerText: {
    backgroundColor: 'white',
    opacity: 0.8,
    marginLeft: 20,
    padding: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '$primary'
  }
});

export default generalStyles;
