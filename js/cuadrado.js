
        function cuadrado(){
            var num, rest;
            num = document.form1.numero.value;
            rest = num * num;
            document.form1.resultado.value = rest;
        }

        function borrar(){
            document.form1.numero.value = "";     
            document.form1.resultado.value = ""; 
        }
  