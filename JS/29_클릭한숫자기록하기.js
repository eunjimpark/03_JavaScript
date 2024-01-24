
const resetBtn = document.querySelector("#resetBtn");
const number = document.querySelectorAll(".number");
const record = document.querySelector("#record");


/* 숫자버튼 */


    for(let item of number){

        item.addEventListener("click", e=>{
            //화면에 선택된 요소가 10개이하일 경우
            if(record.textContent.length == 10){
                alert("10개까지만 선택할수 있습니다");
                return;
            }
            record.textContent += e.target.textContent;
        });
    };



/* 리셋버튼 */

document.querySelector("#resetBtn").addEventListener("click", () => {

    record.textContent = "";

});


