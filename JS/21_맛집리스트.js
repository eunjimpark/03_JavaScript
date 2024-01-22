/* 레스토랑 생성자 함수 */
function Restaurant(resName,resAddress,resMenu){
    
    //속성(변수,필드)
    this.resName =resName;
    this.resAddress =resAddress;
    
    //메뉴("메뉴1,메뉴2,메뉴3" ->배열)
    this.resMenu= resMenu.split(", ");

    //기능(메서드)
    this.information = function(){
        return `${this.resName} / [${this.resMenu}] / ${this.resAddress}`;
    }

}



/* 문자열.split("구분자") */
// ->문자열을 "구분자"로 쪼개서 배열로 변환



/* 전역변수로 식당목록을 저장할 배열 선언 */
const resList = [];

//샘플 식당 데이터 추가
resList.push(new Restaurant("김밥천국", "김밥, 라면", "서울시 중구 어딘가"));
resList.push(new Restaurant("왕가탕후루", "샤인머스켓, 딸기, 통귤", "서울시 서대문구"));

/* 화면에 존재하는 요소 얻어오기(button, input) */
const resName = document.querySelector("#resName");
const resAddress = document.querySelector("#resAddress");
const resMenu = document.querySelector("#resMenu");
const addBtn = document.querySelector("#addBtn");
const selectBtn = document.querySelector("#selectBtn");

/* addBtn클릭시 input에 입력된 값을 모두 얻어와 resList에 추가 */
addBtn.addEventListener("click", ()=>{

    /* 유효성 검사 */
    //->전달된 데이터가 형식, 크기 , 장성법 등이 맞는지 검사
    // ex)입력된 값이 없을 경우
    //   비밀번호 형식 맞지않을경우
    //   입력된 값의 범위가 옳지 않을 경우

    //빈칸검사
    if(resName.value.trim().length == 0){
        alert("식당명을 입력해 주세요");
        resName.focus();
        return;
    }

    if(resAddress.value.trim().length == 0){
        alert("식당주소를 입력해 주세요");
        resName.focus();
        return;
    }

    if(resMenu.value.trim().length == 0){
        alert("식당메뉴를 입력해 주세요");
        resName.focus();
        return;
    }

    
    resList.push(new Restaurant(resName.value, resAddress.value, resMenu.value));

    //이전 input에 작성된 내용 삭제
    resName.value= "";
    resAddress.value = "";
    resMenu.value = "";

    alert("추가 성공");

    //가게명 input요소에 focus
    resName.focus();
});


/* 조회버튼 클릭시 #printList의 이전내용을 모두 삭제하고 
resList의 요소를 이용해 li요소를 만들어 추가 */


const printList = document.querySelector("#printList")

selectBtn.addEventListener("click", () => {

    printList.innerHTML= "";

    for(let i=0; i<resList.length; i++){
        //resList[i]

        //li 요소 만들기
        const li=document.createElement("li");

        //만들어진 li에 resList[i]의 informaton()메서드 반환값을 대입
        li.innerText = resList[i].information();
        
        //li요소를 #printlilst의 마지막자식으로 추가한다
        printList.append(li);

    }

});




