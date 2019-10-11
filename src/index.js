module.exports =  function zeros(expression) {
    function calcZero(objNumSett){
        let { mult, number, even} = objNumSett;
        let i;
        // в зависимости от разрядности факториала - формируем начальную
        // позицию - при одиночном - всегда 1, при двойном - зависит от
        // четности!
        // Шаг факториала(2 или 1) задается в счетчике фора - i+=mult
        if(mult == 1){i = 1}else{
            i = even;
        }
        //___________________________________________________
        // в цикле раскладываем данное число на шаги факториала и смотрим -
        // шаговое число делится на 5 или на 2, если да - то, что остается
        // от деления делится на 2 или на 5 - так подсчитываем сколько у
        // нас есть множителей 2 и 5
        for(; i <= number; i+=mult){
            if(i % 5 == 0){
                five++;
                let temp = i/5;
                while(temp>1){
                    if(temp % 5 == 0)five++;
                    temp /=5
                }
            }


            if(i % 2 == 0){
                two++;
                let temp = i/2;
                while(temp>1){
                    if(temp% 2 == 0)two++;
                    temp /=2
                }
            }


        }

    }
    let two = 0;
    let five = 0;
    let arrExpSpread = [];
    let arrExp = expression.split("*");
    // формируем массив с числом и параметрами - чет, и разрядность факториала
    arrExp.forEach(function(item) {
        let number = +item.slice(0, item.indexOf("!"));
        let mult = item.indexOf("!!") == -1 ? 1 : 2;
        let even = number % 2 == 0 ? 2:1
        arrExpSpread.push({
            number,
            mult,
            even
        });
    });
//_______________________________________________________
// перебираем масив со всей необходимой инфой и передаем каждый элем масива
// в фу, которая подсчитывает кол-во х5 и х2
    arrExpSpread.forEach(function(objNumSett){
        calcZero(objNumSett);
    });

    return Math.min(two, five);
}
