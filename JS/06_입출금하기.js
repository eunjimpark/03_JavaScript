/* prompt 사용 연습 */
function test(){
    const password = prompt("비밀번호를 입력하세요");

    if(password == null){
        alert("취소");
    }
    else{ //확인

        //입력한 비밀번호가 '1234'가 맞는지 확인
        if(password=='1234'){
            alert("비밀번호 일치");
        } else{
            alert("비밀번호가 일치하지 않습니다.");
        }
    }

}

//-----------------------------------------------------------

let balance = 10000;  
const input = document.getElementById("input");
const result= document.getElementById("result");


 function doposit(){
    const amount = Number(amount.value);
    balance= balance+amount;
    resultMoney.innerText=balance;
}
function withdrawal(){
    const password = prompt("비밀번호를 입력하세요");

    if(password == null){
        alert("취소");
    }
    else{ //확인

        //입력한 비밀번호가 '1234'가 맞는지 확인
        if(password=='1234'){
            alert("비밀번호 일치");
            if(amount>=balance){
                balance=balance-amount;
                balance.innerText=balance;
                alert(`${amount}원이 출금 되었습니다. 남은 잔액 : ${balance} 원`)
            }
            else{
                alert("잔액이 부족합니다.");
            }


        } else{
            alert("비밀번호가 일치하지 않습니다.");
        }
    }


}