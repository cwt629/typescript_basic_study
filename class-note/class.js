function Person(name, age){
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 100);

// class : ES2015 (ES6)부터 추가된 문법
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성되었습니다');
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30); // 콘솔에 '생성되었습니다' 출력될 것.
console.log(seho);

/*
상속과 프로토타입 (prototype)

user 중 한 명인 admin을 정의할 때, 다음과 같이 정의할 수도 있다.
-----------------------------------------------------------------------
var user = {name: 'capt', age: 100};
var admin = {name: 'capt', age: 100, role: 'admin'};
-----------------------------------------------------------------------

하지만, 저 겹치는 내용의 경우는 부모 객체를 따로 만들어
상속받을 수도 있다.

자바스크립트에서는 프로토타입 상속이라는 개념이 존재하며,
아래와 같이 활용 가능하다.
-----------------------------------------------------------------------
var user = {name: 'capt', age: 100};
var admin = {};
admin.__proto__ = user; // admin의 prototype을 user로 설정
console.log(admin.name, admin.age); // capt와 100이 잘 나온다.

admin.role = 'admin';
console.log(admin); // {role: 'admin', [[Prototype]]: Object... 그 안에 age와 name이 있음}
-----------------------------------------------------------------------

*/
