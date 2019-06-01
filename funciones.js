const fs = require('fs');
listaEstudiantes = [];


const crear = (estudiante) => {
        
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion,
        
    };

       
    
        
         let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre)
         if (!duplicado) {
            listaEstudiantes.push(est);
         console.log(listaEstudiantes);
         guardar(); 
         } else {
            console.log(`Ya Existe otro estudiante con ese nombre`);
             
         }

}

const listar = () => {
    try {
        listaEstudiantes = require('./Listado.json');
    } catch (error) {
        listaEstudiantes = [];
    }
    
// Se utiliza para hacerlo de una forma asincronica
//     listaEstudiantes = JSON.parse(fs.readFileSync('Listado.json'))
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('Listado.json', datos, (err) => {
        if (err) throw (err);
        console.log(`Archivo creado con éxito`);

    })
}


const mostrar = () =>{
    listar()
    console.log(`Notas de los estudiantes`);
    
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log(`Notas`);
        console.log(` Matematicas ${estudiante.matematicas}`);
        console.log(` ingles ${estudiante.ingles}`);
        console.log(` programacion ${estudiante.programacion} \n`);   
    });
}

const mostrarest = (nom) => {

    listar()
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
        if(!est){
         console.log(`No exite este estudiante`);
        }
        else {
        console.log(est.nombre);
        console.log(`Notas`);
        console.log(` Matematicas ${est.matematicas}`);
        console.log(` ingles ${est.ingles}`);
        console.log(` programacion ${est.programacion} \n`);   
        }
}

const mostrarmat = () =>{
    listar()
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >=3);
    if (ganan.length == 0) {
        console.log('Ningun estudiante va ganando');
    }else
        ganan.forEach(estudiante=>{
            console.log(estudiante.nombre);
            console.log(`Notas`);
            console.log(` Matematicas ${estudiante.matematicas}`);
        });
    
}


const promedioE = (nomb) =>{

    listar()

    let est = listaEstudiantes.find(buscar => buscar.nombre == nomb)
   
        if(!est){
         console.log(`No exite este estudiante`);
        }
        else {
        console.log("CONSULTA PROMEDIO ESTUDIANTE");
        console.log("El promedio del estudiante "+ est.nombre +" es " +  ((est.matematicas+est.ingles+est.programacion)/3));
        }
      
    
    
}

const mostrarAlto = () => {

    listar()
    let proA = listaEstudiantes.filter(pro => ((pro.matematicas+pro.ingles+pro.programacion)/3) >=4.5); 
    let promedio  = (proA.matematicas+proA.ingles+proA.programacion)/3
    if (promedio < 4) {
        console.log('Ningun estudiante tiene promedio alto');
    }else
    console.log(`Los estudiantes con promedio alto son:`);
        proA.forEach(estudiante=>{
           
            console.log(`${estudiante.nombre} su promedio es de: ${((estudiante.matematicas+estudiante.ingles+estudiante.programacion)/3)}` );
        });

   
        
}
    


module.exports = {
    crear,
    mostrar,
    mostrarest,
    mostrarmat,
    promedioE,
    mostrarAlto
   
}