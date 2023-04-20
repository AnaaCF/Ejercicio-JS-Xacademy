function titulo(nroEjercicio,nombreEjercicio){
    alert("EJERCICIO " + nroEjercicio +  " --> " + nombreEjercicio)
    document.write("<br>"); 
    document.write("<h2>EJERCICIO "+ nroEjercicio+"<h2>" );     
}

//EJERCICIO 1

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

    

//EJERCICIO2

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

//EJERCICIO 3
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





