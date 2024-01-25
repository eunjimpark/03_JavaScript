
const resetBtn = document.querySelector("#resetBtn");
const number = document.querySelectorAll(".number");
const record = document.querySelector("#record");


/* 숫자버튼 */


    for(let item of number){

        item.addEventListener("click", e=>{
            //화면에 선택된 요소가 11개이하일 경우
            if(phoneNumber.textContent.length == 11){
                alert("전화번호를 입력해주세요.");
                return;
            }
            phoneNumber.textContent += e.target.textContent;
        });
    };


/* 리셋버튼 */

document.querySelector("#resetBtn").addEventListener("click", () => {

    phoneNumber.textContent = "";

});



/* 추가 */

addBtn.addEventListener("click",()=>{ 

    const li= document.createElement("li");

    if(phoneNumber.textContent.length == 0){
        alert("전화번호를 입력해주세요.");
        return;
    }

    const span = document.createElement("span");
    span.innerText = phoneNumber.innerText;  
    li.append(span);

    // const starBtn = document.createElement("#star");
    // starBtn.innerText = phoneNumber.innerText;  
    // li.append(span);



    
    recordContainer.append(li);

    phoneNumber.textContent = "";


});


btn.addEventListener("click", e => {

    const phoneNumber = e.target.parentElement; 

    phoneNumber.remove();
  });