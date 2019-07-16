function clearForm() {
    document.getElementById("zip").value = "";
    document.getElementById("street").value = "";
    document.getElementById("neighborhood").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("ibge").value = "";
}

function myCallback(content) {
    if (!("erro" in content)) {
        document.getElementById("street").value = content.logradouro;
        document.getElementById("neighborhood").value = content.bairro;
        document.getElementById("city").value = content.localidade;
        document.getElementById("state").value = content.uf;
        document.getElementById("ibge").value = content.ibge;
    } else {
        clearForm();
        alert("CEP não encontrado!");
    }
}

function searchZipCode(value) {
    var zip = value.replace(/\D/g, '');

    if (zip != "") {
        var validateZip = /^[0-9]{8}$/;
        if (validateZip.test(zip)) {
            document.getElementById("street").value = "...";
            document.getElementById("neighborhood").value = "...";
            document.getElementById("city").value = "...";
            document.getElementById("state").value = "...";
            document.getElementById("ibge").value = "...";

            var script = document.createElement("script");

            script.src = "https://viacep.com.br/ws/" + zip + "/json/?callback=myCallback";

            document.body.appendChild(script);
        } else {
            clearForm();
            alert("Formato de CEP inválido");
        } 
    } else {
        clearForm();
    }
}