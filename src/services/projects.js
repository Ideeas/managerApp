import { DBconnection } from '../database'

const table = 'projects'
const db = DBconnection.getConnection()

export default class ProjectService {
  static create(project) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (ownerID, name, status, favorite, image, owner_image) values (?, ?, ?, ?)`,
            [
              project.ownerID,
              project.name,
              project.status,
              project.favorite,
              project.image,
              project.owner_image,
            ],
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

  static findFavorites() {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select * from ${table} where favorite = ?`,
            [true],
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
