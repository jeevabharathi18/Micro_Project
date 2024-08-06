import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url : string;
  employeeArr : Employee[];
  employee : Employee;



  constructor(private http :HttpClient) {
    this.url = "http://localhost:3004/employees";
    this.employee = new Employee();
    this.employeeArr = [];
   }
   insertEmployee(employee : Employee) {
    this.http.post<Employee>(this.url,employee).subscribe();
    return "Employee Details Added";
   }
   updateEmployee(employee : Employee) {
    this.http.put<Employee>(this.url+"/"+employee.id, employee).subscribe();
    return "Employee Details Updated";
   }
   deleteEmployee(employee : Employee) {
    this.http.delete<Employee>(this.url+"/"+employee.id).subscribe();
    return "Employee Details Deleted";
   }
   findAllemployee() {
    this.http.get<Employee[]>(this.url).subscribe(data => this.employeeArr = data);
    return this.employeeArr;
   }
   findEmployee(empid : number) {
    this.http.get<Employee>(this.url+"/"+empid).subscribe(data => this.employee =  data);
    return this.employee;
   }
  }