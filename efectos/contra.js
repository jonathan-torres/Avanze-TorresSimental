
function validar()
{
	var user = document.getElementById('password').value;
	var contra = document.getElementById('user').value;
	if(user != "" || contra!= "")
	{
	if (contra == user) 
		{
			alert('¡La contraseña no puede ser igual al Usuario!')
			document.getElementById('password').focus()
			return
		};
	};
}
function val()
{
	var contra2 = document.getElementById('password2').value;
	var contra = document.getElementById('password').value;
	if(contra != "" || contra2 != "")
	{
		if(contra2 != contra)
			{
				alert('La contraseña no coincide!')
				// document.getElementById('password2').focus()
				return
		};
	};
	if(contra== "" || contra2=="")
	{
		alert('Los campos de la contraseña estan vacios')
		return
	};
}
function vacio()
{
	var nuser= document.getElementById('username').value;
	// var c1= document.getElementById('password').value;
	// var c2= document.getElementById('password2').value;
	// var correo= document.getElementById('correo').value;
		if(nuser == "")
		{
			alert('Este campo es requerido, favor de llenarlo')
			return 
		};
}
function vacio1()
{
	var us= document.getElementById('user').value;
	if(us == "")
		{
			alert('Este campo es requerido, favor de llenarlo')
			return 
		};
}
function vacio2()
{
	var cor = document.getElementById('correo').value;
	if(cor == "")
		{
			alert('Este campo es requerido, favor de llenarlo')
			return 
		};
}

