import moment from 'moment';

export { request } from './request';

export const formatMoney = (money) => {
  if (!money) {
    return '';
  }
  const result = parseFloat(money)
    .toFixed(0)
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  return `${result} ₫`;
};

export const formatDate = (date, formatStr = 'hh:mm A MM/DD/YYYY') => {
  if (!date) {
    return null;
  }

  return moment(date).format(formatStr);
};

export const truncateText = (text, len) => `${text.substring(0, Math.min(len, text.length))}...`;
