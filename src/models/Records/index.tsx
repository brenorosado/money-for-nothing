import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('mondey_for_nothing_db', "1");

export type IRecord = {
  localId: number;
  value: number;
  type: "INCOME" | "EXPENSE";
  category: string;
  description: string;
  localCreatedAt: string;
};

const createTable = async () => {
  const query =
    'CREATE TABLE IF NOT EXISTS records (localId INTEGER PRIMARY KEY AUTOINCREMENT, value INTEGER, type TEXT, category TEXT, description TEXT, localCreatedAt TEXT);';

  return new Promise((resolve, reject) => {
    return db.transaction(tx => {
      tx.executeSql(
        query,
        [],
        (transaction, result) => {
          console.log("Records table created successfully: ", result);
          return resolve(true);
        },
        (error) => {
          console.log("Records table creation failed: ", error);
          resolve(false);
          return false;
        }
      );
    });
  })
  
};

const dropTable = async () => {
  const query = 'DROP TABLE records;';

  return new Promise((resolve, reject) => {
    return db.transaction(tx => {
      tx.executeSql(
        query,
        [],
        (transaction, result) => {
          console.log("Records table dropped successfully: ", result);
          return resolve(true);
        },
        (error) => {
          console.log("Records table dropping failed: ", error);
          resolve(false);
          return false;
        }
      );
    });
  })
  
};

const create = async ({ value, type, category, description }: Omit<IRecord, "localId">) => {
  const query = `
    INSERT INTO records (
      value,
      type,
      category,
      description,
      localCreatedAt
    ) values (?, ?, ?, ?, ?);`;
  
  return new Promise((resolve, reject) => {
    return db.transaction(tx => {
      tx.executeSql(
        query,
        [ value, type, category, description || "" , new Date().toISOString()],
        (transaction, result) => {
          const { insertId } = result;
          console.log('Create record success: ', result);
          resolve(insertId);
          return true;
        },
        (error) => {
          console.log("Create record error: ", error);
          reject(error);
          return false;
        },
      );
    });
  });
};

const getRecordList: () => Promise<IRecord[]> = async () => {
  const query = `SELECT * FROM records;`;

  return new Promise((resolve, reject) => {
    return db.transaction(tx => {
      tx.executeSql(
        query,
        [],
        (transaction, result) => {
          console.log('Get records list result: ', result);
          const { _array } = result.rows;
          return resolve(_array);
        },
        (error) => {
          console.log("Get records list error: ", error);
          reject(error);
          return false;
        },
      );
    });
  });
}

export const Record = {
  createTable,
  dropTable,
  create,
  getRecordList,
};
