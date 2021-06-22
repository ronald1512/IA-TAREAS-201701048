/**
 * Ronald Gabriel Romero González
 * 201701048
 */
const dirty_succesors=(n)=>{
	switch (n) {
		case 1:
			return [3,5];
		case 2:
			return [4,6];
		case 3:
			return [7,1];
		case 4:
			return [8,2];
		case 5:
			return [6,1];
		case 6:
			return [2,5];
		case 7:
			return [8,3];
		case 8:
			return [4,7];
		default:
			return null;
	}
}

const recorrerEstadosDesde =(nodo_inicio)=>{
	let estados =[1,2,3,4,5,6,7,8];
	let lista = [];
	let current=nodo_inicio;
	for (let index = 0; index < 8; index++) {
		lista=[...lista,current];
		estados=estados.filter(val=>val!==current);	//le sacamos el que ya visitamos
		if(estados.length>0){
			const sucesores=dirty_succesors(current);
			if(!lista.includes(sucesores[0])){
				current=sucesores[0];
			}else if(!lista.includes(sucesores[1])){
				current=sucesores[1];
			}else{
				break;
			}
		}
	}
	return lista;
}

const appendStates=(camino)=>{
	camino.map((value)=>{
		setTimeout(() => {
			switch (value) {
				case 1:
					document.getElementById("log").innerHTML+= `<br>Vacuum Location: A | A State: Dirty | B State: Dirty`;
					break
				case 2:
					document.getElementById("log").innerHTML+= `<br>Vacuum Location: A | A State: Dirty | B State: Clean`;
					break;
				case 3:
					document.getElementById("log").innerHTML+= `<br>Vacuum Location: A | A State: Clean | B State: Dirty`;
					break;
				case 4:
					document.getElementById("log").innerHTML+= `<br>Vacuum Location: A | A State: Clean | B State: Clean`;
					break;
				case 5:
					document.getElementById("log").innerHTML+= `<br>Vacuum Location: B | A State: Dirty | B State: Dirty`;
					break;
				case 6:
					document.getElementById("log").innerHTML+= `<br>Vacuum Location: B | A State: Dirty | B State: Clean`;
					break;
				case 7:
					document.getElementById("log").innerHTML+= `<br>Vacuum Location: B | A State: Clean | B State: Dirty`;
					break;
				case 8:
					document.getElementById("log").innerHTML+= `<br>Vacuum Location: B | A State: Clean | B State: Clean`;
					break;
				default:
					break;
			}
		}, 2000);
	});
}

const appendState =(camino,i)=>{
	if(i>7) return;
	const value=camino[i];
	switch (value) {
		case 1:
			document.getElementById("log").innerHTML+= `<br>Vacuum Location: A | A State: Dirty | B State: Dirty`;
			break
		case 2:
			document.getElementById("log").innerHTML+= `<br>Vacuum Location: A | A State: Dirty | B State: Clean`;
			break;
		case 3:
			document.getElementById("log").innerHTML+= `<br>Vacuum Location: A | A State: Clean | B State: Dirty`;
			break;
		case 4:
			document.getElementById("log").innerHTML+= `<br>Vacuum Location: A | A State: Clean | B State: Clean`;
			break;
		case 5:
			document.getElementById("log").innerHTML+= `<br>Vacuum Location: B | A State: Dirty | B State: Dirty`;
			break;
		case 6:
			document.getElementById("log").innerHTML+= `<br>Vacuum Location: B | A State: Dirty | B State: Clean`;
			break;
		case 7:
			document.getElementById("log").innerHTML+= `<br>Vacuum Location: B | A State: Clean | B State: Dirty`;
			break;
		case 8:
			document.getElementById("log").innerHTML+= `<br>Vacuum Location: B | A State: Clean | B State: Clean`;
			break;
		default:
			return;
	}
	setTimeout(() => {
		appendState(camino,i+1);
	}, 2000);
}

const arr=recorrerEstadosDesde(1)
console.log(arr);
appendStates(arr);