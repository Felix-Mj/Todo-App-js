const text = document.getElementById("inptext");
const btn = document.getElementById("btn");
const message = document.querySelector("#msg");
const clrbtn = document.querySelector("#clrbtn");
btn.addEventListener("click", () => {
  if (text.value != "") {
    const spn = document.createElement("span");
    const span_btn = document.createElement("button");
    const chek_box = document.createElement("input")
    chek_box.setAttribute('type','checkbox')
    span_btn.setAttribute('class','span_btn')
    spn.innerText = text.value;
    span_btn.addEventListener("click", () => {
      spn.remove();
    });
    spn.addEventListener('click',()=>{
      spn.classList.toggle('text_cross')
      if(chek_box.checked == true){
        chek_box.checked = false
      }
      else{
        chek_box.checked = true

      }

    })
    spn.appendChild(chek_box)
    span_btn.innerText = "X";
    spn.appendChild(span_btn);
    message.appendChild(spn);
    text.value = "";
  } else {
    alert("Fill the Data");
  }
  clrbtn.addEventListener('click',() => message.innerHTML = '')

});
