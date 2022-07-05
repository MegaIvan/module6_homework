function First(a) {
    const Second = function(b) {
        console.log(a + b);
    }
    return Second(15); 
}

First(20);
