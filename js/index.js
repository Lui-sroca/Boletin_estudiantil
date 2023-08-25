
document.getElementById("boton1").addEventListener("click", function(){
   
    let inputNombre1 = document.getElementById("input_nombre1").value
    let input_apellido1 = document.getElementById("input_apellido1").value
    let input_ti1 = document.getElementById("input_ti1").value

    if(inputNombre1 == "" || input_apellido1 == "" || input_ti1 ==""){
        alert("Ingrese todos los datos del alumno")
    }
    else{
        let container1 = document.getElementById("container1")
        let container = document.getElementById("container2")

        document.getElementById("inputnombre").value = inputNombre1
        document.getElementById("inputapellido").value = input_apellido1
        document.getElementById("inputti").value = input_ti1

        container1.style.display = "none"
        container.style.display = "block"

        console.log(inputNombre1, input_apellido1, input_ti1)
    }
})

document.getElementById("boton1").addEventListener("click", function(){

    

    for(let i = 1 ; i<13 ; i++){

        let numerosAleatoriios = Math.floor(Math.random()*6)

        let suma =+ numerosAleatoriios
        let promedio = suma/12

        if(numerosAleatoriios===3){
            document.getElementById("nota"+i).value = numerosAleatoriios;
            document.getElementById("ob"+i).value = "Debe mejorar"
        }
        else if(numerosAleatoriios === 5){
            document.getElementById("nota"+i).value = numerosAleatoriios;
            document.getElementById("ob"+i).value = "Sobresaliente"
        }
        else if(numerosAleatoriios === 4 ){
            document.getElementById("nota"+i).value = numerosAleatoriios;
            document.getElementById("ob"+i).value = "aprobado"
        }
        else if(numerosAleatoriios === 2 || numerosAleatoriios <2){
            document.getElementById("nota"+i).value = numerosAleatoriios;
            document.getElementById("ob"+i).value = "reprobado"
        }

        if(promedio==3){
            document.getElementById("nota13").value = promedio;
            document.getElementById("ob13").value = "Debe mejorar"
        }
        else if(promedio == 5){
            document.getElementById("nota13").value = promedio;
            document.getElementById("ob13").value = "Sobresaliente"
        }
        else if(promedio == 4 ){
            document.getElementById("nota13").value = promedio;
            document.getElementById("ob13").value = "Aprobado"
        }
        else if(promedio == 2 || promedio <2){
            document.getElementById("nota13").value = promedio;
            document.getElementById("ob13").value = "Reprobado"
        }

        

    }

})


document.getElementById("boton1").addEventListener("click", function(){
    let fecha = new Date()
    
    let año = fecha.getFullYear()
    let mes = fecha.getMonth()
    let dia = fecha.getDay()

    document.getElementById("inputfecha").value = dia+" / "+mes+" / "+año
})

