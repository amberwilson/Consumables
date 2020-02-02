import Consumable from "./Consumable";
import BaseStorage from "./storage/BaseStorage";

class MyConsumables {
  protected _storage: BaseStorage;
  protected _consumables: Consumable[] = [];

  constructor(storage: BaseStorage) {
    this._storage = storage;
  }

  get consumables(): Consumable[] {
    return this._consumables;
  }

  setConsumables(consumables: Consumable[]): void {
    this._consumables = consumables;
  }
  addConsumable(consumable: Consumable): void {
    this.consumables.push(consumable);
  }
  removeConsumable(consumable: Consumable): void {
    this.consumables.filter(c => c.uid !== consumable.uid);
  }

  toJSON(): string {
    return JSON.stringify({ consumables: this.consumables });
  }

  load(): void {
    const data = this._storage.get();
    this._consumables = data.consumables;
  }
  save(): void {
    this._storage.save(this);
  }
}

export default MyConsumables;
