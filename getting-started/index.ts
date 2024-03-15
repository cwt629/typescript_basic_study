function add(a: number, b: number) {
    return a + b;
}

add(10, 20);

// 컴파일(compile): ts 파일을 js 파일로 변환

/* 
타입스크립트 프로젝트 시작하기
1. 폴더 우클릭 - 터미널에서 실행
2. npm i typescript -g
    => tsc 라는 명령어 수행하기 위해 설치함!
3. tsc index.ts
    => 이 ts 파일을 js 파일로 변환하여 저장해줌

    tsc같은 명령어를 계속 써주기보다는,
    웹팩(webpack)과 같은 자동화된 툴을 쓰면 좋다.
*/

/* 
컴파일 옵션 설정
: tsconfig.json
*/