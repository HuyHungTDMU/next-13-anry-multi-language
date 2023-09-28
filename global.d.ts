// Use type safe message keys with `next-intl`
type Messages = typeof import('./messages/vn.json');
declare interface IntlMessages extends Messages {}
