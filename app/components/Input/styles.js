import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewContainerWithButton: {
    height: 45,
    maxHeight: 45,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  input: {
    height: 50,
    minWidth: '100%',
    backgroundColor: '$white',
    marginBottom: 10,
    padding: 10,
    color: '$gray',
    borderTopColor: '$line',
    borderLeftColor: '$line',
    borderRightColor: '$line',
    borderBottomColor: '$line',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
  '@media ios': {
    submitDefault: 'ios-',
  },
  '@media android': {
    submitDefault: 'md-',
  },
  containerInputWithIcon: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  inputWithIcon: {
    flex: 1,
    height: 42,
    minWidth: '80%',
    backgroundColor: '#F5F5F5',
    color: '#6D6E71',
    paddingHorizontal: 10,
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: '#fff',
    borderRadius: 5
  },
  iconInsideInput: {
    position: 'absolute',
    right: 10
  },
  iconButton: {
    width: 45,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
