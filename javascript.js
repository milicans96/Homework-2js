for(i=1; i<=10;i++) {
	if (i%2===0){
		console.log("Broj " + i + " je paran");
	}
	else {
		console.log("Broj " + i + " je neparan");
	}
}



var number = prompt("Unesite broj");
var summary = 0;
for (i=1; i<=number; i++) {
	summary += i; 	
}
console.log(summary);


var number = prompt("Unesite broj");
var summary = 1;
for (i=1; i<=number; i++) {
	summary = summary * i; 	
}
console.log(summary);



var price = prompt ("Unesite koliko kosta artikal");
var budget = prompt ("Unesite koliki je vas budzet");
var you_can_buy = budget / price ; 
console.log(parseInt(you_can_buy));
