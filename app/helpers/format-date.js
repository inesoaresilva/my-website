import { helper } from '@ember/component/helper';

export default helper(function formatDate(positional /*, named*/) {
  const date = positional[0];

  return new Intl.DateTimeFormat().format(date);
});
