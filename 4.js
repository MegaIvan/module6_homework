function numberInterval(a, b) {
    var i = a;
    setInterval(function() {
        if (i > b) {
            clearInterval(this);
        } else {
            console.log(i);
            i++;
        }
    }, 1000);
}

numberInterval(5, 15);

