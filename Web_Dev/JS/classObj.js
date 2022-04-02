class Employee {
    constructor(id, name, address) {
        this.empid = id;
        this.empname = name;
        this.empaddrs = address
    }
}

let obj = new Employee(1034, "Deepankar", "Ambernath");
localStorage.setItem("empData", JSON.stringify(obj))
console.log(JSON.stringify(obj))

class EmpManager {
    data = [
        new Employee(1034, "Deepankar", "Ambernath")
    ]

    addEmployee(emp) {
        this.data.push(emp)
    }

    updateEmployee(emp) {
        let foundRec = this.data.find((e) => e.empid == emp.empid);
        foundRec.empname = emp.empname;
        foundRec.empaddrs = emp.empaddrs;
    }

    getAllemployee() {
        return this.data;
    }

    deleteEmployee(id) {

        for (let index = 0; index < this.data.length; index++) {
            if (this.data[index].empid == id) {
                this.data.splice(index, 1)
                return;
            }

        }
        throw "Entry Not Found!"
    }
}