function add(a: number, b: number): number {
    return a + b;
}

//add(10, '20'); // 에러 사전 방지 장점!
var result = add(10, 20);
result.toLocaleString(); // .을 누를 때, number에서 제공되는 API를 볼 수 있음!(Intellisense)

/* 타입스크립트의 추론:
    함수 리턴 타입을 정의하지 않은 상태에서
    add(10, 20)같은 걸 쓰고 마우스 오버를 해보면,
    그 리턴 타입이 number라고 되어 있는것을 알 수 있음.
    이는 타입스크립트가 해당 타입을 추론한 것!
*/