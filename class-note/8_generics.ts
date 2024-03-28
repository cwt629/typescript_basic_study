// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // number
// logText('ㅎㅇ'); // string
// logText(true); // boolean

/*
제너릭은, 타입을 인자로 받을 수 있는 것
*/
// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText('ㅎㅇ'); // 마우스 올려보면 T에 다 'ㅎㅇ'라고 들어감
// logText<string>('ㅎㅇ'); // 마우스 올려보면 T에 다 string이라고 들어감

function logTextOriginal(text: string) {
    console.log(text);
    text.split('').reverse().join(''); // 문자열이기 때문에 가능한 것
    return text;
}
/*
위와 같은 함수는 string만 받을 수 있게 되므로, 
숫자나 boolean과 같은 다른 타입에도 받으려면 
함수를 따로 만들어야 함..
이러면 유지 보수에 좋지 않고 재사용성이 안 좋음.
*/
function logNumberOriginal(num: number) {
    console.log(num);
    return num;
}

logTextOriginal('a');
// logTextOriginal(10);
const num = logNumberOriginal(10);
// logTextOriginal(true);

/*
위를 해결하기 위해 유니온 타입을 지정한다?
이러면 text. 을 칠 때 나오는 preview에는
string과 number 공통 메소드들만 확인할 수 있다는 문제점.

또 다른 문제는, 'a'라는 문자를 넣었음에도
그 결과값을 받아 문자열 메소드를 사용하면
오류가 난다.
아직 타입이 string|number 이라고 부정확하게 되어 있기 때문.
*/
function logTextUnion(text: string | number) {
    console.log(text);
    return text;
}
const a = logTextUnion('a');
// a.split('') // Error!
logTextUnion(10);

/*
이제 제너릭으로 만들어보자.
*/
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split(''); // 문자열이 들어왔음을 확인할 수 있다!
const login = logText<boolean>(true);

/*
interface에 generic 선언하기
*/
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = {value: 'abc', selected: false};

interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false };
const myobj: Dropdown<number> = { value: 12, selected: false };


/*
제네릭의 타입 제한
T[]이라고 하면 배열이라는 제한을 둘 수 있음.
*/
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length); // text: T라고 하면 오류가 남. T[]이라고 하면 배열이라는 힌트가 되어서 length 쓸수는 있는데, string은 못들어감...
    text.forEach(function (t) {
        console.log(t);
    })
    return text;
}
// logTextLength<string>('hi');
logTextLength<string>(['hi', 'abc']);

/*
제네릭 타입 제한 2 - 정의된 타입 이용하기
*/
interface LengthType {
    length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
    text.length; // LengthType에 있는 length라는 속성은 반드시 있다고 제한 가능!
    return text;
}
logTextLength2('a');
//logTextLength2(10); // length가 없으므로 error
logTextLength2({ length: 10 });

/*
제네릭 타입 제한 3 - keyof
*/
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// ShoppingItem에 있는 key들 중 하나가 type이 된다. 그 parameter로 name, price, stock 중 하나가 들어온다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
// Ctrl + Space로 자동완성으로 보면서, 받는 인자를 볼 수 있음!
getShoppingItemOption("name");