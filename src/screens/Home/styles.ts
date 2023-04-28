import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1
  },
  blackContainer:{
    width: '100%',
    backgroundColor: '#0D0D0D',
    paddingTop: 36,
    paddingBottom: 70
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: -27,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 54,
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 8,
    marginRight: 4,
    paddingHorizontal: 16
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20
  },
  row: {
    flexDirection: 'row'
  },
  tasksValues: {
    fontFamily: 'Inter_700Bold',
    color: '#D9D9D9',
    fontSize: 13,
    backgroundColor: '#333333',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 1000,
    marginLeft: 8
  },
  createdTasks: {
    fontFamily: 'Inter_700Bold',
    color: '#4EA8DE',
    fontSize: 14
  },
  completedTasks: {
    fontFamily: 'Inter_700Bold',
    color: '#8284FA',
    fontSize: 14
  },
  listContent:{
    paddingBottom: 48,
  },
  listEmpty: {
    alignItems: 'center',
    borderTopColor: '#333333',
    borderTopWidth: 1,
    paddingTop: 48
  },
  listEmptyImage: {
    width: 64,
    height: 64,
    marginBottom: 20
  },
  listEmptyBold: {
    fontFamily: 'Inter_700Bold',
    color: '#808080',
    fontSize: 14,
  },
  listEmptyRegular: {
    fontFamily: 'Inter_400Regular',
    color: '#808080',
    fontSize: 14
  }
});