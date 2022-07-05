function isNumberSimple(number){
    let isSimple = true;
    if (number > 1 && number <= 1000) {
        for (var i = 2; i < number - 1; i++) {
            if (number % i == 0) {
                isSimple = false;
            }
        }
        console.log(`Является ли число ${number} простым: ${isSimple}`);
    } else {
        console.log("Данные неверны");
    }
}

isNumberSimple(7);