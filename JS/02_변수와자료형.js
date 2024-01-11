
/* console.log(값) */

//브라우저 콘솔 괄호() 내부의 값을 기록(출력)

console.log(1234);

console.log("문자열은 양쪽에 쌍따옴표를 작성해야 한다!");

console.log('JS는 홑따옴표도 문자열로 취급한다!');

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* 변수 선언 */
//메모리에 값을 저장할 공간을 만들고 이름을 붙이는것 
//*****작성법 : 변수종류 변수명;

var number1;

/* 변수에 값 대입 */
//선언된 변수에 값을 대입하는 것
//*****작성법: 변수명 =값;



number1=10;

/* 콘솔에 number1값 출력하기 */
console.log(number1);

/* 변수선언 + 대입 */
var number2;
number2=20;

/* number1, number2의 합 출력하기 */
console.log(number1+number2);  //30

/* 변수에 대입한 값 변경하기 */

number1=300; //number1에 300대입(기존값 10을 덮어쓰기함)
number2=400;

/* 변경된 두 변수의 값 출력 */
/* 1)문자열+ 문자열/숫자/변수  == 이어쓰기*/
console.log("number1의 값:" + number1);
console.log("number2의 값:" + number2);

/* 2)괄호 내부에 ,를 작성해 각각의 값을 독립적으로 출력하기 */

console.log("number1: ", number1, "/number2:", number2);


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/* var, let, const 의 차이점  */
//1.var(변수, 변수 선언시 중복되는 변수명으로 선언 가능)
//        -> 먼저 선언된 변수가 나중에 선언된 변수한테 밀림
var menu = "삼겹살";
console.log("menu:", menu);

var menu = "초밥"
console.log("menu: ", menu);
//변수명이 중복되어 덮어쓰기 되면 이전에 선언해놓은 변수를 쓸수 없다(나중에쓰려고할때)



//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//2. let (변수, var의 변수명 중복 문제 해결)
let number3 =25;

// let number3 = 500;  //'number3'를 다시 선언할수 없다.!

number3 = 500;  //기존변수에 새로운 값만 대입

console.log("number3 : ", number3);
    

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//3. const (상수, constant, 항[상] 같은 [수] )
//한번 값이 대입되면 새로운값을 대입할수 없어

const PI= 3.141592;

// PI=1.23;  에러가 안나지만 안됨


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* JS자료형 확인하기 */
/* typeof 연산자: 변수/값의 자료형을 출력하는 연산자 */

/* undefined : 정의되지 않은 변수/ 값이 아직 대입되지 않았다 */
let undef; // 변수 선언
console.log("undef:",undef, typeof undef);

/* string(문자열): ""또는 ''내부에 작성된 값 */
const name = "홍길동"; // 쌍따옴표
console.log("name:", name, typeof name);
const phone = '01012341234'; //홑따옴표
console.log("phone:", phone, typeof phone);

const gender = 'M' //한글자만 작성해도 문자열(string)
console.log("gender:", gender, typeof gender);


/* number (정수,실수,양수, 음수, 0등 모든숫자) */
const age= 25;
const height= 178.9;

console.log("age:", age, typeof age);
console.log("height:", height, typeof height);


/* boolean (논리값 true / false) */
const isTrue= true;
const isFalse = false;

console.log("isTrue:", isTrue, typeof isTrue);
console.log("isFalse:", isFalse, typeof isFalse);


/* object 객체 */
//값을 여러개 저장할 수 있는 형태
//1)배열(array): 여러 값이 나열되어 있는 것의 묶음
const numbers = [10, 20 ,30];
console.log("numbers : ", numbers, typeof numbers);
console.log("numbers 배열값중 0번째 : ", numbers[0], typeof numbers[0]);
console.log("numbers 배열값중 1번째 : ", numbers[1], typeof numbers[1]);
console.log("numbers 배열값중 2번째 : ", numbers[2], typeof numbers[2]);

//2)JS객체 (Object)
//값을 K:V (Map형식 )으로 여러개 저장하는 형태 -> {K:V, K:V, K:V....}
 //k(key) : 값을 구분하는 이름( 변수명비슷 )
 //V(value) : key에 대응되는 값(변수에 대입되는 값 비슷)

 const user = {id: "user01",pw:"pass01", userName: "김길동"};

 //방법1: 변수명['key']
 console.log("user:" , user, typeof user);
 console.log("user['id']:",user['id'], typeof user['id']);
 console.log("user['pw']:",user['pw'], typeof user['pw']);
 console.log("user['userName']:",user['userName'], typeof user['userName']);

//방법2 : 변수명.key
console.log(user.id, user.pw, user.userName);

/* 함수(function) */
//const 변수명 = function(){};
//(변수명==함수명)
const sumFn = function(a,b){return a+b;}
console.log(typeof sumFn);  //function
console.log(sumFn (3,5)); //함수호출
