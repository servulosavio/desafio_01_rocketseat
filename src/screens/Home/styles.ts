import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600],
  },

  header: {
    height: 173,
    width: '100%',
    backgroundColor: colors.gray[700],
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 110.34,
    height: 32,
  },

  form: {
    width: '100%',
    marginVertical: -27,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  input: {
    flex: 1,
    height: 54,
    backgroundColor: colors.gray[500],
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    color: colors.gray[100],
  },

  button: {
    height: 52,
    width: 52,
    borderRadius: 6,
    backgroundColor: colors.blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listContainer: {
    height: 100,
    padding: 20,
  },

  tags: {
    flexDirection: 'row',
    marginTop: 60,
    paddingHorizontal: 20,
    height: 19,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
