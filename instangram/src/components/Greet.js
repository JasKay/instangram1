import React from 'react'

// function Greet(){
//     return <h1>Hello Boy</h1>
// }

const Greet = props => {
    console.log(props)
return <h1>This is {props.name} a.k.a {props.heroName}</h1>
}



export default Greet