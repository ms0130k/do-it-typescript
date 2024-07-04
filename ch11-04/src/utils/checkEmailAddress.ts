import {Success} from '../classes/Success';
import {Failure} from '../classes/Failure';

export const checkEmailAddress = ({email}: { email?: string }) => {
  const re = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return re.test(email) ? new Success(email) : new Failure(['invalid email address']);
};
console.log(checkEmailAddress({}));
console.log(checkEmailAddress({email: 'ms@naver.com'}));
