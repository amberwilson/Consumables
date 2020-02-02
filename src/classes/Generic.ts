export function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

export interface GenericIdentityFnx {
  <T>(arg: T): T;
}

export function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFnx = identity;

interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentityx: GenericIdentityFn<number> = identity;

export { myIdentity, myIdentityx };
