// tslint:disable-next-line:no-empty-interface
export default interface Result<T> {
  code: number;
  data?: T;
  message?: string;
}
