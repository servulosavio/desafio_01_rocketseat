import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  numberContainer: {
    backgroundColor: colors.gray[400],
    minWidth: 24,
    height: 19,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },

  number: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.gray[200],
  },
});
