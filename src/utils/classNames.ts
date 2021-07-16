export default function classNames(
  ...args: Array<string | undefined | boolean>
): string {
  return args.filter((arg) => arg).join(" ");
}
