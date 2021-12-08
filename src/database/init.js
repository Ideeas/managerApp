import { DBconnection } from './'

let db = null

export default class DatabaseInit {
  constructor() {
    db = DBconnection.getConnection()
    db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
      console.log('Foreign keys turned on')
    )
    this._InitDb()
  }

  _InitDb() {
    const sql = [
      `create table if not exists users (
            id integer primary key autoincrement,
            name varchar(50),
            email varchar(100),
            username varchar(50),
            password varchar(50));`,

      `create table if not exists projects(
            id integer primary key autoincrement,
            ownerId int,
            name varchar(255),
            status bit not null,
            favorite bit default 0,
            image varchar(255),
            owner_image varchar(255),
            foreign key (ownerID) references users(id));`,
    ]

    db.transaction(
      (tx) => {
        for (const table of sql) {
          tx.executeSql(table)
        }
      },
      (error) => {
        console.log('Error on: ' + JSON.stringify(error))
      },
      () => {
        console.log('SUCCESS')
      }
    )
  }
}
