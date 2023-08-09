import {getDBConnection} from '../../services/localDatabase';

type IRecord = {
  localId: number;
  value: number;
  type: string; // INCOME / EXPENSE
  category: string;
  description: string;
};

const createTable = async () => {
  const db = await getDBConnection();

  const query =
    'CREATE TABLE IF NOT EXISTS records (localId INTEGER PRIMARY KEY AUTOINCREMENT, value INTEGER, type TEXT, category TEXT, description TEXT);';

  db.transaction(tx => {
    tx.executeSql(query);
  });
};

const dropTable = async () => {
  const db = await getDBConnection();

  db.transaction(tx => {
    tx.executeSql('DROP TABLE records;');
  });
};

const create = async (obj: Omit<IRecord, "localId">) => {
  const db = await getDBConnection();

  const query = 'INSERT INTO records (value, type, category, description) values (?, ?, ?, ?);';
  const {
    value,
    type,
    category,
    description
  } = obj;
  return db.executeSql(query, [
    value,
    type,
    category,
    description
  ]);
};

export const Record = {
  createTable,
  dropTable,
  create,
};
