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
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
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
  titleText: {
    fontSize: 24,
    textAlign: 'center',
  },
  modalText: {
    color: '$dark',
    marginBottom: 20,
    textAlign: 'justify',
  },
  icon: {
    padding: 10,
    alignSelf: 'flex-end',
  },
  alertParraf: {
    fontSize: 16,
    color: '$red',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  iconColor: EStyleSheet.value('$primary'),
  '@media ios': {
    iconSize: 62,
    iconName: 'x',
  },
  '@media android': {
    iconSize: 48,
    iconName: 'x',
  },
});

export default styles;
