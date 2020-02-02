import BaseStorage, { MyConsumablesStorage } from "./BaseStorage";
import MyConsumables from "../MyConsumables";

export default class LocalStorage extends BaseStorage {
  save(myConsumables: MyConsumables): void {
    localStorage.setItem(this._key, myConsumables.toJson());
  }
  get(): MyConsumablesStorage {
    const data = localStorage.getItem(this._key);

    if (!data) {
      return { consumables: [] };
    }
console.log(JSON.parse(data));
    return JSON.parse(data);
  }
  delete(): void {
    localStorage.removeItem(this._key);
  }
}
