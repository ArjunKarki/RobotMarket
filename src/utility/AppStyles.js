import hp from './hp';

export default AppStyles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: 'white',
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
    elevation: 3,
  },
  header: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    paddingTop: hp.getStatusBarHeight(true) - 8,
    alignItems: 'center',
    height: 45 + hp.getStatusBarHeight(true),
    marginBottom: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
};
