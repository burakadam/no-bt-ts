 type Name ={
    first:string;
    last:string
 }

 const addFullName = (name:Name): Name & {fullName:string} => ({
    ...name,
    fullName: `${name.first} ${name.last}`
 }) 