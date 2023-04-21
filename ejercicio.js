/*function titulo(nroEjercicio,nombreEjercicio){
    alert("EJERCICIO " + nroEjercicio +  " --> " + nombreEjercicio)
    document.write("<br>"); 
    document.write("<h2>EJERCICIO "+ nroEjercicio+"<h2>" );     
}*/
const titulo = (nroEjercicio,nombreEjercicio) =>console.log(`EJERCICIO ${nroEjercicio}--> ${nombreEjercicio}<br>`)
    
//EJERCICIO 1

titulo(1,"PIRAMIDE");
function piramide(nro){
    for(i=1;i<=nro;i++){
        for(j=1;j<=i;j++){
            document.write(j);           
        }
        document.write("<br>");        
    }    
}
let nro= parseInt(prompt("ingrese un nro para la pirámide")); 
piramide(nro);
console.log("Comenzar ejercicio 1")
    
//EJERCICIO2

titulo(2,"ARRAYS");

    function llenarArrays(nuevo){
        alert("LLENAREMOS UN ARRAY");
        let n=parseInt(prompt("cuantos valores ingresará"));
        for(i=0;i<n;i++){
            let valor=prompt("ingrese el valor "+(i+1));
           nuevo.push(valor);
        }
    }
    function obtenerMasLargo(uno,dos){
        if(uno.length<dos.length){
            return array1.length;
        }else{
            return array2.length;
        }  
    }
    function compararArrays(uno,dos){
        nro = obtenerMasLargo(uno,dos);
        let arrayIguales=[];
        for(i=0;i< nro;i++){
           if(uno.includes(dos[i])){
                arrayIguales.push(dos[i]);
           }
        }
        console.log(arrayIguales);
        return arrayIguales;        
    }
    
    let array1 = [];
    let array2 =[];
    let nuevo = [];   
 
    llenarArrays(array1);
    llenarArrays(array2);    
    nuevo = compararArrays(array1,array2);

    document.write("Primer Array ingresado --> "+array1+"<br>");
    document.write("Segundo Array ingresado --> "+array2+"<br>");
    document.write("Array con los valores iguales es -->  "+nuevo);


//EJERCICIO 3
titulo(3,"CLASES") ;
    class Carrito {
        productos = [];
        unidades = [];
        montoTotal;
    
        constructor(productos,montoTotal,unidades,){           
            this.productos = [];
            this.montoTotal = 0;
            this.unidades = [];           
        }   

        agregarProducto(nombre, precio, unidades){           
            
            let condicion = true;
            for(let i=0;i<this.productos.length;i++){
                if(nombre==this.productos[i]){
                    console.log(`ya existe el producto ${nombre} con ${this.unidades[i]} unidades`);
                    condicion = false;
                }
            }
            if (condicion==true){
               this.productos.push(nombre);
               this.unidades.push(unidades);
               this.montoTotal =+ (precio*unidades);
                  
            }           
            
        }   
      
    } 
 
    const carrito1 = new Carrito;  
   
     



