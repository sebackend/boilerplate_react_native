import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  content: {
    alignItems: "flex-start",
    justifyContent: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3a3a3a"
  },
  subtitle: {
    color: "#666",
    fontSize: 16,
    marginTop: 2
  },
  separator: {
    backgroundColor: "#ececec",
    height: 1
  },
  right: {
    alignItems: "flex-end",
    flex: 1
  }
});

export default styles;