//---Without jason---//
// const data=[
//     {firstname: "Muhammad", midlename: "altamash", lastname:"khan"},
//     {firstname: "Muhammad", midlename: "arsalan", lastname:"khan"},
//     {firstname: "Muhammad", midlename: "zaid", lastname:"khan"}
// ];


// const result =  data.map((item) =>`${item.firstname} ${item.lastname}`);


//----with jason---//
import { employees } from "./fullnames";

const result = employees.data.map((item) => `Mr ${item.midlename} ${item.lastname}`);
console.log(result);