
/* 클래스 접근 테스트 */
function classTest(){
    //.cls-test요소 모두 얻어오기
    const divs =document.getElementsByClassName("cls-test");
    
    console.log(divs);
    

    divs[0].style.backgroundColor= "rgb(114,203,80)";

    divs[1].style.backgroundColor= "rgb(40,255,255))";

    divs[2].style.backgroundColor= "rgb(150,90,210)";


    
    for(let i=0 ; i<divs.length ; i++){
        divs[i].innerText = `${i}번째 div입니다`
    }


}

 //유사배열이란?
 //배열처럼 index, length를 가지고 있으나 배열전용 기능 을 제공하지 않음


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function classTest2(){
    const inputs = document.getElementsByClassName("cls-test2");
/* 중요!!
    요소들을 한번에 얻어오게 되면 배열 형태로 반환된다!
    ->요소를 다루고 싶으면 배열 index를 이용해서 배열요소를 하나씩 꺼내서 다뤄야한다!!!!!!
*/

    let sum=0;

    for(let i=0; i<inputList.length ; i++){
        const value = Number(inputList[i].value);   //요소에 작성된 값 얻어오기 ->넘버형태
        console.log(i, value);

        sum += value;
    }

    alert(`합계:${sum}`);
}



//태그명으로 요소접근하기

function tagNameTest(){
    //HTML문서에 존재하는 모든  li태그 요소를 얻어와 배열로 묶어서 반환
    const tagList = document.getElementsByTagName("li");
    for(let i=0; i<tagList.length; i++){  //순차접근
        //작성된내용 얻어오기
        console.log(tagList[i].innerText);
    }

    //반복중 현재 선택된 요소의 배경색을 작성된 내용과 똑같은 배경색으로변경
    tagList[i].style.backgroundColor = tagList[i].innerText;

}


//name으로 요소 접근하기
function nameTest(){

    //name속성 값이 "hobby"인 요소를 모두 얻어와 hobbyList 에 저장
    const hobbyList = document.getElementsByName("hobby");

    let str = "";
    let count = 0;

    for(let i=0; i<hobbyList.length ; i++){//순차접근

        /* checkbox, radio 전용 속성 :  (.checked) */
        //input요소 .checked ->요소가 체크되어있으면 true, 아님 false

        //체크박스의 값, 체크여부 출력
        console.log(hobbyList[i].value, hobbyList[i].checked);

        //체크여부를 검사해서 체크가 되어있다면 체크된 요소의 값을 str변수에 누적
        // +count 변수 값을 1 증가
        if(hobbyList[i].checked){
            
            str+= hobbyList[i].value + " ";
            count++;

        }

    }
    //#name-div요소에 내용으로 결과 출력
    document.getElementById("name-div").innerHTML=`${str}<br><br>선택된 취미 개수 : ${count}`;
}


function cssTest(){


      /* 
    1) document.querySelector("CSS 선택자");
            -> 선택자가 선택한 요소 중 첫 번째 요소를 반환

    2) document.querySelectorAll("CSS 선택자");
        -> 선택한 요소 모두를 배열(NodeList, 유사배열) 형태로 반환
  */
const container = document.querySelector('[target-div="css-div"]');
//요소의 테두리를 변경  
container.style.border = "10px solid red";


  // 첫 번째 자식 div 선택 방법 1
  // const div1 = document.querySelector('[target-div="css-div"] > div:first-child');
  
  // 첫 번째 자식 div 선택 방법 2
  // -> querySeletor()의 첫 번째 요소만 선택한다는 특징 활용


const div1=document.querySelector('[target-div="css-div"] > div');

console.log(div1);

div1.innerTest = "css 선택자로 선택해서 값 변경됨";

//두번째 자식 div 선택
const div2 
= document.querySelector('[target-div="css-div"] > div:last-child');

div2.innerText 
  = "첫 번째 요소가 아니면 querySelector() 특징 활용 못함";


// 모든 자식 div 한 번에 선택(배열)
const divList 
  = document.querySelectorAll('[target-div="css-div"] > div');

console.log(divList);

// index를 이용해서 요소 하나씩 접근
divList[0].style.fontFamily = "궁서";
divList[1].style.fontSize = "20px";

for(let i=0 ; i<divList.length ; i++){ // 순차접근
    divList[i].onclick = alert(`${i}번째 인덱스 요소입니다`);

}
}

//카카오톡채팅창 만들기

function readValue(){

    //채팅이출력되는 배경
    const bg=document.querySelector("#chatting-bg");

    //채팅 내용 입력 input
    const input=document.querySelector("#user-input");

    // console.log(input.value);

    //입력된값이 없을경우
    //1)진짜 안적음
    //2)공백만 적음

    /* 문자열.trim() : 문자열 좌우 공백을 제거 */
    if(input.value.trim().length ==0){
        alert("채팅 내용을 입력해 주세요")
        input.value = "";  //이전input에 작성된 값 삭제
        
        input.focus(); //input에 커서 활성화

        return;// 현재 진행중인 함수를 종료 + 호출한곳으로 돌아감
    }
    
    //채팅출력
    bg.innerHTML += `<p><span>${input.value}</span></p>`;

    //bg.scrollHeight : bg의 스크롤 전체높이
    //bg.scrollTop    : 스크롤 윗부분 위치
    //bg.scrollTop=값 : 스크롤 윗부분을 값 위치로 이동
    //값이 너무크면 제일 밑으로 이동
    bg.scrollTop = bg.scrollHeight;

    input.value ="";
    input.focus();


}


/* 아이디가 user-input인 요소에서 키가 올라오는 동작이 발생했을 때(감지되었을때)
올라온 키가 "enter"키 이면 readValue()함수를 호출 */

//keydown : 키가 눌러졌을때 (+꾹 누르고 있으면 계속 인식됨)
//keypress :키가 눌러지고 있을때 (연속적으로 인식)
//keyup : 눌러지던 키가 떼어졌을때(1회만 인식)

document.querySelector("#user-input").addEventListener("keyup",function(e){

    //e :이벤트 객체(발생한 이벤트 정보를 담고있는 객체)
    //e.key : 입력한 키 반환

    if(e.key == "Enter"){
        readValue();
    }

    

});
