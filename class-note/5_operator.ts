// function logMessage(value: any){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

/* 위와 같이 any라고 쓰면, 타입 정의에 대한 메리트가 없어짐
그냥 boolean과 같은 다른 타입을 넣어도 다 작동하는 것이고.

더 좋은 방법이 없을까?

| 연산자를 활용해, 유니온 타입(union type)을 활용한다!
이는 두 개 이상의 타입을 활용할 수 있게 해준다.
*/

var seho5: string | number | boolean;
function logMessage(value: string | number){
    /*
    유니온 타입의 장점
    
    아래와 같이 타입에 따른 조건부 블록이 있다고 하자.
    그럼 저 내부에서 'value.'까지 입력해보면,
    타입이 any일 때와는 다르게
    각 블록에 들어올 타입에 알맞게
    그 타입에 쓸수 있는 메소드들이 나온다.
    그래서 코드를 짤 때 보다 더 편하게 작성할 수 있다.

    이와 같이 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정을
    '타입 가드'라고 한다.
    */
    if (typeof value == 'number'){
        value.toLocaleString();
    }
    if (typeof value == 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

/*
유니온 타입의 특징
*/

interface Developer5 {
    name: string;
    skill: string;
}

interface Person5 {
    name: string;
    age: number;
}

function askSomeone(someone: Developer5 | Person5){
    /* 
    인자로 받은 someone은 Developer5이거나 Person5이다.
    여기서 'someone.'을 입력하게 되면,
    합집합 느낌으로 name, skill, age 모두
    자동완성 목록에 나올 것이라고 예상할 수도 있다.
    그러나 실제로는 그렇지 않다.
    공통되는 속성인 name만이 자동완성 목록에 나오고
    나머지 skill과 age는 등장하지 않는다.

    타입스크립트 관점에서는 이 someone에
    Developer5 타입이 들어올지, Person5 타입이 들어올지
    전혀 모르는 상태이다.
    이 때 여기서 someone.skill 과 같은걸 입력하게 되면
    type-safe하지 않다고 여기기 때문에, 빨간줄이 그어지고 오류가 난다.
    */
   let name = someone.name;
//    let skill = someone.skill;
//    let age = someone.age;

   // skill이나 age와 같은 속성을 접근하려면, 타입 가드를 활용하자!
}



/*
& 연산자를 활용한 intersection type
*/
var seho5_2: string | number | boolean;
var capt5: string & number & boolean; // string이면서 number이면서 boolean...마우스 올리면 never라고 뜸

function askSomeone2(someone: Developer5 & Person5){
    /*
    intersection type은 타입 가드가 별도로 필요 없이
    이미 someone이 Developer5와 Person5가 가지는 속성을
    모두 포함하는 타입이라고 파악되어
    name, skill, age 모두를 사용할 수 있다.

    그렇지만 실제로는 이것보다는 union type을 더 많이 쓰게 될 것.
    */
}

// union type - 보통 이런 식으로 타입별로 넘겨줌
askSomeone({name: '디벨로퍼', skill: '웹 개발'}); // Developer5
askSomeone({name: '캡틴', age: 100}); // Person5

// intersection type - Developer5와 Person5의 타입들이 모두 필요하다
askSomeone2({name: '디벨로퍼', skill: '웹 개발', age: 34});