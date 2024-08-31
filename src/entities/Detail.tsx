export default interface Detail {
  label: string;
  value: string | JSX.Element | number;
  isLink?: boolean;
  linkPath?: string;
}
