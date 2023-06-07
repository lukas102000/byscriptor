# Byscritor-api.js (1.0)

### Descripção

`Byscriptor-api` 
É uma api de criptografia e descriptografia de dados ou textos.
Este api não criptografa arquivos!

Este api pode ser usado no frontend ou backend para criptografar dados!

### Uso
````html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Byscripor</title>
        <style>
            body{
                background-color: rgb(228, 230, 230);
            }
            input{
                width: 80%;
                padding: 15px;
                border-radius: 10px;
                border: 0;
                outline: none;
                display: block;
                margin: 10px;
            }
            button{
                width: 86%;
                padding: 10px;
                border-radius: 10px;
                border: 0;
                font-size: 15pt;
                margin: 10px;
                color: white;
                background-color: rgb(255, 174, 0);
            }
            h1{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: rgb(3, 165, 3); padding: 15px;}
        </style>
    </head>
    <body>

        <h1 id="criptor">Resultado</h1>
        <input type="password" name="" id="password" placeholder="senha">
        <button id="create">Create</button>

        <h1 id="descript">Resultado</h1>
        <input type="password" name="" id="password2" placeholder="senha criptografada">
        <button id="descripts">Create</button>

        <script src = "./source/byscriptor-api.js"> </script>

        <script>
            const criptor = Byscripor()
            // criptografando...
            document.getElementById("create").addEventListener("click", function (){
                var password = document.getElementById("password").value
                var password_criptor = criptor.criptor(password)
                var result = password_criptor.results
                document.getElementById("criptor").innerHTML = result
                document.getElementById("password").value = ""
            })
            // descriptografando
            document.getElementById("descripts").addEventListener("click", function (){
                var password = document.getElementById("password2").value
                var password_criptor = criptor.descriptor(password)
                var result = password_criptor.results
                document.getElementById("descript").innerHTML = result
                document.getElementById("password").value = ""
            })
        </script> 
    </body>
    </html>
````
````js

    // Instancia a função Byscriptor ()
    const criptor = Byscripor()
    // dado do usuário, lendo a senha
    var password = "adminLucasVeraz"
    // criptografando
    var password_criptor = criptor.criptor(password)
    // obtendo o resultado da chave e salvar um banco de dados local caso tenha um
    var result = password_criptor.results
    console.log(password_criptor.results)

    // descriptografar 
    var password_descript = criptor.descriptor(result)
    var result2 = password_descript.result
    console.log(password_descript.results)

````