// JS 문자열 선언 방식
//var str = 'hello';

// TS 문자열 선언 방식
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']
let items: number[] = [1, 2, 3];

// TS 튜플 : 배열의 특정 인덱스의 타입 정의
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
let person: object = {
    name: 'capt',
    age: 100
};
// 객체를 조금더 구체적으로 정의하고 싶다면
let person2: { name: string, age: number } = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;