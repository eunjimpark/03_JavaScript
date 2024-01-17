

function check1(){

    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과","바나나","딸기"];

    console.log(arr1,arr2,arr3,arr4);


    //배열명.length : 배열길이 (배열칸 수 또는 저장된 데이터의 수)
    console.log(arr1.length, arr2.length, arr3.length, arr4.length);

// 배열의 index(색인, 번호)
/* 
-배열의 각 칸을 구분하는 번호
- 0 부터 시작!!!
- 중간에 번호를 생략할 수 없다 (항상 연속적)
-마지막 index == 배열길이 -1
 */

//배열명[index] ->배열의 해당 인덱스에 존재하는 데이터 반환
console.log('arr4[0]',arr4[0]);
console.log('arr4[1]',arr4[1]);
console.log('arr4[2]',arr4[2]);

//배열명[index] =값; ->해당 인덱스에 지정된 값 대입
arr2[0]=100;
arr2[1]="눈온다";
arr2[2]= true;

console.log('arr2:',arr2);

//JS배열 특징을 이용한 사용법

// 길이제한이 없다 - >값을 배열에 원하는 만큼 추가 가능
arr1[0] = "가";
arr1[1] = "나";
arr1[2] = "다";
arr1[3] = "라";
console.log("arr1:",arr1);

//2.원하는 index에 값을 마음대로 추가할수 있다
//->중간에 건너뛴 index는 빈칸으로 채워짐
arr1[5]="마";
console.log("arr1:",arr1);

}


//배열 xfor문 1

function check2(){


    //for문을 이요해서 배열 요소 초기화 하기

    //-index : 배열의 각 칸을 구분하는 번호
    //-배열 요소 == 배열의 각칸
    //-초기화 : 변수/배열 요소에 처음으로 값을 대입하는것

    const arr1=[];

    arr1[0] = '김밥';
    arr1[1] = '라면';
    arr1[2] = '떡볶이';
    arr1[3] = '볶음밥';

    /* for o */
    const arr2 =[];

    for(let i=0; i<=3; i ++){
        arr2[i]= i*10;
    }
    console.log("arr1:",arr1);
    console.log("arr2" ,arr2);
    console.log("arr3:",arr3);
}

/* 배열 xfor문 2 */
function check3(){
    /* 배열에 저장된 값 하나씩 순서대로 출력하기 */

    const arr = [10, 20, 50, 100, 500, 1000];

    //i<=arr.length-1 == i <arr.length
    for(let i=0; i<arr.length ; i++){
        console.log(`arr[${i}]==${arr[i]}`);
    }

}


/* 배열 x for문3 */
function check4(){
    /* for문을 이용행서 배열을 순서대로 초기화 한 후 
     다른 for문을 이용해서 배열 요소를 하나씩 모두 출력*/

     const arr = new Array(5);  //내용이없는 5칸 짜리 배열
    //  1.배열을 순서대로 초기화
    for(let i =0; i<arr.length ; i++){
        arr[i]= Number(prompt(`${i}번째 숫자 입력`))
    }

    // 2.배열 요소를 하나씩 모두 출력 + sum
    let sum=0;

    for(let i=0; i<arr.length; i++){
        console.log(`arr[${i}]: ${arr[i]}`);
        sum += arr[i];
    }

    console.log("sum : ", sum);
    console.log("평균 : ", sum/arr.length);
}

//점심메뉴뽑기

function selectMenu(){
    const menuResult = document.getElementById("menuResult");

    //점심메뉴로 초기화된 배열 생성
    const menus= ["낙지덮밥", "된장찌게", "돈까스","라면", "샌드위치", "햄버거" ];

    //menus배열 index범위 내에서 난수 생성
    const randomNumber = Math.floor(Math.random()*menus.length);
    menuResult.innerText=menus[randomNumber];


}


/* 주문하기 프로그램 */
/*
-주문하기 버튼 클릭시 prompt를 이용해서 메뉴명, 수량 입력받기
-메뉴 입력시 취소 클릭하면 "주문완료"
-수량 입력시 취소를 클릭하면 해당 메뉴 주문만 취소 
 */
function orderFn(){
    const tbody = document.getElementById("tbody");
    const total = document.getElementById("total");
    //메뉴 배열
    const menus = ["라면", "김밥", "샌드위치", "우동"];
    //가격 배열
    const prices = [4000, 3000, 5000, 6000];
    //주문한 메뉴 카운트 배열
    const counts = new Array(menus.length); // ->모든칸 비어있음

    //비어있는 칸을 0으로 채움
    counts.fill(0);
    // for(let i=0; i<counts.length ; i++){
    //     counts[i]=0;
    // }

    while(true){ //무한반복
        const selectMenu = prompt("주문할 메뉴명 입력");
        if(selectMenu == null){  //메뉴명 입력시 취소를 클릭한 경우
            break;
        }

        //입력한 메뉴가menus 몇번째 인덱스에 존재하는가?
        //->배열 검색
        //1)for문 이용
        // let idx=-1; //일치하는 메뉴의 인덱스를 저장할 변수

        // for(let i=0; i<menus.length ; i++){

        //     //입력 받은 메뉴 (selectMenu)와 menus[i]값이 같다면 idx에 i값을 저장
        //     if(selectMenu == menus[i]){
        //         idx=i;
        //         break;   //같은 메뉴를 찾으면 더이상 검색 불필요

        //     }

        //2)배열명.indexOf("값")
        //-JS배열에서 제공하는 함수
        //-배열 내에 값이 존재하는 index번호를 반환
        //-없다면 -1반환
        let idx = menus.indexOf(selectMenu);

        //잘못 주문한 경우 (idx == -1) 다시 반복 시작
        if(idx ==-1) {
            alert("없는메뉴입니다. 다시입력하세요");
            continue;
        }

        //메뉴입력끝 - - - - -
        //수량입력 시작
        let input = prompt("수량 입력");
        if(input ==null) { //수량입력취소 ->다시 메뉴입력
            continue;
        }

        //수량을 입력하지 않았거나, 숫자를 입력하지 않은 경우
        if(input.length == 0 || isNaN(Number(input))){
            alert("잘못 입력 하셨씁니다. 다시 주문해 주세요");
            continue;
        }

        input= Number(input); //숫자로 변환해서 저장

        //수량입력끝--------------
        //menus,prices, counts 배열에 값 변경 시작
        //idx : 선택한 메뉴가 존재하는 index 번호
        //input : 입력한 수량(number 자료형)

        counts[idx] += input;
        
    }  //while 종료
    console.log(menus);
    console.log(prices);
    console.log(counts);


    //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    ///화면 출력하기 + 합계 (tatal 계산) 시작
    //tbody 이전 내용 지우기
    tbody.innerHTML ="";
    let sum = 0; //합계구하기 변수

    for(let i=0; i < counts.length; i++){
        if(counts[i] == 0){ //메뉴를 주문하지 않은 경우
            continue;
        }
        let tr = "<tr>"

            tr += `<td>${menus[i]}</td>`;
            tr += `<td>${prices[i]}</td>`;
            tr += `<td>${counts[i]}</td>`;


        tr +="</tr>"

        //화면에 tr출력하기
        tbody.innerHTML += tr;

        //합계 누적하기
        sum += prices[i] * counts[i];
    } //for문 끝

    total.innerText = sum;

}

/* 2차원 배열 */
function check5(){
    const arr= [[1,2,3,4], [5,6,7,8], [9,10,11,12]];

    //1차원 배열 선언
    const arr1 =[100,200,300,400];
    const arr2 =[900,800,700,600];

    //2차원 배열 arr의 3,4번 인덱스 요소로 추가
    arr[3] = arr1;
    arr[4] = arr2;


    console.log (arr);

    //2차원 배열 요소 조회하는 방법

    //배열명[행][열]

    console.log(arr[1][3]); //8
    console.log(arr[4][3]); //600
    console.log(arr[0][0]); //1
}


////2부터 2씩 증가하는 수를 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기
function check6(){

    let count=2;

    const arr= []; //2차원 배열 (요소로 1차원 배열)

    for(let row=0 ; row<5 ;row++){ //행제어
        //1차원 배열을 만들어 arr[i]에 대입
        arr[row]=[];

        for(let col=0; col<5; col++){//열제어
            arr[row][col] = count;  //row행 col열에 count대입
            count +=2; //count를 2증가
        }
    }
    console.log(arr);

    // 2차원 배열 arr의 요소를 거꾸로 한줄씩 출력하기
    //50 48 46 44 42

    for(let row= arr.length-1 ; row>=0 ;row--){
        
        let str ="";

        for(let col = arr [row]. length -1; col>=0; col--){
            str += arr[row][col]+ " ";
        }
        console.log(str);
    }
    

}