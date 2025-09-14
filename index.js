let answer = document.getElementById("answer")
let question = document.getElementById("question")
let guess = document.getElementById("guess")
let number = document.getElementById("number")
let now_card_id = 0 
const card  = []
class Card{
    constructor(card_id,name,answer,blind){
            this.card_id = card_id;
            this.name = name;
            this.answer = answer;
            this.blind = blind;
    }
}
const initialCards = [
    { name: "1차 세계대전 발발", answer: "1914" ,blind:"????"},
    { name: "1차 세계대전 종전", answer: "1918" ,blind:"????"},
    { name: "범죄 즉결례", answer: "1912-03-18",blind:"????-??-??" },
    { name: "조선 태형령", answer: "1912-03-18",blind:"????-??-??" },
    { name: "경찰범 처벌 규칙", answer: "1912-03-25",blind:"????-??-??" },
    { name: "3.1운동", answer: "1919-03-01",blind:"????-??-??" },
    { name: "쌀 소동", answer: "1918" ,blind:"????"},
    { name: "치안 유지법", answer: "1925-04-27",blind:"????-??-??" },
    { name: "만주 사변", answer: "1931-09-18",blind:"????-??-??" },
    { name: "대공황", answer: "1929" ,blind:"????"},
    { name: "아시아 태평양 전쟁", answer: "1941",blind:"????" },
    { name: "2차 세계대전 발발", answer: "1939",blind:"????" },
    { name: "2차 세계대전 종전", answer: "1945",blind:"????" },
    { name: "치안 유지법", answer: "1925-04-27",blind:"????-??-??" },
    { name: "진주만 기습", answer: "1942-06",blind:"????-??" },
    { name: "과달카날 전투 발발", answer: "1942-08",blind:"????-??" },
    { name: "과달카날 전투 종전", answer: "1943-02",blind:"????-??" },
    { name: "히로시마 원폭 투하", answer: "1945-08-06",blind:"????-??-??" },
    { name: "나가사키 원폭 투하", answer: "1945-08-09",blind:"????-??-??" },
    { name: "소련 참전", answer: "1945-08" ,blind:"????-??"},
    { name: "국가 총동원법", answer: "1938",blind:"????" },
    { name: "『국민 총력』 발행 시작", answer: "1939",blind:"????" },
    { name: "지원병제 실시", answer: "1938",blind:"????" },
    { name: "학도 지원병 제도 실시", answer: "1943",blind:"????" },
    { name: "징병제 실시", answer: "1944",blind:"????" }
    
    
];

// 초기 카드 삽입
initialCards.forEach(item => {
    card.push(new Card(random_id(), item.name, item.answer,item.blind));
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
            `ID: ${c.card_id}<br>Question: ${c.name}<br>Answer: ${c.blind}`;
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
            `ID: ${c.card_id}<br>Question: ${c.name}<br>Answer: ${c.blind}`;
    } else if (c && system_type === "0") {
        document.getElementById("output").innerHTML = 
            `ID: ${c.card_id}<br>Question: ${c.name}<br>Answer: ${c.answer}`;
    }
}
function getSelectedDifficultyMode() {
    return document.querySelector('input[name="difficulty_mode"]:checked').value;
}

function show_card(){ 
    let idx = parseInt(number.value, 10);
    let c = card[idx];
    let system_type = document.querySelector('input[name="system"]:checked').value;
    let mode = getSelectedDifficultyMode();

    if (!c) {
        document.getElementById("output").innerHTML = "Card not found";
        return;
    }
    // 난이도 필터
    if (mode !== "all" && c.difficulty !== mode) {
        document.getElementById("output").innerHTML = "해당 난이도의 카드가 아닙니다";
        return;
    }

    if (system_type === "1") {
        document.getElementById("output").innerHTML = 
            `ID: ${c.card_id}<br>난이도: ${c.difficulty}<br>Question: ${c.name}<br>Answer: ${c.blind}`;
    } else {
        document.getElementById("output").innerHTML = 
            `ID: ${c.card_id}<br>난이도: ${c.difficulty}<br>Question: ${c.name}<br>Answer: ${c.answer}`;
    }
}

function show_random_card(){
    if (card.length === 0){
        alert("카드가 없습니다");
        return;
    }
    let mode = getSelectedDifficultyMode();
    // 난이도 필터링된 카드만 선택
    let filtered = (mode === "all") ? card : card.filter(c => c.difficulty === mode);

    if (filtered.length === 0){
        alert("해당 난이도의 카드가 없습니다");
        return;
    }
    let idx = Math.floor(Math.random() * filtered.length);
    let c = filtered[idx];
    number.value = card.indexOf(c);

    let system_type = document.querySelector('input[name="system"]:checked').value;
    if (system_type === "1") {
        document.getElementById("output").innerHTML = 
            `ID: ${c.card_id}<br>난이도: ${c.difficulty}<br>Question: ${c.name}<br>Answer: ${c.blind}`;
    } else {
        document.getElementById("output").innerHTML = 
            `ID: ${c.card_id}<br>난이도: ${c.difficulty}<br>Question: ${c.name}<br>Answer: ${c.answer}`;
    }
}
document.getElementById("random").addEventListener('click', show_random_card);
document.getElementById("make_card").addEventListener('click', make_card);
document.getElementById("show_card").addEventListener('click', show_card);
document.getElementById("rightorwrong").addEventListener('click', player_guess);// 난이도 적용 버튼
document.getElementById("applyDifficulty").addEventListener("click", () => {
    let idx = parseInt(number.value, 10);
    let c = card[idx];
    if (!c) {
        alert("Card not found");
        return;
    }
    let selected = document.querySelector('input[name="difficulty_edit"]:checked').value;
    c.difficulty = selected;
    alert(`Card #${idx}의 난이도가 ${selected}로 변경되었습니다`);
});