	calc = document.getElementById("calc");
	kg = document.getElementById("kg");
	m = document.getElementById("m");
	imc = document.getElementById("imc");
	categ = document.getElementById("categ");

    calc.onclick = function(){
		if(kg.value!="" && m.value!=""){
			imcx = (kg.value / (m.value* m.value));
			imc.innerHTML = imcx
			console.log(imcx);

			if(imcx<18.5){ categ.innerHTML = "Por debajo del peso"; }
			else if(imcx>=18.5 && imcx<=24.9){ categ.innerHTML = "Saludable"; }
			else if(imcx>=25 && imcx<=29.9){ categ.innerHTML = "Con sobrepeso"; }
            else if(imcx>=30 && imcx<=39.9){ categ.innerHTML = "Obeso"; }
			else if(imcx>40){ categ.innerHTML = "Obesidad extrema o de alto riesgo"; }

		}else{
			alert("Debes ingresar todos los datos")
		}

	};