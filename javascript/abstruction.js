//abstraction

function Employee(name, accountNumber, salary, department, allowances) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.salary = salary;
    this.department = department;
    this.allowances = allowances;


    let monthlyBonus = 100000;

    let getFinalSalary = function() {
        let finalSalary = salary + monthlyBonus + allowances;
        console.log(finalSalary)
    }

    this.getDetails = function() {
        console.log(`${this.name} of Account Number ${this.accountNumber} working in the department of ${this.department}\n Has recivied a monlthy salary
        of ugx ${this.salary} and a monthy allowance of ugx ${this.allowances} and monthly bonus of ${this.monthlyBonus}. Thanks for working with us.`)
        getFinalSalary()
    }

}

let details = new Employee('kiberu Fahad', '200045678900432', 700000, 'software development', 400000, )
details.monthlyBonus = 200000;
details.getDetails()