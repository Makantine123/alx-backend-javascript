function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
console.log('|-+--------------------------------------------+-|');
var students = new StudentClass('Nkazi', 'Nzimulo');
console.log(students);
console.log(students.displayName());
console.log(students.workOnHomework());
console.log('|-+--------------------------------------------+-|');
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
console.log('|-+--------------------------------------------+-|');
var names = printTeacher('Siphelele', 'Makhathini');
console.log(names);
console.log('|-+--------------------------------------------+-|');
