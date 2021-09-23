<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../CSS/login_style.css">
    <title>Login</title>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="content">
                <div class="imgBX"><img src="../FOTOS/logo_sin_nombre.png"></div>
                    <div class="contentBx">
                        <h3 class="nombre_logo">CreativeWare</h3>
                        <h3>Inicio de Sesion</h3>
                    </div>
                </div>
                    <ul class="sci">
                        <form method="post">
                        <li style="--i:1">
                            <input class="us" type="text" name="name" placeholder="Usuario">
                        </li>
                        <li style="--i:2">
                            <input class="pass" type="password" name="password" placeholder="Contraseña">
                        </li>
                        <li style="--i:3">
                            <input class="boton" name="register" type="submit" value="entrar">
                        </li>
                        <li style="--i:4">
                            <a href="RegistroPerfiles.php" >¿No tienes cuenta?</a>
                        </li>
                        </form> 
                    </ul>
            </div>
        </div>
    </div>
    
    <?php
        include("conexion.php");
        if(isset($_POST['register'])){
            if (strlen($_POST['name']) >= 1 && strlen($_POST['password']) >= 1){
                $names = trim($_POST['name']);
                $contraseña = trim($_POST['password']);
                $nuevo_usuario="SELECT * FROM cliente WHERE usuario = '$names' and password = '$contraseña'";
                $res = mysqli_query($conn,$nuevo_usuario);
                //Si hay filas con esa contraseña y usuario entra
                if(mysqli_num_rows($res) > 0){
                 
                            ?>
                                <h3 class="Es">inicio correctamente la cuenta</h3>
                            <?php
                      
                    
                }
                //Son datos incorrectos
                else{
                    ?>
                        <h3 class="Es">Tu usuario o contraseña son incorrectos</h3>
                    <?php
                }
            }
            else{
                ?>
                    <h3 class="bad">¡Completa los campos!</h3>
                <?php
            }
        }
    
    ?>
</body>
</html>