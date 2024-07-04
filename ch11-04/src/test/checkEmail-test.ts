import {checkPassword} from '../checkPassword';
import {checkEmail} from '../checkEmail';

[
  {email: 'abdc@efg.com'},
  {email: 'abadf'}
].forEach((target, index) => {
  const [value, failureReason] = checkEmail(target);
  if (failureReason) {
    console.log(index, 'validation fail.', JSON.stringify(failureReason));
  } else {
    console.log(index, 'validation ok.', JSON.stringify(value));
  }
});