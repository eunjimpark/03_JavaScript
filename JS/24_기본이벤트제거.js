
/* a태그 기본 이벤트 제거 */
document.querySelector("#move").addEventListener("click", e=>{


//e.preventDefault()
//prevent : 하지 못하게 막다
//default : 기본값
e.preventDefault();


});


/* form 기본 이벤트 제거 */

/* 방법 1 : e.preventDefault() 사용 방법 */

// submit 이벤트 발생 시
// input 요소들이 하나라도 작성되지 않은 경우 제출 못하게 막기
document.inputForm.addEventListener("submit", e => {

    // #form의 자식 input 요소만 얻어오기(배열)
    const inputList = document.querySelectorAll("#form > input");
  
    for(let i=0 ; i<inputList.length ; i++){
  
      // 작성 안된 input이 있으면
      if(inputList[i].value.trim().length == 0){
        e.preventDefault(); // form 제출 막기
  
        alert("작성되지 않은 input이 존재합니다");
  
        inputList[i].focus(); // 초점 맞추기
  
        return;
      }
    }
  });


/* <!-- 방법2. onsubmit ="return false" 이용한 방법 --!> */
const onsubmitTest = ()=>{

    const radio = document.querySelector("[name='submitRadio']:checked");

    //체크된 라디오버튼이 없을 경우
    if(radio==null) return false;

    //제출O선택
    if(radio.value=="O") return true;

    //제출X선택
    return false;
};



/* 방법3 . 일반버튼 클릭시 from태그 제출/막기 */

document.querySelector("btn3").addEventListener("click",()=>{

    const input = document.querySelector("#inputTest");
    if(input.value.trim().length>0) {//값을 작성한경우
    
    //form태그 제출시키기
    document.inputForm3.submit();
    }

});