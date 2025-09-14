let answer = document.getElementById("answer")
let question = document.getElementById("question")
let guess = document.getElementById("guess")
let number = document.getElementById("number")
let now_card_id = 0 
const card  = []
class Card{
    constructor(card_id,name,answer){
            this.card_id = card_id;
            this.name = name;
            this.answer = answer;
    }
}
const initialCards = [
    { name: "1차 세계대전 발발", answer: "1914" },
    { name: "1차 세계대전 종전", answer: "1918" },
    { name: "범죄 즉결례", answer: "1912-03-18" },
    { name: "조선 태형령", answer: "1912-03-18" },
    { name: "경찰범 처벌 규칙", answer: "1912-03-25" },
    { name: "3.1운동", answer: "1919-03-01" },
    { name: "쌀 소동", answer: "1918" },
    { name: "치안 유지법", answer: "1925-04-27" },
    { name: "만주 사변", answer: "1931-09-18" },
    { name: "대공황", answer: "1929" },
    { name: "아시아 태평양 전쟁", answer: "1941" },
    { name: "2차 세계대전 발발", answer: "1939" },
    { name: "2차 세계대전 종전", answer: "1945" },
    { name: "치안 유지법", answer: "1925-04-27" },
    { name: "진주만 기습", answer: "1942-06" },
    { name: "과달카날 전투 발발", answer: "1942-08" },
    { name: "과달카날 전투 종전", answer: "1943-02" },
    { name: "히로시마 원폭 투하", answer: "1945-08-06" },
    { name: "나가사키 원폭 투하", answer: "1945-08-09" },
    { name: "소련 참전", answer: "1945-08" },
    { name: "국가 총동원법", answer: "1938" },
    { name: "『국민 총력』 발행 시작", answer: "1939" },
    { name: "지원병제 실시", answer: "1938" },
    { name: "학도 지원병 제도 실시", answer: "1943" },
    { name: "징병제 실시", answer: "1944" }
    
    
];

// 초기 카드 삽입
initialCards.forEach(item => {
    card.push(new Card(random_id(), item.name, item.answer));
});
function random_id(){
    now_card_id = Math.floor(Math.random() * (99999));
    return now_card_id
}//0~99999 랜덤아이디 생성
function make_card(){
    let system_type = document.querySelector('input[name="system"]:checked').value;
    let idx = parseInt(number.value, 10);  // number 입력값을 배열 인덱스로 사용

    if(system_type === "1"){ // question 모드 → 새 카드 생성
        let id = random_id();
        let newCard = new Card(id, question.value, answer.value);
        card.push(newCard);
        alert("New Card Successfully made");
        return newCard;
    } else { // edit 모드 → 기존 카드 수정
        let c = card[idx];
        if(c){
            c.name = question.value;
            c.answer = answer.value;
            alert("Card Successfully Changed");
        } else {
            alert("Card not found at this index");
        }
    }
}
function show_card(){ 
    let c = card[number.value];
    let system_type = document.querySelector('input[name="system"]:checked').value;
    console.log(system_type);
 if (c && system_type === "1") {
        document.getElementById("output").innerHTML = 
            `ID: ${c.card_id}<br>Question: ${c.name}<br>Answer: ????/??/??`;
    } else if(c && system_type==="0"){
        document.getElementById("output").innerHTML = 
            `ID: ${c.card_id}<br>Question: ${c.name}<br>Answer: ${c.answer}`;
    

    }else {
        document.getElementById("output").innerHTML = "Card not found";
    }
}//카드 보여주기
function player_guess(){
    let c = card[number.value];
    if (guess.value == c.answer){
         document.getElementById("output").innerHTML =
            `ID: ${c.card_id}<br>Question: ${c.name}<br>Answer: ${c.answer}`;
    }else{
        alert("Wrong")
    }
}
function show_random_card(){
    if (card.length === 0){
        alert("카드가 없습니다");
        return;
    }
    let idx = Math.floor(Math.random() * card.length);
    number.value = idx;
    let c = card[idx];
    let system_type = document.querySelector('input[name="system"]:checked').value;

    if (c && system_type === "1") {
        document.getElementById("output").innerHTML = 
            `ID: ${c.card_id}<br>Question: ${c.name}<br>Answer: ????/??/??`;
    } else if (c && system_type === "0") {
        document.getElementById("output").innerHTML = 
            `ID: ${c.card_id}<br>Question: ${c.name}<br>Answer: ${c.answer}`;
    }
}
document.getElementById("random").addEventListener('click', show_random_card);
document.getElementById("make_card").addEventListener('click', make_card);
document.getElementById("show_card").addEventListener('click', show_card);
document.getElementById("rightorwrong").addEventListener('click', player_guess);