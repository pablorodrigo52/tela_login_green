function checkCredentials()
{
    var mail = document.getElementById("mail");
    var pass = document.getElementById("pass");
    
    comparator_email(mail.value, mail);
    comparator_pass(pass.value, pass);
}

function comparator_email(valor, elemento)
{
    var comparator = "green@mail.com";
    var verify_icon = document.getElementById("verify-icon");
    var div_verify_icon = document.getElementById("div-verify-icon");

    if (valor == comparator)
    {
        verify_icon.setAttribute("class", "fas fa-check"); /* Atribuo o ícone "CORRECT" do fontawsome e mudo algumas coisas no estilo dos ícones para combinar com a pagina */
        verify_icon.setAttribute("style", "color: #87BE56;");
        div_verify_icon.removeAttribute("hidden");
        elemento.setAttribute("style", "border-bottom: 1px solid #87BE56;")
    }else
    {
        verify_icon.setAttribute("class", "fas fa-minus-circle"); /* Atribuo o ícone "YOU SHALL DO NOT PASS" do fontawsome */
        verify_icon.setAttribute("style", "color: #FF6347;"); 
        div_verify_icon.removeAttribute("hidden");
        elemento.setAttribute("style", "border-bottom: 1px solid #FF6347; -webkit-box-shadow: 0 1px 0 0 #FF6347;");
    }
}

function comparator_pass(valor, elemento)
{
    var comparator = "green@mail.com";
    var verify_icon = document.getElementById("verify-icon-pass");
    var div_verify_icon = document.getElementById("div-verify-icon-pass");

    if (valor == comparator)
    {
        verify_icon.setAttribute("class", "fas fa-check");
        verify_icon.setAttribute("style", "color: #87BE56;");
        div_verify_icon.removeAttribute("hidden");
        elemento.setAttribute("style", "border-bottom: 1px solid #87BE56;")
    }else
    {
        verify_icon.setAttribute("class", "fas fa-minus-circle");
        verify_icon.setAttribute("style", "color: #FF6347;");
        div_verify_icon.removeAttribute("hidden");
        elemento.setAttribute("style", "border-bottom: 1px solid #FF6347; -webkit-box-shadow: 0 1px 0 0 #FF6347;");
    }
}