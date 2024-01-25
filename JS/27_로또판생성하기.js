
const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard");

//#createBtn버튼 클릭시
//#lottoBoard에 div.number요소 45개 생성해서 추가하기

createBtn.addEventListener("click",()=>{

    //#lottoBoard 이전내용삭제
    lottoBoard.innerHTML="";

    //div.number만들어서 추가
    for(let i=0 ; i<45; i++){
        const number =  document.createElement("div");

        number.classList.add("number"); //클래스추가

        number.textContent = i+1;

        //만들어진 div.number에 클릭시 동작 추가
        number.addEventListener("clilck", e => {

            //화면에 선택된 요소가 6개이하일 경우
            //또는 클릭한 요소에 active클래스가 있을 경우
            const count = document.querySelectorAll(".active").length;
            
        
            if(count <= 5 || e.target.classList.contains("active") ){

            /* 요소.classList.toggle(클래스명): 요소에 (클래스명)이 있으면 제거, 없으면 추가 */
            e.target.classList.toggle("active");

            }
            else{
                alert("6개까지만 선택할수 있습니다");
            }

        });

        lottoBoard.append(number);

    }
});


            //active클래스없으면 ->추가
            //active클래스있으면 ->제거
            /* 요소.classList.contains(클래스명) : 요소에 (클래스명)이 존재하면 true, 아님false */
            // if(e.target.classList.contains("active")){
            //     e.target.classList.remove("active");
            // }else{
            //     e.target.classList.add("active");
            // }
