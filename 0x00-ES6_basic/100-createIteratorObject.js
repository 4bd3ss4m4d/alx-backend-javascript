/* eslint-disable no-plusplus */

export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let currentDepartmentIndex = 0;
      let currentEmployeeIndex = 0;

      return {
        next() {
          while (
            currentDepartmentIndex < Object.values(report.allEmployees).length
          ) {
            const department = Object.values(report.allEmployees)[
              currentDepartmentIndex
            ];

            if (currentEmployeeIndex < department.length) {
              const employee = department[currentEmployeeIndex++];
              return { value: employee, done: false };
            }

            currentDepartmentIndex++;
            currentEmployeeIndex = 0;
          }

          return { done: true };
        },
      };
    },
  };
}
