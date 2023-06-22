//code pour manipuler le DOM
//syntaxe jquery $(localisateur).action()
//On localise l'element dans le DOm puis on effectue une action sur lui
//$("p").hide(); //hide paragraphe
/*
https://api.jquery.com/
https://www.w3schools.com/jquery/jquery_ref_selectors.asp
*/
$(document).ready(function()
 {
    //lorsque je clique les elts se masquent
    //localisateur par tagname, balise de l'elt a manipuler

 /*    $("button").click(function(){
        $("p").hide();
        $("h1").hide();
    }) */
//type de localisation par id
//jquery utilise localisateur par css
 /*    $("button").click(function(){
    $("#demo").hide();
    }) */
    //type de localisation par id
     $("button").click(function(){
    $(".c").hide();
    })
});
