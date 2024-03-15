// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/* jsdoc을 활용하여 각 object 타입을 정의할 수 있다! 
그러면 이후 address. 을 누르면, 자동으로 street과 city가 위에 보인다든지... 훨씬 편함.
*/

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * 
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

/*fetchUser().then(function (response) {
  response.address.
})*/

function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      //console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      //address.innerText = user[0].address; // [object Object]라고 뜬다...이럴 때 ts가 필요!
      // 위와 같은 오류는 화면으로 가야만 확인할 수 있게 된다...

      address.innerText = user[0].address.street;
      // address.innerText = user[0].addres; // 이런 경우 에러가 바로 발생하게 되는데, 이를 화면이나 콘솔 상으로만 알 수 있게 된다.
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
