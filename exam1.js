function myFun() {
    var header = document.getElementById('demo');
    var header2 = document.getElementById('demo2');
    var myArr = [55455,55488,14785,14152,31312,87941,52369,16785,94027,30876,75294,46103,21579,68420,39015];
    var randomnumber = Math.floor(Math.random() * myArr.length);
    var randomnum = myArr[randomnumber];
    header.innerHTML = randomnum;
    header2.innerHTML = randomnum;
    console.log(randomnum);
    
}