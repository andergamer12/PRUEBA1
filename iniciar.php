
<head>
    <style>
        body {
        width: 100%;
	height:100%;
	font-family: 'Open Sans', sans-serif;
	background: #092756;
	background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
        #errorDiv{
            color: white;
        }
        }
        
    </style>
</head>
<div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
<div class="card mb-5 p-5 bg-dark bg-gradient text-white col-md-4">
<div class="card-header text-center">
<h3>Iniciar sesión </h3>
</div>
<div class="card-body mt-3">
<form id="loginForm" action="conexion.php" method="POST">
<div class="input-group form-group mt-3">
<input type="email" class="form-control text-center p-3"
placeholder="Email" name="email" required>
</div>
<div class="input-group form-group mt-3">
<input type="password" class="form-control text-center p-3"
placeholder="Contraseña" name="password"required>
</div>
<div class="text-center">
<input type="submit" value="Acceder"
class="btn btn-primary mt-3 w-100 p-2" name="login-btn" style="background: linear-gradient(to right, #800080, #00CED1); color: #FFFFFF;"required>
</div>
</form>
</div>
<div class="card-footer p-3">
<div class="d-flex justify-content-center">
<p>¿No tienes una cuenta? <a href="registrarse.php">Regístrate aquí</a></p>
</div>
</div>
</div>
<div id="errorDiv"></div>
</div>
