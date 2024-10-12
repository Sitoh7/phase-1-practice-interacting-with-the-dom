let counterValue = 0;

function increaseCounter(){
  counterValue += 1
  document.getElementById("counter").innerText = counterValue
}
let intervalId = setInterval(increaseCounter, 1000)

let add = document.getElementById("plus")
add.addEventListener("click",(e)=>{
    e.preventDefault(),
    counterValue += 1
    document.getElementById("counter").innerText = counterValue
})

let subtract = document.getElementById("minus")
subtract.addEventListener("click",(e)=>{
    e.preventDefault(),
    counterValue -= 1
    document.getElementById("counter").innerText = counterValue
})

let likes = {}

let likeButton = document.getElementById("heart")
likeButton.addEventListener('click', function() {
    const currentNumber = counterValue;
    if (!likes[currentNumber]) {
      likes[currentNumber] = 1;
    } else {
      likes[currentNumber]++;
    }

    let likeItem = document.getElementById(`like-${currentNumber}`);
    if (!likeItem) {
        const likesList = document.querySelector('.likes')
      likeItem = document.createElement('li');
      likeItem.id = `like-${currentNumber}`;
      likesList.appendChild(likeItem);
    }
    likeItem.innerText = `${currentNumber} has been liked ${likes[currentNumber]} times`;
  });




 
  
    let commentbtn = document.getElementById("comment-form")
    commentbtn.addEventListener('submit',(e)=>{
      e.preventDefault()
      text = e.target['comment-input'].value
      document.getElementById("list").textContent = text
      commentbtn.reset()
    })

    let submitbtn = document.getElementById("submit")

    let isPaused = false;
    let pausebtn = document.getElementById("pause")
    pausebtn.addEventListener('click',(e)=>{
      isPaused = !isPaused;
        if (isPaused) {
          clearInterval(intervalId);
          pausebtn.innerText = 'resume';
          add.disabled = true;
          subtract.disabled = true;
          likeButton.disabled = true;
          submitbtn.disabled = true;
        } else {
          intervalId = setInterval(increaseCounter, 1000);
          pausebtn.innerText = 'pause';
          add.disabled = false;
          subtract.disabled = false;
          likeButton.disabled = false;
          submitbtn.disabled = false;
        }
      });