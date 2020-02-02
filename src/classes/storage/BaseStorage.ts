import Consumable from "../Consumable";
import MyConsumables from "../MyConsumables";

export interface MyConsumablesStorage {
  consumables: Consumable[];
}

abstract class BaseStorage {
  protected _key: string;
  abstract save(data: MyConsumables): void;
  abstract get(): MyConsumablesStorage;
  abstract delete(): void;
  constructor(key: string) {
    this._key = key;
  }
}

export default BaseStorage;
