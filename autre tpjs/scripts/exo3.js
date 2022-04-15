var table = prompt();

for (let i=1; i<=100 ;i++){
    document.write(table * i + " ")
    if(i % 10 == 0){
        document.write("<br>")
    }
}