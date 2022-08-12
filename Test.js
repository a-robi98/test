function test(number)
{
    let numbers = [];
    let numbersValue = []; // az összegek itt ebben a tömbben vannak eltárolva

    for (var i = 0; i < number.toString().length; i++) {
        numbers[i] = parseInt(number.toString().split("")[i]);
        numbersValue[i] = 0;
    }
    console.log(numbers);
    //itt már fel van töltve a numbers tömb
    for (var i = 0; i < numbers.length; i++) {

        let visionValueLeft = i - numbers[i];
        let visionValueRight = i + numbers[i];

        let idxLeft = i - 1;
        let idxRight = i + 1;
        while ((idxLeft >= 0) && (idxLeft >= visionValueLeft)) {
            numbersValue[i] += numbers[idxLeft];
            idxLeft--;
        }
        while ((idxRight < numbers.length) && (idxRight <= visionValueRight)) {
            numbersValue[i] += numbers[idxRight];
            idxRight++;
        }
    }
    // eldöntés
    let isThereNumber = false;
    // feltételezzük, hogy nincs nála kisebb érték, tehát alapvetően true
    let tmpBool = false;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] == 1) {
            var tmp = numbersValue[j];
            tmpBool = true;
            for (var z = 0; z < numbers.length; z++) {
                if ((numbersValue[z] < tmp) && (numbers[z] != 1) && (j != z)) {
                    tmpBool = false;
                }
            }
        }
    }

    console.log(numbersValue);
    isThereNumber = tmpBool;
    return isThereNumber;
}


// tesztesetek
let isThere1 = test(34315);
console.log(isThere1);
let isThere2 = test(34325);
console.log(isThere2);
let isThere3 = test(111);
console.log(isThere3);
let isThere4 = test(314315);
console.log(isThere4);
let isThere5 = test(2379189);
console.log(isThere5);
let isThere6 = test(0);
console.log(isThere6);