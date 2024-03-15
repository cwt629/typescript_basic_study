// 숫자형 이넘: 0, 1, ...
// enum Shoes {
//     Nike,
//     Adidas
// }

// // 아래와 같이 작성하면 10에서부터 1씩 증가한다. 그래서 Adidas는 11이 됨.
// // enum Shoes {
// //     Nike = 10,
// //     Adidas
// // }

// var myShoes = Shoes.Nike;
// console.log(myShoes); // 0


// 문자형 이넘
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer){
    /* dropdown 등 목록이 필요한 경우에 enum 사용할 수 있다
    그래서 enum 끼리의 비교를 수행할 수 있다.
    */
    if (answer == Answer.Yes){
        console.log('정답입니다');
    }
    if (answer == Answer.No){
        console.log('오답입니다');
    }
}

// askQuestion('yes');
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
askQuestion(Answer.Yes);

