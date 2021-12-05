import * as SQLite from 'expo-sqlite'

export const DBconnection = {
  getConnection: () => SQLite.openDatabase('manager.db'),
}
