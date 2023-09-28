export default class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;
  }

  get sqrt() {
    return this._sqrt;
  }

  evacuationWarningMessage() {
    throw new Error('Class extendingBuilding must override evacuationWarningMessage');
  }
}
