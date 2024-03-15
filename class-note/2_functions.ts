// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number){
//     return a + b;
// }

// sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a + b;
}
//sum(10, 20, 30, 40); // 함수의 스펙(모습, 규칙)을 정확히 이해한 상태라, 다른 개수의 인수에 오류 발생

// 함수의 옵셔널 파라미터(선택적 파라미터) : 필요에 따라 생략할 수도 있는 파라미터
function log(a: string, b?: string) {

}
log('hello world'); // 2개가 아니라 1개여도 작동!
log('hello ts', 'abc')