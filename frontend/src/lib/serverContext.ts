import { cache } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default <T>(defaultValue: T): [() => T, (v: T) => void] => {
  const getRef = cache(() => ({ current: defaultValue }));

  const getValue = (): T => getRef().current;

  const setValue = (value: T) => {
    getRef().current = value;
  };

  return [getValue, setValue];
};
