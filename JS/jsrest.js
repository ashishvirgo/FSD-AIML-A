import {add,mul} from '../JS/math.js';
const sum=add(34,45);
console.log("sum=",sum)
console.log("mul=",mul(12,5))
const num=[10,20,30,40,50];
const [f,s,...other]=num;
console.log(f);
console.log(s);
console.log(other);
const a=[1,2,3,4];
const b=[8,9];
const c=[...a,...b]
console.log(a)
console.log(b)
console.log(c)
