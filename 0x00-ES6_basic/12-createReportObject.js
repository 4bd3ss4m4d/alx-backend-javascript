export default function createReportObject(employeesList) {
  return {
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
    allEmployees: {
      ...employeesList,
    },
  };
}
