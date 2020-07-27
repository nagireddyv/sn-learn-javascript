var requestBody = ""; 

var client=new XMLHttpRequest();
client.open("get","https://dev58244.service-now.com/api/518963/record_finder/l36s01");

client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'HAVE@greatday365'));

client.onreadystatechange = function() { 
	if(this.readyState == this.DONE) {
		document.getElementById("response").innerHTML=this.status + this.response; 
	}
}; 
client.send(requestBody);

console.log(requestBody);