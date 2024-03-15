class Person7 {
    // 타입스크립트에서는 멤버 변수 타입이나 유효 범위를 먼저 정의해줘야 함
    private name: string;
    public age: number;
    readonly log: string; // 접근(읽기)만 할수있고 실제 데이터 변경 불가

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 리액트 예전 문법
// class App extends React.Component {

// }

// 리액트 최신 문법 - 훅 기반의 함수형 코드
// function App(){
//     return <div>Hello World</div>
// }

// Vue 문법?
// new Vue({
//     el: '',
//     setup() {

//     }
// })