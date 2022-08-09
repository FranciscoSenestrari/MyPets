import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/theme';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2e2e2',
    height: theme.HEIGHT_SCREEN / 10,
    borderRadius: 10,
    margin: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: theme.WIDTH_SCREEN / 6,
    height: theme.WIDTH_SCREEN / 6,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  info: {marginLeft: theme.WIDTH_SCREEN / 4},
  text: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    maxWidth: 100,
  },
});