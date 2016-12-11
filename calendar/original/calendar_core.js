function CrearCalendario()
{
	var div = document.createElement("div");
	div.setAttribute("id","calendario");
	div.innerHTML = "<div class='control'><button title='Anterior mes' onclick='Anterior()'><<</button> <h3 id='fecha'>Junio-2016</h3> <button title='Siguiente mes' onclick='Siguiente()'>>></button><button onclick='DelCalendar()' style='float: right;margin-top: 20px;margin-right: 20px;' title='Cerrar'>X</button></div><div id='tabla'></div>";
	var valor = document.getElementsByClassName(clase)[0].value;
	document.getElementsByClassName(clase)[0].outerHTML += div.outerHTML;
	document.getElementsByClassName(clase)[0].value = valor;
}
function CrearFecha(mesu,ano)
{
	if(arguments.length === 0)
	{
		mesu = fecha.getMonth();
		ano = fecha.getFullYear();
		mes_actual = mesu;
		anio_actual = ano;
		//Creacion fecha
		var diaactual = fecha.getDate();
		hoy = diaactual;
		var array = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
		var mes = array[mesu];
		var anio = ano;
		console.log(anio+"-"+mesu+"-01");
		inicio_dia = new Date(anio+"-"+mesu+"-01").getDay();
		// Fecha
		var doc = document.getElementById("fecha");
		doc.replaceChild(document.createTextNode(mes+" - "+anio),doc.childNodes[0]);
	}else if(arguments.length === 2)
	{
		fecha = new Date((mesu+1)+"/01/"+ano);
		//Creacion fecha
		var diaactual = fecha.getDate();
		var array = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
		var mes = array[mesu];
		var anio = ano;
		console.log(anio+"-"+mesu+"-01");
		inicio_dia = fecha.getDay()-2;
		// Fecha
		var doc = document.getElementById("fecha");
		doc.replaceChild(document.createTextNode(mes+" - "+anio),doc.childNodes[0]);
	}
	meses = fecha.getMonth();
	edad = fecha.getFullYear();
}
function CrearDiasEncabezados()
{
	tabla = document.createElement("table");
	tabla.setAttribute("class","tabla");
	
	var nombre_dias = ["Lu","Ma","Mi","Ju","Vi","Sa","Do"];
	var tr = document.createElement("tr");
	for(var a = 0;a < 7;a++)
	{
		var day = document.createElement("th");
		day.appendChild(document.createTextNode(nombre_dias[a]));
		tr.appendChild(day);
	}
	tabla.appendChild(tr);
}
function EliminarContenido()
{	
	var tabula = document.getElementById('calendario');
	tabula.removeChild(tabula.childNodes[1]);
	var table = document.createElement("div");
	table.setAttribute("id","tabla");
	tabula.appendChild(table);
}
function RellenarTabla()
{
	var tabula = document.getElementById('tabla');
	var dias = [31,30,31,30,31,30,31,31,30,31,30,31];
	var dia = 0;
	for(var a = 0;a < 7;a++)
	{
		var lleno = false;
		var row = document.createElement("tr");
		for(var b = 0;b < 7;b++)
		{
			if(dia < dias[fecha.getMonth()])
			{
				var col = document.createElement("td");
				(inicio_dia===-2)?inicio_dia=5:inicio_dia=inicio_dia;
				(inicio_dia===-1)?inicio_dia=6:inicio_dia=inicio_dia;
				if(!(a === 0 && b <= inicio_dia))
				{
					lleno = true;
					dia++;
					var place = dia+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
					col.setAttribute("onclick","seleccionar('"+place+"')");
					if(hoy == dia && fecha.getMonth()==mes_actual && fecha.getFullYear()==anio_actual)
					{
						var num = document.createTextNode("["+dia+"]");
						col.setAttribute("style","text-align:center;color:red;font-weight:bold;cursor:pointer;");
						col.appendChild(num);
						row.appendChild(col);
					}else
					{
						if(fecha.getMonth()==1 && dia < (diabisiesto()+1))
						{
							var num = document.createTextNode(dia);
							col.setAttribute("style","text-align:center;cursor:pointer;");

							col.appendChild(num);
							row.appendChild(col);
						}else if(fecha.getMonth()!=1)
						{
							var num = document.createTextNode(dia);
							col.setAttribute("style","text-align:center;cursor:pointer;");
							col.appendChild(num);
							row.appendChild(col);
						}
						
					}
					
				}else
				{
					var num = document.createElement("span");
					num.setAttribute("style","visibility:hidden;");
					num.appendChild(document.createTextNode("5"));
					col.appendChild(num);
					row.appendChild(col);					
				}
			}
			
		}
		tabla.appendChild(row);
	}
	tabula.appendChild(tabla);
}
function seleccionar(place)
{
	var cada = place.split("/");
	(cada[0]<10)?cada[0]="0"+cada[0]:cada[0]=cada[0];
	(cada[1]<10)?cada[1]="0"+cada[1]:cada[1]=cada[1];

	var newplace = cada[2]+"-"+cada[1]+"-"+cada[0];

	var numero = clase.split("-")[1];
	document.getElementsByClassName("calendar")[numero].value = newplace;
	DelCalendar();
}
function DelCalendar()
{
	var s = document.getElementById("calendario");
	s.outerHTML = "";
	Load();
}
function diabisiesto()
{
	var res = 28;
	if(edad%4===0)
	{
		res = 29;
		if(edad%100===0)
		{
			res = 28;
			if(edad%400===0)
			{
				res = 29;
			}
		}
	}
	return res;
}