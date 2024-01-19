
const input1 =document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

//두개 값을 전달받아 출력하는 함수
function print1(num, str){
    console.log(`${num}은/는${str}입니다`);
}

//btn1 클릭시 #input1의 값을 읽어와 print1()함수 호출

btn1.addEventListener("click", function(){

    const value = input1.value;
    //input1에 값이 입력이 안되있거나, 빈칸만 입력된 경우

    if(value.trim().length == 0){
        console.log("숫자를 입력해 주세요");
        return;
    }

    let result;
    if(Number(value) == 0 )  result = "0";
    else if(Number(value)>0) result = "양수";
    else                     result = "음수";

    //함수호출 (값전달)
    print1(value, result);
    print1(result, value);  //순서반대로



 });

 //매개변수로 배열 전달하기
 function arrayTest(arr){
    //전달받은 배열의 모든 요소 출력하기

    for(let i =0; i <arr.length ; i++){
        if(arr[i]== '멜론') arr[i] = '딸기';

        console.log(`${i}번 인덱스값 : ` ,arr[i]);
    }
 }

 //#btn2a 가 클릭되었을때 arrayTest() 함수 호출
 document.querySelector("#btn2a").addEventListener("click",function(){
    const arr1 = [10,20,30];
    const arr2 = ['사과','바나나','멜론'];

    const temp = 100;
    /* 참조란?
     -객체 지향 언어에서 배열,객체 등 오브젝트는 값을 여러개를 가지고있는 자료형인데,
     변수는 값을 1개만 저장할 수 있기 떄문에 오브젝트를 메모리 다른곳에 저장하고
     저장된 곳의 주소를 변수에 저장해서 필요할때마다 해당주소를 찾아가 원하는 값을
     얻어오거나 수정할수 있게 하는것 */
    arrayTest(arr1);
    arrayTest(arr2);

    console.log("arr2[2]:",arr2[2]);

 })

//  매개변수로 요소전달
function btn2bFn(el){
    //el = element: 이벤트가 발생한 요소 (HTML에서 this)

    el.style.backgroundColor = "yellow";

}

/* 매개변수로 함수 전달 */


function print2(otherFn){


}

const btn2c = document.querySelector("#btn2c");

btn2c.addEventListener("click",function(){

    const sumFn = function(a,b){
        return a + b;    //함수를끝냄 + 값(a+b)를 가지고 호출한곳으로 돌아간다
    
    }
    print2(sumFn);

    //otherFn == sumFn
    console.log(`3+4=${otherFn(3,4)}`);

});


//return확인하기 1

function sumFn(arr){  //전달된 배열 요소의 합을 반환
    let sum=0;
    for(let i = 0; i < arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}
//전달받은 수 를 x제곱
function pow(num, x){
    let result = 1;  //곱했을때 결과에 영향을 주지않기위해 1을 초기화

    for(let i = 0; i< x ; i++){
        result += num;
    }

}

const btn3a = document.querySelector("#btn3a");
btn3a.addEventListener("click",function(){

    const numbers = [];  //비어있는 배열생성

    /* 배열.push(값) : 배열의 마지막 요소로 값을 추가 */

    numbers.push(30);
    numbers.push(50);
    numbers.push(4);
    numbers.push(pow(2,5));  // == numbers.push(32)

    console.log("합계:", sumFn(numbers));

});

//---------------------------------------


/* 화살표함수 */

const arrowList = document.querySelectorAll(".arrow");

/* 화살표 함수 기본 형태 */
arrowList[0].addEventListener("click",()=>{
    alert("화살표 함수 기본 형태 연습");
});

/* 매개 변수가 1개인 경우 () 생략 가능 */
arrowList[1].addEventListener("click", e => {

    // e : 이벤트 객체(모든 이벤트 관련 정보가 담겨있는 객체)
    // e.target : 이벤트가 발생한 요소
  
    e.target.style.backgroundColor = "hotpink";
  
    print3( arr => {
      let result = 1;
  
      for(let i = 0 ; i<arr.length ; i++){
        result *= arr[i];
      }
      return result;
    } );
  });
  
  
  function print3(otherFn){
  
    const numbers = [1,2,3,4];
    console.log( otherFn(numbers) );
  }




  /* return한줄만 작성된경우  */

  arrowList[2].addEventListener("click",()=>{

    twoNumberPlus((a,b) =>a+b)

  });

  function twoNumberPlus(otherFn){

    const input1 = Number(prompt("첫 번째 값"));
    const input2 = Number(prompt("두 번째 값"));

    alert(otherFn(input1,input2));

  } 

  /* 리턴 한줄인데 오브젝트 반환하는 경우 */

  arrowList[3].addEventListener("click",()=>{

    printObject((name,age)=>{
        return {"name": name, "age" : age}    //JS객체 {K:V, K:V}
    });
  });


  function printObject(otherFn){
    const obj = otherFn("홍길동","20");

    console.log("obj-name:" , obj.name);
    console.log("obj-age:" , obj.age);

  }

  /* 즉시 실행 함수 확인 */

  (()=>{

  })();