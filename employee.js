(
function(){
    var ctrls = {};
    
    ctrls.empTable = document.getElementById("emplist");
    
    var employees =[
        {empId: 507, fName: "Rajesh", lName: "Bejjanki"},
        {empId: 519, fName: "David", lName: "Joe"},
        {empId: 521, fName: "Ram", lName: "Kumar"},
    ];
    
    
    function trTag(emp){
        var trForEmployee = document.createElement("tr");
        
        var tdForEmpid = document.createElement("td");
        tdForEmpid.textContent = emp.empId;
        
        var tdForEmpFname = document.createElement("td");
        tdForEmpFname.textContent = emp.fName;
        
        var tdForEmpLname = document.createElement("td");
        tdForEmpLname.textContent = emp.lName;
        
        
        trForEmployee.appendChild(tdForEmpid);
        trForEmployee.appendChild(tdForEmpFname);
        trForEmployee.appendChild(tdForEmpLname);
        
        
        ctrls.empTable.appendChild(trForEmployee);
    }
    
    function employeeTable(){
        for(var i=0; i<employees.length; i++){
            var employee = employees[i];
            
            trTag(employee);
        }
    }
    
    
    function init() {
        employeeTable();
    }
    init();
}
)();