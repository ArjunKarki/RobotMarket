import moment from 'moment';
import {Alert, Dimensions, Platform, StatusBar} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default hp = {
  width,
  height,
  getStatusBarHeight: skipAndroid => {
    return Platform.select({
      ios: isIphoneX ? 44 : 20,
      android: skipAndroid ? 0 : StatusBar.currentHeight,
      default: 0,
    });
  },
  formatDate: (date = new Date()) => moment(date).format('DD-MM-YYYY'),
  formatMoney: x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
};
