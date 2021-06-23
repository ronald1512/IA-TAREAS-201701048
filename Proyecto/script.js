class Celda{
    constructor(val, fila, columna){
        this.valor= val;
        this.peso=0;
        this.fila=fila;
        this.columna=columna; 
    }
}

const tipo={
    negra:0,
    blanca: 1,
    vacio:2
}


// document.getElementsByTagName('body')[0].innerHTML=`<pre>Hola</pre>`;
/*?turno=1&estado=2222222222222222222222222222221022222201222222222222222222222222*/
const urlSearchParams = new URLSearchParams(window.location.search);
const {turno,estado} = Object.fromEntries(urlSearchParams.entries());


let matriz=estado.split("");
let fila=0;
let columna=0;
matriz= matriz.map((value)=>{
        const tmp=new Celda(value,fila,columna);
        columna++;
        if(columna==8){
            columna=0;
            fila++;
        }
        return tmp;
    }
);
console.log(matriz);