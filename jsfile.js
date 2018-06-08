		function compute(){
		    var cost1= parseFloat(document.getElementById("cost1").getAttribute("value"));
		    var cost2= parseFloat(document.getElementById("cost2").getAttribute("value"));
		    var cost3= parseFloat(document.getElementById("cost3").getAttribute("value"));
			var sub_total=cost1+cost2+cost3;
			var subtotal=parseFloat(sub_total.toFixed(2));
			document.getElementById("subtotal").innerHTML = subtotal;
			var vatf= subtotal*0.2;
			var vat= parseFloat(vatf.toFixed(2));
			document.getElementById("VAT").innerHTML = vat;
			console.log("dcbsdhbcs="+subtotal);
			var total=parseFloat(vat+subtotal);
			var totalcost= total.toFixed(2);
			document.getElementById("total").innerHTML = totalcost;
			return 1;
		}
		window.onload=compute;
		function deleterow(){
			var r1=document.getElementById("r1").getAttribute("value");
			var r2=document.getElementById("r2").getAttribute("value");
			var r3=document.getElementById("r3").getAttribute("value");
			if (r1==1) {document.getElementById("myTable").deleteRow(1);console.log("reached in r1"+r1);}
			if (r2==1) {document.getElementById("myTable").deleteRow(2);console.log("reached in r2"+r2);}
			if (r3==1) {document.getElementById("myTable").deleteRow(3);console.log("reached in r3"+r3);}
			r1,r2,r3=parseInt(0);
			// console.log("reached in bla bla"+r1+r2+r3);
		}
		function addval1(){
			var value = document.getElementById('qty').value;
			if(value<10)
			    {
				    value++; var cval=1.99*value;
				    document.getElementById('qty').value = value;
				    var aaa=document.getElementById("cost1").innerHTML = cval;
				    var bbb= document.getElementById("cost1").setAttribute("value",cval);
				    compute();
			    }
			    if (value>10) {alert("Invalid value!")}
			}
			function subtractval1(){
				var value = document.getElementById('qty').value;
			    if (value>1) 
			    {
				    value--;
				    document.getElementById('qty').value = value;
				    var abc=document.getElementById('cost1').innerHTML;
				    var def=abc-1.99;
				    var fcost=def.toFixed(2);
				    document.getElementById("cost1").innerHTML = fcost;
				    var bbb= document.getElementById("cost1").setAttribute("value",fcost);
				    compute();
			    }
			    if (value<0&& value==1) {document.getElementById('cost1').innerHTML = 1.99;alert("Invalid value!")}
		}
		function addval2(){
			var value = document.getElementById('qty1').value;
			if(value<10)
			    {
			    value++; var cval=2.99*value;
			    document.getElementById('qty1').value = value;
			    var aaa=document.getElementById("cost2").innerHTML = cval;
			    var bbb= document.getElementById("cost2").setAttribute("value",cval);
			    compute();
			    }
			    if (value>10) {alert("Invalid value!")}
			}
			function subtractval2(){
				var value = document.getElementById('qty1').value;
			    if (value>1) 
			    {
				    value--;
				    document.getElementById('qty1').value = value;
				    var abc=document.getElementById('cost2').innerHTML;
				    var def=abc-2.99;
				    var fcost=def.toFixed(2);
				    document.getElementById("cost2").innerHTML = fcost;
				    var bbb= document.getElementById("cost2").setAttribute("value",fcost);
				    compute();	
			    }
			    if (value<0&& value==1) {document.getElementById('cost2').innerHTML = 2.99;alert("Invalid value!")}
		}
			function addval3(){
			var value = document.getElementById('qty2').value;
			if(value<10)
			    {
				    value++; var cval=3.99*value;
				    document.getElementById('qty2').value = value;
				    var aaa=document.getElementById("cost3").innerHTML = cval;
				    var bbb= document.getElementById("cost3").setAttribute("value",cval);
				    compute();			   
			    }
			    if (value>10) {alert("Invalid value!")}
			}
			function subtractval3(){
				var value = document.getElementById('qty2').value;
			    if (value>1) 
			    {
				    value--;
				    document.getElementById('qty2').value = value;
				    var abc=document.getElementById('cost3').innerHTML;
				    var def=abc-3.99;
				    var fcost=def.toFixed(2);
				    document.getElementById("cost3").innerHTML = fcost;
				    var bbb= document.getElementById("cost3").setAttribute("value",fcost);
				    compute();
			    }
			    if (value<0&& value==1) {document.getElementById('cost3').innerHTML = 3.99;alert("Invalid value!")}
		}