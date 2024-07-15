import {getFileNameAndNumber} from './utils/getFileNameAndNumber';
import {writeCsvFormatFakeData} from './fake';

const [filename, numberOfFakeData] = getFileNameAndNumber('./data/fake', 3);
const csvFilename = `${filename}-${numberOfFakeData}.csv`;
writeCsvFormatFakeData(csvFilename, numberOfFakeData)
  .then(console.log)
  .catch(console.error);