import { Maybe } from "@/types";


export function hasValue<T>(value: Maybe<T> | undefined): value is T {
  if (value === null) {
    return false;
  }

  if (value === undefined) {
    return false;
  }

  return true;
}
