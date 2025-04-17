/**
 * Employee and Manager Classes with Salary Calculation
 * Write a JavaScript program that creates a class called 'Employee' with properties for name and salary.
 * Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department.
 * Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.
 */


class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  annualSalary() {
    // 365 days / 5 day a week => 73 weeks
    // salary($ per hour) * 40 hours per week 
    // per week total time 73 weeks
    return this.salary * 40 * 73;
  }
}

class Manager extends Employee {
  constructor(name, salary, department){
    super(name, salary);
    this.department = department;
  }

  annualSalary(bonuses) {
    return super.annualSalary() + bonuses;
  }
}

const managerOne = new Manager('Kaushal', 50, 'R&D');
console.log(managerOne.annualSalary()); // Nan as expected
console.log(managerOne.annualSalary(3000));
