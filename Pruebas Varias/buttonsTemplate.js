
export default {

data() {
    return{
        greeting: 'Hello World',
        count: 0,
    };
},

template: `<p>{{ greeting }}</p>
    <p>Esto es una prueba de componentes de vue</p>
    <button @click='count++'>
    Y ahora mismo estoy creando un botón que tiene 
    <strong>{{ count }}</strong> clics</button><br>
    <button @click='count=0'>Y este les hace reset</button>
    `
}
