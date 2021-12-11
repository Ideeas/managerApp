import { DBconnection } from '../database'

const table = 'projects'
const db = DBconnection.getConnection()

export default class ProjectService {
  static create(project) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (ownerId, name, status, favorite, image, owner_image) values (?, ?, ?, ?, ?, ?)`,
            [
              project.ownerId,
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

  static findFavorites(id) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select * from ${table} where ownerId = ? and favorite = ?`,
            [id, 1],
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

  static findAll(id) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(`select * from ${table} where ownerId = ?`, [id], (_, { rows }) => {
            resolve(rows._array)
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
