import React from 'react'
import ProfileImage from './ProfileImage';

import Constant from '../config/constant';


const person = {
  asdfas: "Abac",
  lnaasdasdme: "Xyz",
  fdfasdasda: "Xyz",
  dfdadasg: "Xyz",
  scasdsddfsd: "Xyz",
}

const person12 = {
  fname: "sdsdfsd",
  lname: "Xsdfsdfyz",
  fdf: "sdf",
  dfg: "Xyz",
  scdfsd: "asdfsd",
}

const p3 = [{ ...person, ...person12 }]
console.log(p3);

const { fname, lname, age, ...rest1 } = person;
console.log(rest1);

console.log(fname, lname, age);

const persons = [
  { fname: 'asd', lname: 'ytbty' },
  { fname: 'asd', lname: 'vrt' },
  { fname: 'xwf', lname: 'cwe' },
  { fname: 'mynh', lname: 'ec' },
]

const [{ fname: fname1 }, { fname: fname2 }, ...rest] = persons;
console.log(rest, 'restrest');

console.log(fname, fname1, fname2);

const num1 = [1, 2, 3, 4, 5, 6]
const num2 = [1, 2, 3, 4, 5, 6, 34545, 6467, 567, 354, 234, 21323, 54]

console.log([ ...num2, ...num1,]);

const Container = ({ name, tagline, imgurl}) => {
  return (
    <>
      <h1>{Constant.DATE_FORMAT}</h1>
      <h1>{Constant.DATE_TIME_FORMAT}</h1>
    </>
  )
}

export default Container