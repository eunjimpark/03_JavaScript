

const createBox = document.querySelector("#createBox");
const container = document.querySelector(".container");

/* createBox 버튼 클릭시 div.box를 생성하여 container에 마지막 자식으로 추가하기 */

createBox.addEventListener("click", () => {

    /* 1. div 요소 생성 */
    const box = document.createElement("div");
    console.log(box); // 만들어졌지만 화면에는 안보임
  
    /* 2. 만들어진 div 요소에 "box" 클래스 추가 */
    box.classList.add("box");
  
    /* 3. container의 마지막 자식으로 div요소 추가 */
    container.append(box);

    /* 4. input 요소 생성 */
    const input = document.createElement("input");
    input.type = "text";  //type = "text" 지정
    console.log(input);
  
    /* 5. 생성된 input 을 box의 마지막 자식으로 추가 */
    // box.append(input);

    container.innerHTML +="<div class='box'><type='text'>"


  });

  
//   innerHTML로 요소 추가하기

const innerHTMLBox = document.querySelector("#innerHTMLBox");
innerHTMLBox.addEventListener("click",()=>{
    

})


  