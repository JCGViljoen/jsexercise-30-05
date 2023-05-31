// declare variable and call by id in body of table
const displayElement = document.querySelector('#table')
console.log(displayElement)

// create objects
let person1 = {
    firstName: 'Seth',
    lastName: 'Kallis',
    age: '102'
}

let person2 = {
    firstName: 'Amy',
    lastName: 'Pieterse',
    age: '23'
}
let person3 = {
    firstName: 'Mish-Al',
    lastName: 'Taliep',
    age: '21'
}
let person4 = {
    firstName: 'Alonso',
    lastName: 'Cupido',
    age: '12'
}
let person5 = {
    firstName: 'Jason',
    lastName: 'Barron',
    age: '35'
}
let person6 = {
    firstName: 'Siyamthada',
    lastName: 'Mazokwana',
    age: '62'
}
let person7 = {
    firstName: 'Keeno',
    lastName: 'Fourie',
    age: '20'
}
let person8 = {
    firstName: 'Logan',
    lastName: 'Paul',
    age: '30'
}


// display in then html body
 displayElement.innerHTML = `
<tr>
<td>${person1.firstName}</td>
<td>${person1.lastName}</td>
<td>${person1.age}</td>

</tr>

<tr>
<td>${person2.firstName}</td>
<td>${person2.lastName}</td>
<td>${person2.age}</td>

</tr>

<tr>
<td>${person3.firstName}</td>
<td>${person3.lastName}</td>
<td>${person3.age}</td>

</tr>

<tr>
<td>${person4.firstName}</td>
<td>${person4.lastName}</td>
<td>${person4.age}</td>

</tr>

<tr>
<td>${person5.firstName}</td>
<td>${person5.lastName}</td>
<td>${person5.age}</td>

</tr>

<tr>
<td>${person6.firstName}</td>
<td>${person6.lastName}</td>
<td>${person6.age}</td>

</tr>

<tr>
<td>${person7.firstName}</td>
<td>${person7.lastName}</td>
<td>${person7.age}</td>

</tr>

<tr>
<td>${person8.firstName}</td>
<td>${person8.lastName}</td>
<td>${person8.age}</td>

</tr>
`
  
