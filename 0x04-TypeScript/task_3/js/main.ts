/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(newRowID);
const updateRow: RowElement = {...row, age: 23};
console.log(updateRow);
console.log(CRUD.updateRow(newRowID, updateRow));
console.log(CRUD.deleteRow(newRowID));
