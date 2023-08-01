employees = []

function Employee(name, jobTitle, salary, status = "Full time") {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}

Employee.prototype.printEmployeeForm = function(){
    console.log(
        "Name: " + this.name + ", " +
        "Job Title: " + this.jobTitle + ", " +
        "Salary: $" + this.salary + "/hour, " +
        "Status: " + this.status
    )
}

var bob = new Employee("Bob", "V School Inschool instructor", 3000)
var chris = new Employee("Chris", "Accountant", 0)
var sue = new Employee("Sue", "HR", 1)

bob.status = "Part time"
chris.status = "Contract"

bob.printEmployeeForm()
chris.printEmployeeForm()
sue.printEmployeeForm()

employees.push(bob)
employees.push(chris)
employees.push(sue)

console.log(employees)

