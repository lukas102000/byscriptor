# Byscritor-api.js (1.0)

### Descripção

`Byscriptor-api` 
É uma api de criptografia e descriptografia de dados ou textos.
Este api não criptografa arquivos!

Este api pode ser usado no frontend ou backend para criptografar dados!

### Uso

````html
    <h1 id="criptor">Result</h1>
    <input type="password" name="" id="password" placeholder="senha">
    <button id="create">Create</button>

    <h1 id="descript">Result</h1>
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
````
### JS
````js

    // Instantiate the Byscriptor() function
    const cryptor = Byscript()
    // user data, reading the password
    var password = "adminLucasVeraz"
    // encrypting
    var password_criptor = cryptor.criptor(password)
    // getting the key result and saving a local database if it has one
    var result = password_cryptor.results
    console.log(password_cryptor.results)

    // decrypt
    var password_descript = cryptor.descriptor(result)
    var result2 = password_descript.result
    console.log(password_descript.results)

````