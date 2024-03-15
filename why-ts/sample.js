// function sum(a, b) {
//     return a + b;
// }
// sum(10, '20'); // 숫자와 문자를 더하므로 전부 문자열로 취급해 1020으로 나올 것.



/* 자바스크립트를 타입스크립트처럼 코딩하는 방법 : 
1. jsdoc
2. @ts-check 기능(아래 주석!)
*/

// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns 
 */
function sum(a, b) {
    return a + b;
}
//sum(10, '20'); // ts랑 다르게 잘못됐다라고 알려주지는 않음