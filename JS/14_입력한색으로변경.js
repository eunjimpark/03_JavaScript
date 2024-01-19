
// 입력한 색상으로 배경색 변경하기




//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//요소를 한번에 여러개 얻어오면 배열형태로 저장된다

const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".input");

document.querySelector("#btn").addEventListener("click",function(){
    for(let i=0; i<boxList.length ; i++){
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});


