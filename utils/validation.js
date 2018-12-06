import { isNaN } from 'lodash';

export const required = value => (value ? undefined : 'Không thể để trống');

export const number = value => (value && isNaN(Number(value)) ? 'Vui lòng nhập số' : undefined);

export const phoneNumber = phone =>
  (/^0(1\d{9}|9\d{8})$/.test(phone) ? undefined : 'Số điện thoại không hợp lệ, vd: 0912345678');
