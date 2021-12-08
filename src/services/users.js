import { DBconnection } from '../database'

const table = 'users'
const db = DBconnection.getConnection()

export default class UserService {
  static create(user) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (name, email, username, password) values (?, ?, ?, ?)`,
            [user.name, user.email, user.username, user.password],
            (_, { insertId, rows }) => {
              resolve(insertId)
            }
          ),
            (error) => {
              console.log('SQL ERROR:' + error)
            }
        },
        (txError) => {
          console.log(txError)
        }
      )
    )
  }

  static findOne({ username, password }) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select * from ${table} where username = ? and password = ?`,
            [username, password],
            (_, { insertId, rows }) => {
              resolve(rows._array)
            }
          ),
            (error) => {
              console.log('SQL ERROR:' + error)
            }
        },
        (txError) => {
          console.log(txError)
        }
      )
    )
  }

  static finById(userId) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select * from ${table} where id = ?`,
            [userId],
            (_, { insertId, rows }) => {
              resolve(rows._array)
            }
          ),
            (error) => {
              console.log('SQL ERROR:' + error)
            }
        },
        (txError) => {
          console.log(txError)
        }
      )
    )
  }

  static findAll() {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
            resolve(rows)
          }),
            (error) => {
              console.log('SQL ERROR: ' + error)
            }
        },
        (txError) => {
          console.log(txError)
        }
      )
    )
  }
}
