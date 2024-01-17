function createTabel(){

    const start = Number(document.getElementById("start").value);
    
    const end = Number(document.getElement("end").value);
    //단이 작성되는 행요소 (tr태그)
    const theadRow = document.getElementById("thead-row");
    //구구단(내용)이 작성되는 영역 (tbody태그)
    const tbody = document.getElementById("tbody");

    //단 제목만들기--------------------------------------------------------

    theadRow.innerHTML = "";  //이전내용삭제

    for(let dan=start; dan<=end; dan++){
        theadRow.innerHTML +=`<th>${dan}단</th>`;
    }

    //구구단 내용 만들기 ----------------------------------------------------
    

    let str = "<tr>";
    for(let num=1; num<=9 ; num++){
        for(let dan=start; dan <=end; dan++){
            str +=`<td>${dan} X ${num} = ${dan*num}</td>`;
        }
        str +="</tr>"

        tbody.innerHTML += str;
    }
    
}




