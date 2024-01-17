
//break 확인
function check1(){
    //1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i=1; i<=10; i++){

        console.log("i:",i);
        if(i==5) break;  //반복문멈춤

    }
}

/////
function check2(){
    let i =1;
    while(true){
        console.log("i:",i++);
        if(i>10) break;

    }
}

////// 1부터 20까지 출력, 단 3의 배수는 건너뛰기
function check3(){

    for(let i=1; i<=20; i++){
        
        if(i%3==0) continue;

        console.log("i:",i);

    }
}

//////1부터 30까지 1씩 증가하며 출력. 단홀수 또는 10의배수는 건너뛰기
function check4(){
    for(let i=1 ; i<=30 ;i++){
        if(i%10==0 || i%2==1 ) continue;
        console.log("i:",i)
    }

}

/* 0~9까지 5줄 출력
  - 각 줄에서 4의 배수는 건너뛰기
  - 3번째 줄 출력 후 멈추기
*/
function check5(){

    for(let row=1 ; row<=5 ; row++){
  
      let str = "";
      for(let col=0; col<=9 ; col++){
        
        // 0을 제외한 4의 배수인 경우
        if(col != 0 && col % 4 == 0) 
          continue;
  
        str += col;
      }
  
      console.log(str);
    
      // 3번째 줄 출력 후 멈춤
      if(row == 3) break;
    }
  }

  //up/donwn 게임ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function startGame(){
    const randomNumber = Math.floor(Math.random()*100)+1;   //1~100사이 난수

    let count = 0;//숫자를 입력한 횟수
    //prompt에 작성되어질 문자열
    let str = "1~100사이 숫자를 입력해 주세요";


    while(true){
        let input= prompt(str); //prompt를 이용해서 값입력받기

        //취소를 누른 경우 -> "게임 포기" 알림을 띄운 뒤 반복 종료
        if(input==null){
            alert("게임포기");
            break;
        }

        //확인을 누른 경우 숫자로 변환
        //Nan (not a Number) :  숫자가 아니다 를 나타내는값
        input = Number(input); 
    
        //input 에는 입력한 숫자 || Nan이 대입됨
        //NaN인 경우 다시 입력 받도록 하기
        if(isNaN(input)){
            alert("숫자만 입력해 주세요");
            continue;
        }
        count++;

        //정상입력 한 경우
        if(input==randomNumber){
            alert(`정답!!(${input})/count:${count}`);
            break;
        }
        
        if(input>randomNumber){
            str=(`[down] / count : ${count}`);
        }
        else{
            count++;
            str=(`[up]/ count: ${count}`);
        }

    }

}