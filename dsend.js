$(document).ready(function(){
$("#simplepost").click(function(e)
{
var MyForm = $("#myForm").serializeJSON();
console.log(MyForm);
 $.ajax(
 {
 url : "",
 type: "POST",
 data : {valArray:MyForm},
 success:function(maindta)
 {

alert(maindta);

 },
 error: function(jqXHR, textStatus, errorThrown)
 {
 }
 });
 e.preventDefault(); //STOP default action

});
});