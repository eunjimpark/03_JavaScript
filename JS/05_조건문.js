// if- 양수인지 검사

const input1 = document.getElementById("input1");

function check1(){

    const value = Number(input1.value);

    if(value > 0)  {   //value가 0보다 커서 true인 경우
        alert("양수입니다.");
    }
    if(value <= 0){
        alert("양수가아닙니다.");   
    }

}


//-------------if-else 홀짝판별하기-----------------------------------------------
function check2(){

    //난수 발생 : Math.random()  ->범위는 0 <= Math.random() <1
    const randomNumber = Math.floor(Math.random()*101);

    if(randomNumber%2==0){
        alert("짝수입니다.");
    }
    else{
        alert("홀수입니다.");
    }


}

function check3(){

    const randomNumber2 = Math.floor(Math.random()*7)-3;

    let message = randomNumber2 + "은/는";

    if(randomNumber2>0){
      //  message= message + "양수 입니다";
     // message += "양수입니다";
        alert("양수입니다.");
    }
    else if(randomNumber2<0){
        alert("음수입니다.");
    }
    else{
        alert("0입니다.");
    }

}


/* 어린이, 청소년, 성인 판별 */
const inputAge = document.getElementById("inputAge"); // input

function check4(){

  // 입력한 나이 값 얻어오기
  const age = Number(inputAge.value);

  console.log("age : ", age);

  /* 빈 문자열 ("", '') : 내용이 없는 문자열 */

  /* "문자열".length  : 문자열의 길이 */
    //입력된 나이의 길이가 0인경우 ==입력안한경우
  if(inputAge.value.length ==0){
    alert("미입력");
  }else {//입력한 경우 ->이 때 어린이 청소년 성인 검사
    
     // if( !(age >= 0 && age <= 150)  ){ // 0 ~ 150 사이가 아닌 경우
    if( age < 0 || age > 150  ){ // 0 ~ 150 사이가 아닌 경우
        alert("잘못 입력 하셨습니다")
    
    } else if(age >= 0  && age <= 13){  // 어린이
        alert("어린이");

    } else if(age <= 19) { // 청소년
        alert("청소년");
        
    } else { // 성인
        alert("성인");
    } 
 }
}


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡswitch를 이용한 계산기
const number1 = document.getElementById("number1");  //input
const number2 = document.getElementById("number2");
const calcResult = document.getElementById("calcResult"); //span

function calc(op){
    //매개변수 op
    //-함수 호출시 전달되는 값을 저장하는 변수
    //ex)calc('+') //함수호출
    // '+'값이 op변수에 저장되어짐

    //전달인자(Argument): 함수호출시 괄호 안에 적는값
   //() 내부에 작성한 값이 함수 매개 변수로 전달된다

    console.log("op:", op);

    const v1= Number(number1.value);
    const v2= Number(number2.value);

    //switch문
    //switch(식)에서 ->식은 다양한값이 나올수있는 변수나 계산식
   
    let result; //결과 저장 변수 선언
    
    switch(op){
        
        case '+': result = v1+v2; break;
        case '-': result = v1-v2; break;
        case '*': result = v1*v2; break;
        case '/': result = v1/v2; break;
        case '%': result = v1%v2; break;
       
        // 맞는 케이스가 없을 경우에 적용할 기본값 (else)
        default : result = "잘못된 연산자"; break;
    }

    calcResult.innerText = result;

    //if문 버전----------------------------------------------
    //op가 '+'인경우
    // if(op=='+'){
    //     calcResult.innerText = v1+v2;
    // }
    // else if(op == '-'){
    //     calcResult.innerText = v1-v2;
    // }
    // else if(op == '*'){
    //     calcResult.innerText = v1*v2;
    // }
    // else if(op == '/'){
    //     calcResult.innerText = v1/v2;
    // }
    // else if(op == '%'){
    //     calcResult.innerText = v1%v2;
    // }
    // else {
    //     calcResult.innerText = "잘못된연산자";
    // }
}




