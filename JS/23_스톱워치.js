



const dispaly = document.querySelector("#display");

const list = document.querySelectorAll("#display > span");

const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

let count =0;  //1/100초마다 1씩 증가한 값을 저장할 변수
//1/100초 자리 : count % 100
//1초  : count / 100 % 60
//1분 : count / 100/ 60


let currInterval; //인터벌 저장 변수

/* start 버튼 클릭시 10ms마다 dispaly값 증가*/

startBtn.addEventListener("click", e =>{

    //클릭한 버튼에 작성된 내용이 "PAUSE"인 경우
    if(e.target.textContent=="PAUSE"){
        e.target.textContent="START";   //버튼 내용 START로 변경
        window.clearInterval(currInterval);  // currInterval 정지
        return;
    }


    //클릭한 버튼에 작성된 내용이 "START"이니 경우
    currInterval = window.setInterval(()=>{
        count++;  //count1증가

        output(); //화면에 시간 출력

        // document.querySelectorAll("#display > span")[2].innerText = count;
        
        e.target.textContent = "PAUSE";

    }, 10); //10ms

});


/* 시계 출력 함수 */
function output(){
    let minute = Math.floor(count/ 100 / 60);
    let second = Math.floor(count /100 % 60);
    let ms = count % 100 ;

    //0붙여서 문자열로 변환해서 반환
    minute = attachZero(minute);
    second = attachZero(second);
    ms = attachZero(ms);

    //미닛의 값과 화면에 출력된 분이 다를경우
    if(list[0].innerText !=minute)  list[0].innerText = minute;

    //세컨드의 값과 화면에 출력된 초가 다를 경우
    if(list[1].innerText !=second) list[1].innerText = second;
    
    list[2].innerText = ms;
}



/* 한자리 숫자인 경우 앞에 0붙여서 반환하는 함수 */
function attachZero(num){
    if(num<10){  //한자리숫자인경우
        return "0"+num;
    }
    return ""+num;
}


/* 리셋 */
resetBtn.addEventListener("click",()=>{
    //currInterval 제거
    window.clearInterval(currInterval);
    
    //count, 출력된 시간 모두 0으로 
    count = 0;
    output();

    //STRAT버튼으로 바꾸는거
    startBtn.textContent="START";

    //#recordContainer의 내용을 모두 삭제(==빈문자열로 변경)
    recordContainer.innerHTML = "";
       
});

/* 레코드 */

recordBtn.addEventListener("click",()=>{ //레코드버튼 클릭시

    const li= document.createElement("li");//li요소 생성
    li.innerText = display.innerText;   //디스플레이에 출력된 시간 얻어와 대입
    
    recordContainer.prepend(li);  //레코드컨테이네의 첫번째 자식으로 li추가

});



//요소.textContent 와 요소.innerText 
//textContetn - HTML파일에 작성된 내용형태 (단 태그빼고)그대로 얻어온다.(띄어쓰기,엔터포함)
//innerText  -브라우저(화면)에 보이는 형태 (단 태그빼고)그대로 얻어온다.