import { useState, useEffect } from 'react'
function x() {
    const [show, setShow]= useState(true);
    return (
<div>

    <button onClick = {() => setShow(!show)}>toggle</button>
    {show && <Example />} {/* esto se usa como un ternaro, este componente Example se renderiza dependiendo de show */}
</div>
    );
}
export default x;

function Example() {

    useEffect ( () => {
        
    })
    return(
        <div>
            esto es una prueba.
        </div>
    )
}