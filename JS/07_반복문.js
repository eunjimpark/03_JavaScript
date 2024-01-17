
let result= ""; //빈문자열
for(let num=1 ; num <=5 ; num++){
    result +=num;  //복합대입 연산자    

    console.log("result : ",result);

}

function check2(){
    //1부터 10까지 출력하기
    for(let num=1 ; num<=10; num++){
        result+=num;
        console.log("result : ",result);

    }
}

function check3(){

    for(let num=1 ; num<=20; num++){
        console.log("num : ",num);

    }
}


function check4(){
    for(let num=5 ; num<=15; num++){
       console.log("num : ",num);

    }
}


function check5(){
    let sum= 0; //합계를 저장하기 위한 변수
                //0을 대입한 이유 : 0은 더해도 아무런 영향이없다
    for(let num=1 ; num<=10; num++){
        sum+=num
    }
    console.log("sum : ",sum);
}


//
function sumFn(){
    //input에 작성된 값을 얻어와 저장
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);
    //결과를 출력하기위한 요소(span#result1)인 요소 얻어와 저장
    const result1=document.getElementById("result1");

    let sum=0;
    //start부터 end까지 1씩 증가하는 for문
    for(let num = start ; num<=end ; num++){
        sum += num;  //num값을 sum에 누적
    }
    result1.innerText = sum;

}

function executeFn2(){
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val= Number(document.getElementById("inputNumber2-3").value);

    const ul = document.getElementById("result2");

    ul.innerHTML = ""; //이전 ul에 작성된 내용 모두 삭제


    for(let num=start; num<=end; num+=val ){
        ul.innerHTML += `<li>${num}</li>`;
    }

    //요소.innerText = "문자열";    ->요소의내용으로 문자열을 대입
    // (html 태그를 해석하지 않고 그대로 보여줌

    //요소.innerHTML = "<h2>문자열</h2>"  ->요소의 내용으로 문자열을 대입 
    // (html 태그를 해석해서 화면에 출력
}


// 구구단 2단 출력하기
function check7(){
    for(let num=1 ; num<=9 ; num++){

        console.log(`2 X ${num} = ${2*num}`);
    }
}

// 입력받은단 출력하기
function executeFn3(){
    const dan = Number(document.getElementById("input3").value)
    const ul = document.getElementById("result3")

    ul.innerHTML = ""; //이전 ul에 작성된 내용 모두 삭제

    //입력받은 단이 2~9사이가 아닐경우 ! (2에서 9사이만 입력해주세요 알림창 띄우기)

    if(!( dan>=2 && dan <=9)){     //(dan<2 || dan>9)
        alert("2~9사이만입력해주세요");
        return;    //함수종료한후 호출한곳으로 돌아간다
    }

    for(let num=1 ; num<=9 ; num++){

        ul.innerHTML += `<li> ${dan} X ${num} = ${dan * num} </li>`
    }

}

//


function executeFn4(){
    //배수
    const input = Number(document.getElementById("input4").value);
    //모양
    const output = document.getElementById("output4").value;
    //출력할div
    const result = document.getElementById("result4");
    //출력할 문자열을 저장할 변수
    let str = "";

    for(let x=1 ; x<=50; x++){
        if(x % input == 0){

        }else{
            str += output + " ";
        }
        //10의 배수마다 str에 <br>태그 추가
        if(x % 10 == 0){
            str += "<br>";
        }
    }
    result.innerHTML= str;
 }


 //다음모양 출력하기 12345...

 function check8(){
    
    for(let a=1 ;  a<=4 ; a++){
        let str = "";
        for(let x=1 ; x<=5 ; x++){
             str += x;
        }
        console.log(str);
        console.log("");
    }

 }


 //다음모양 또 출력하기 112..1234 12345.......

 function check9(){
    for(let y=1 ; y<=5 ; y++){

        let str = "";
        for(let x=1; x<=y ; x++){   
            str += x;
        }
        console.log(str);

    }
 }

 ////

 function check10(){

    for(let num = 5 ; num>=1 ; num -= 2){
        console.log(num);
    }
 }


 ///////

 function check11(){
    for(let row=5; row>=1; row--){
        let str = "";
        for(let col=1 ; col <= row ; col++){   
            str += col;
        }
        console.log(str);
    }

 }


/////

function check12(){
    for(let b=1 ; b<=3 ; b++){
        let str = "";

        for(let a=1; a<=b ; a++){
            str +=a;
        }
        console.log(str);
        }

     for(let c=4; c>=1; c--){
         let str = "";

         for(let a=1; a<=c ; a++){
              str +=a;
          }
         console.log(str);
     }

     console.log("----------------------------")
     //2중 for문 한번만 사용하기


     for(let row=1; row <=7 ; row++){
        let end = 0; 
        if(row <=4) end = row;
         
        else    end =7-row+1;
        
        let str = "";
        for(let col = 1; col <=end ; col++){
            str += col;
        }
        console.log(str);
     }
}


// 카운트를 이용해서 출력하기
function check13(){

    let count= 1;  //카운트(세기)

    for(let a=1; a<=3 ; a++){
        let str = "";
        for(let b=1 ;  b <=4 ; b++){
            str += count + " ";
            count++;
        }
        console.log(str);
    }


}


//
function check14(){

    //입력된 배수 
    const input = Number(document.getElementById("input14").value);
    const result = document.getElementById("result14");

    let count=0;
    
    for(let num=1; num <=100 ; num++){
        if(num%input==0){
            count++;
        }
    }
    result.innerHTML=`${input}의 배수 : ${count}개`;

}


// 

function check15(){

    let count = 0;
    for(let row=1 ; row<=7 ; row++){
        if(row<=4) count++;
        else       count--;

        let str="";
        for(let col=1 ; col<=count; col++){
            str += col;
        }
        console.log(str);
    }
}

//

function check16(){
    let val ; //변수 선언만 하기 (undefined)


     //취소를 누르기 전까지 반복  == 취소를 누르면 반복하지 않겠다.
    while(val !== null){

        // !==  ->값, 자료형이 모두 다른 경우 true
        // ===  ->값, 자료형이 모드 같은경우 true
        val =prompt("입력 후 확인");  //변수에 prompt값 대입
        //확인 ->입력한값
        //취소 ->null값

        console.log(val);

    }
}

//메뉴 주문하기

function check17(){
    //메뉴가격
    const gimbap = 3000;
    const ramen = 3500;
    const donkkaseu = 5000;

    //주문 개수 카운트
    let gCount= 0;
    let rCount= 0;
    let dCount= 0;

    //prompt로 입력한 값을 저장할 변수
    let input; // undefined
    
    while (input !== null){

        input= prompt("메뉴 번호를 입력하세요!!");

        switch(input){
            case'1' : gCount++; break;
            case'2' : rCount++; break;
            case'3' : dCount++; break;
            case null: alert("주문 완료!"); break;

            default : alert("메뉴에 작성된 번호만 입력해 주세요."); break;
        }
    }

    alert(`김밥: ${gCount}, 라면: ${rCount}, 돈까스 ${dCount}`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);
    alert(`총가격 : ${sum}`)
}

///////
//1부터 10까지 출력
function check18(){
    let a=1;
    while(a <11){
    console.log(a);
    a++;
    }

    console.log("---------------------------")

    let x=10;
    while(x>0){
        console.log(x);
        x--;
    }

}



