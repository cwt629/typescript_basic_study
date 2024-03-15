// interface Person4 {
//     name: string;
//     age: number;
// }

// type 별칭
type Person4 = {
    name: string;
    age: number;
}

/* 
interface와 type의 차이?

interface로 선언하면, Person4에 마우스 오버했을 때
그냥 interface Person4 라고만 뜬다.
하지만 type으로 선언하면, 똑같이 마우스 오버했을 때
그 내부 키들에 해당하는 타입들도 확인할 수 있다!

interface로 만들면, 그 인터페이스명에 Ctrl + 마우스오버로도
내부 타입까지 확인할 수 있을 뿐 아니라,
Ctrl + 클릭을 통해
다른 문서에 있더라도 그 인터페이스 정의부로 넘어갈 수 있다.
물론 이건 type에도 해당된다.

다만 interface의 장점은,
type은 확장이 불가능한 반면 interface는 확장 가능하다는 것이다.

그래서, type보다는 interface로 선언해 사용하는 것이 권장된다.
*/
var seho: Person4 = {
    name: '세호',
    age: 30
}

type MyString = string;
var str4: MyString = 'hello';

type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}