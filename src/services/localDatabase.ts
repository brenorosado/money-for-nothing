import {openDatabase} from 'react-native-sqlite-storage';

export const getDBConnection = async () => {
  return await openDatabase({
    name: 'eletromarquez_inpections_and_observations.db',
    location: 'default',
  });
};
