Funcion area <- calcularareatriangulo (base, altura)
	area <- (base*altura)/2
Fin Funcion
Funcion area <- calcularareacuadrado (lado, lado)
	area <- (lado * lado)
	
Fin Funcion
Funcion areaCirculo <- calcularAreaCirculo (radio)
	areaCirculo <- (3.1416 * radio) *2
	
FinFuncion

Algoritmo funciones 
	area<- calcularareatriangulo (5,8)
	Escribir "el area del triangulo es ", area
	
		area <- calcularareacuadrado (15,15)
		Escribir  "el area del cuadrado es ", area
		
		areaCirculo <- calcularAreaCirculo (10)
		Escribir "El area del circulo es: ", areaCirculo

	
FinAlgoritmo
