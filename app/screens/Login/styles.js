import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '$white',
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    paddingHorizontal: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0,
    paddingHorizontal: 20,
  },
  bottomContainer: {
    marginTop: 30,
  },
  titleBottomText: {
    fontSize: 18,
    textAlign: 'center',
  },
  registerButton: {
    marginTop: 10
  },
  forgetButtonText: { 
    textAlign: 'right',
    color: '$primary'
  },
  // MODAL
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '$white',
  },
  modalTitle: {
    fontSize: 21,
    color: '$dark',
    marginBottom: 20,
  },
  modalText: {
    color: '$dark',
    marginBottom: 20,
    textAlign: 'justify',
  },
  buttonIcon: {
    padding: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
  },
  iconColor: EStyleSheet.value('$primary'),
  '@media ios': {
    iconSize: 31,
    iconName: 'x',
  },
  '@media android': {
    iconSize: 24,
    iconName: 'x',
  },
});

export default styles;
