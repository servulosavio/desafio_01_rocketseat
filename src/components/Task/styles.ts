import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[500],
    height: 64,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  checkbox: {
    width: 17,
    height: 17,
    borderRadius: 100,
    marginEnd: 7,
  },

  buttonDelete: {
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 14,
    lineHeight: 19.6,
  },
});
