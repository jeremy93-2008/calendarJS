var fecha = new Date();
var inicio_dia;
var hoy;
var tabla;
var mes_actual,anio_actual;
var meses,edad;
var clase;

function Cargar(objeto)
{
	var obj = document.getElementById("calendario")||-1;
	if(obj == -1)
	{
		clase = objeto;
		//Construir Calendario
		CrearCalendario();

		//Creacion fecha
		CrearFecha();

		//Poner dias de la semana
		CrearDiasEncabezados();

		//Crear celdas y columnas
		RellenarTabla();
	}
	
}
function Anterior()
{	
	if(meses === 0)
	{meses = 11;edad--;}
	else
	{meses--;}
	//Creacion fecha
	CrearFecha(meses,edad);

	//Calendario vacio
	EliminarContenido();

	//Poner dias de la semana
	CrearDiasEncabezados();

	//Crear celdas y columnas
	RellenarTabla();	
}
function Siguiente()
{
	if(meses === 11)
	{meses = 0;edad++;}
	else
	{meses++;}
	//Creacion fecha
	CrearFecha(meses,edad);

	//Calendario vacio
	EliminarContenido();

	//Poner dias de la semana
	CrearDiasEncabezados();

	//Crear celdas y columnas
	RellenarTabla();		
}
function Load()
{
	fecha = new Date();
	var numero = document.getElementsByClassName('calendar').length;
	for(var a = 0;a < numero;a++)
	{
		var cal = document.getElementsByClassName('calendar')[a];
		cal.onclick = function(){Cargar(this.className);};
		(cal.className.indexOf("-"+a+"-")==-1)?cal.className = cal.className+" -"+a+"-":cal.className = cal.className;
		var place = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
		cal.placeholder = place;
		cal.readOnly = true;
	}
}
window.onload = Load;