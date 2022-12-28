import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minHeight: 64,
    backgroundColor: '#1f1e25',
    marginBottom: 8,
    padding: 12,
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8
  },
  checkbox: {
    flex: 1,
    marginLeft: 12,
  },
  checkboxInnerIconStyle:{
    borderWidth: 2,
    borderColor: '#5E60CE'
  },
  checkboxText: {
    color: '#fdfcfe',
    fontSize: 14
  },
  deleteButton: {
    height: 32,
    width: 32,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
})