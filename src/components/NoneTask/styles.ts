import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 247,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    borderTopColor: colors.gray[400],
    borderTopWidth: 1,
  },

  image: {
    height: 56,
    width: 56,
  },

  textContainer: {
    gap: 4,
  },

  textBold: {
    fontSize: 14,
    color: colors.gray[300],
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    fontSize: 14,
    color: colors.gray[300],
    textAlign: 'center',
  },
});
