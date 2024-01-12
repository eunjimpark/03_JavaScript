//변수 선언
//document(문서) : HTML문서 (파일)내에서
//get : 얻다
//Element : HTML요소
//ById : 아이디가 일치하는

//ㅡ> HTML문서 내에서 ()내 아이디가 일치하는 요소를 얻어오겠다
const number1  = document.getElementById("input1");

const number2  = document.getElementById("input2");

const result  = document.getElementById("calcResult");

/* 두 수를 더해서 화면에 출력하는 함수 (기능) */
function plusFn(){
    /* input요소. value : input요소에 작성된 값 얻어오기*/
    const value1 = number1.value;
    const value2 = number2.value;

    console.log(value1, value2);

    console.log("두수의합:", value1+value2);
    //->input요소에 작성된 값은 무조건 문자열(string) 형태라서 더했을때 이어쓰기 되는 문제가 발생
    //[해결방법] 
    //문자열(string)을 숫자(nimber)로 변경하는 코드를 수행
    //->데이터 파싱(data parsing) : 데이터의 종류를 바꿈 

    /* 숫자만 작성된 문자열("123")을 진짜 숫자로 (123)으로 바꾸는 방법 */
    //-> Number("123") -->123

    console.log("두 수의 합 : ", Number(value1)+Number(value2));
    
    /* 두수의 합을 아이디가 calcResult인 요소의 내부 글자(innerText, 내용)으로 대입하기 */
    result.innerText = Number(value1)+Number(value2);
}//plusFn 끝


function minusFn(){    
    // string으로 얻어온 값을 바로 number로 변환하여 변수대입
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("value1:", value1, typeof value1);
    console.log("value2:", value2, typeof value2);

    result.innerText= value1- value2;
}

function multiFn(){    
    // string으로 얻어온 값을 바로 number로 변환하여 변수대입
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("value1:", value1, typeof value1);
    console.log("value2:", value2, typeof value2);

    result.innerText= value1*value2;
}

function divFn(){    
    // string으로 얻어온 값을 바로 number로 변환하여 변수대입
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("value1:", value1, typeof value1);
    console.log("value2:", value2, typeof value2);

    result.innerText= value1/value2;
}

//나머지연산함수
//나머지 연산은 나누기 계산시 몫이 정수인 부분까지만 계산하고 남은 나머지값을 출력
function modFn(){    
    
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("value1:", value1, typeof value1);
    console.log("value2:", value2, typeof value2);

    result.innerText= value1%value2;
}

//(응용)3개의 수 합계 출력하기

const num1  = document.getElementById("num1");
const num2  = document.getElementById("num2");
const num3  = document.getElementById("num3");

const total  = document.getElementById("total");


function totalFn(){

    const value1 = Number(num1.value);
    const value2 = Number(num2.value);
    const value3 = Number(num3.value);

    total.innerText= value1+value2+value3;

}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/* 증가/감소 연산자(++,--) */

//증가, 감소할 수를 저장할 변수 선언
let count = 0; //(주의) const 로 선언하면 값을 증가/감소 시킬수없다
//문서 내에서 id가 "result2"인 요소를 얻어와 result2 변수에 대입
const result2 = document.getElementById("result2");

/* 1증가함수 */
function increase(){
    count++;   //++count
    //증가한 count 값을 result2의 내용으로 대입
    result2.innerText = count;
}

/* 1 감소 함수 */
function decrease(){
    count--;   //--count

    result2.innerText = count;
}

/* 전위 후위 연산 확인하기 */
function check1(){

    //밖에 작성한 변수 count, 안에 작성한 count는 서로 다른 변수(동명이인)
    let count = 100;

    //전위 연산(++count, --count)확인
    console.log("++count :", ++count);
    console.log("++count :", ++count);
    console.log("++count :", ++count);
    console.log("------------------");
    console.log("--count :", --count);
    console.log("--count :", --count);
    console.log("--count :", --count);


    //후위연산 (count++. count--)
    // ->다른연산이 다 끝나고 마지막에 수행
    count = 50;
    console.log("---------------")
    console.log("count++",count++);//50출력후 51로증가
    console.log("후위 연산 후 count :", count);//51

    console.log("count--",count--); //51출력후 50으로감소
    console.log("후위 연산 후 count: ", count);

    console.log("---------------------------------------------")

    let a=10;
    let b=5;
    let c= ++a * b--;
    //최종값  a=11 b=4 c=55


}
