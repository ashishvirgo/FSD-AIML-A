const a=[1,2,3];
const b=[4,5];
const c=[...a,...b];
console.log(c);
const ob1={id:11,name: 'ashish',dept: 'ccpd'};
const ob2={address: 'Ghaziabad'};
const ob={...ob1,...ob2};
console.log(ob);

const [first,...rest]=[1,2,3,4,5];
console.log(first);
console.log(rest);
