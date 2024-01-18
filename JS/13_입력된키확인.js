

//화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

document.addEventListener("keydown",function(e){

    //e:이벤트 객체
    //e.key : 입력된키

    // console.log(e.key);

    let idx;  //인덱스값을 저장할 변수

    switch(e.key.toLowerCase()){  //입력된 키를 소문자로 바꿔서 일치하는 case 실행
        case  'q' : idx = 0; break;
        case  'w' : idx = 1; break;
        case  'e' : idx = 2; break;
        case  'r' : idx = 3; break;
        default : return; //함수종료
    }

    // idx 번호와 일치하는 keys배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "gray";

});


//키를 떼면 배경색 흰색으로 되돌리기

 document.addEventListener("keyup",function(e){

    let idx;  //인덱스값을 저장할 변수

    switch(e.key.toLowerCase()){  //입력된 키를 소문자로 바꿔서 일치하는 case 실행
        case  'q' : idx = 0; break;
        case  'w' : idx = 1; break;
        case  'e' : idx = 2; break;
        case  'r' : idx = 3; break;
        default : return; //함수종료
    }

    // idx 번호와 일치하는 keys배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "pink";

 });

