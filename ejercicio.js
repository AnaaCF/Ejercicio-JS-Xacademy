function titulo(nroEjercicio,nombreEjercicio){
    alert("EJERCICIO " + nroEjercicio +  " --> " + nombreEjercicio)
    document.write("<br>"); 
    document.write("<h2>EJERCICIO "+ nroEjercicio+"<h2>" );     
}

//Ejercicio 1 Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero;
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
    console.log("Comenzar ejercicio 1");

    

/*Ejercicio 2 Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos*/

titulo(2,"ARRAYS")

    function llenarArrays(nuevo){
        alert("LLENAREMOS UN ARRAY");
        let n=parseInt(prompt("cuantos valores ingresará"));
        for(i=0;i<n;i++){
            let valor=prompt("ingrese el valor "+(i+1));
           nuevo.push(valor);
        }
    }
    function obtenerLargo(uno,dos){
        if(uno.length<dos.length){
            return array1.length;
        }else{
            return array2.length;
        }  
    }
    function compararArrays(uno,dos){
        nro = obtenerLargo(uno,dos);
        let arrayIguales=[];
        for(i=0;i<=nro;i++){
            valor=uno[i];
            for(j=0;j<=nro;j++){
                if(valor===dos[j]){
                    arrayIguales.push(valor);
                }
            }
        }
        return arrayIguales;
    }
    
    let array1 = [];
    let array2 =[];
    let nuevo = [];
   
 
    llenarArrays(array1);
    llenarArrays(array2);
    
    nuevo = compararArrays(array1,array2);
    console.log("Array con los valores iguales es -->  "+nuevo);
    document.write("Primer Array ingresado --> "+array1+"<br>");
    document.write("Segundo Array ingresado --> "+array2+"<br>");
    document.write("Array con los valores iguales es -->  "+nuevo);

/*3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}
Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.*/
/*3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}

Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}

3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”
*/
titulo(3,"CLASES") ;
    class Carrito {
        montoTotal;
        productos = [];
        unidades = [];
        constructor(montoTotal,productos,unidades){
            this.montoTotal = montoTotal;
            this.productos = [productos];
            this.unidades = [unidades];
        }
     
        agregarProducto(nombre, precio, unidades){
            
            this.productos.push(nombre);
            this.unidades.push(unidades);
            this.montoTotal=this.montoTotal+(precio*unidades);
            
        }
      
    } 
    
    function comparar(objeto,nombreProducto, precioProducto, unidProducto){
        let condicion = true;
        for(i=0;i<objeto.productos.length;i++){
            if(nombreProducto==objeto.productos[i]){
                console.log("ya existe el producto "+ nombreProducto + " con "+objeto.unidades[i]+" unidades");
                document.write("<br>ya existe el producto "+ nombreProducto + " con "+objeto.unidades[i]+" unidades<br>");
                condicion = false;
            }
        }
        if (condicion==true){
            carrito1.agregarProducto(nombreProducto, precioProducto, unidProducto);
        }
    }
    function mostrarCarrito(objeto){
        document.write("-----<br>Contenido del Carrito de compras<br>");
        for(i=0;i<objeto.productos.length;i++){
            document.write("producto "+objeto.productos[i]+" con "+objeto.unidades[i]+" unidades <br>");
        }
        document.write("Monto total "+objeto.montoTotal+"<br>-----");
    }
 
    const carrito1 = new Carrito(200,"azucar",2);   
    mostrarCarrito(carrito1);
    carrito1.agregarProducto("leche",400,2);
    comparar(carrito1,"azucar",200,3);
    console.log(carrito1);
    comparar(carrito1,"yerba",500,1); 
    mostrarCarrito(carrito1);





