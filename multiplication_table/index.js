for(var j=1;j<=9;j++){
	for(var i=1;i<=j;i++){
		document.write(`${j}*${i}=${i*j} `);
		if(i==j) document.write("<br>");
	}
}