import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  detailsView: {
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  mainContainer: {
    marginTop: 10,
    paddingHorizontal: 30
  },
  detailsText: {
    color: '$darkGray',
    paddingBottom: 8,
    fontSize: 16
  },
  bolder: {
    fontWeight: '700',
    color: '$black'
  },
  buttonsBox: {
    position: 'absolute',
    paddingHorizontal: 20,
    bottom: 20,
    width: '100%',
    zIndex: 1
  },
  editProfileButtonText: { 
    textAlign: 'center',
    color: '$primary'
  },
  editProfileButtonContainer: {
    borderWidth: 1,
    borderColor: '$primary',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  bottom: {
    height: 50,
    paddingHorizontal: 15,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 0,
  },
});

export default styles;
