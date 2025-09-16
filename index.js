let guess = document.getElementById("guess")
let number = document.getElementById("number")
let now_card_id = 0 
const card  = []
class Card{
    constructor(card_id,name,answer,blind,difficulty){
            this.card_id = card_id;
            this.name = name;
            this.answer = answer;
            this.blind = blind;
            this.difficulty = difficulty;
    }
}
const initialCards = [
    { name: "1차 세계대전 발발", answer: "1914" ,blind:"????",difficulty:"medium"},
    { name: "1차 세계대전 종전", answer: "1918" ,blind:"????",difficulty:"medium"},
    { name: "범죄 즉결례", answer: "1912-03-18",blind:"????-??-??" ,difficulty:"medium"},
    { name: "조선 태형령", answer: "1912-03-18",blind:"????-??-??" ,difficulty:"medium"},
    { name: "경찰범 처벌 규칙", answer: "1912-03-25",blind:"????-??-??" ,difficulty:"medium"},
    { name: "3.1운동", answer: "1919-03-01",blind:"????-??-??" ,difficulty:"medium"},
    { name: "쌀 소동", answer: "1918" ,blind:"????",difficulty:"medium"},
    { name: "치안 유지법", answer: "1925-04-27",blind:"????-??-??" ,difficulty:"medium"},
    { name: "만주 사변", answer: "1931-09-18",blind:"????-??-??" ,difficulty:"medium"},
    { name: "대공황", answer: "1929" ,blind:"????",difficulty:"medium"},
    { name: "아시아 태평양 전쟁", answer: "1941",blind:"????" ,difficulty:"medium"},
    { name: "2차 세계대전 발발", answer: "1939",blind:"????" ,difficulty:"medium"},
    { name: "2차 세계대전 종전", answer: "1945",blind:"????" ,difficulty:"medium"},
    { name: "치안 유지법", answer: "1925-04-27",blind:"????-??-??" ,difficulty:"medium"},
    { name: "진주만 기습", answer: "1942-06",blind:"????-??" ,difficulty:"hard"},
    { name: "과달카날 전투 발발", answer: "1942-08",blind:"????-??" ,difficulty:"medium"},
    { name: "과달카날 전투 종전", answer: "1943-02",blind:"????-??" ,difficulty:"medium"},
    { name: "히로시마 원폭 투하", answer: "1945-08-06",blind:"????-??-??" ,difficulty:"medium"},
    { name: "나가사키 원폭 투하", answer: "1945-08-09",blind:"????-??-??" ,difficulty:"medium"},
    { name: "소련 참전", answer: "1945-08" ,blind:"????-??",difficulty:"medium"},
    { name: "국가 총동원법", answer: "1938",blind:"????" ,difficulty:"hard"},
    { name: "『국민 총력』 발행 시작", answer: "1939",blind:"????" ,difficulty:"hard"},
    { name: "지원병제 실시", answer: "1938",blind:"????" ,difficulty:"hard"},
    { name: "학도 지원병 제도 실시", answer: "1943",blind:"????" ,difficulty:"medium"},
    { name: "징병제 실시", answer: "1944",blind:"????",difficulty:"medium" },
    { name: "독립 의군부", answer: "1912",blind:"????",difficulty:"hard" },
    { name: "독립 의군부 설립자", answer: "임병찬",blind:"???",difficulty:"hard" },
    { name: "대한 광복회", answer: "1915",blind:"????",difficulty:"hard" },
    { name: "대한 광복회 설립자", answer: "박상진",blind:"???",difficulty:"hard" },
    { name: "대한 광복회 특징", answer: "군대식 조직",blind:"??? 조직",difficulty:"hard" },
    { name: "대한 광복회 업적", answer: "만주 무관 학교 설립/친일파 처단",blind:"?? ?? ?? 설립/??? 처단",difficulty:"hard" },
    { name: "경학사 설립 시기", answer: "1911",blind:"????",difficulty:"hard"},
    { name: "국외 독립운동 거점", answer: "서간도/북간도/연해주/상하이/미주",blind:"??도/??도/??주/??이/?주",difficulty:"hard" },
    { name: "서간도 독립운동 기지", answer: "경학사",blind:"???",difficulty:"hard" },
    { name: "경학사 설립자", answer: "이회영/이상룡",blind:"???/???",difficulty:"hard"},
    { name: "상하이 독립운동 기지", answer: "동제사",blind:"???",difficulty:"hard" },
    { name: "동제사 설립 시기", answer: "1912",blind:"????",difficulty:"hard" },
    { name: "연해주(블라디보스크) 독립운동 중심지", answer: "신한촌",blind:"???",difficulty:"hard" }
    
    
];

// 초기 카드 삽입
initialCards.forEach(item => {
    card.push(new Card(random_id(), item.name, item.answer,item.blind,item.difficulty));
});
function random_id(){
    now_card_id = Math.floor(Math.random() * (99999));
    return now_card_id
}//0~99999 랜덤아이디 생성
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
function apply_difficulty(){
    let idx = parseInt(number.value, 10);
    let c = card[idx];
    if (!c) {
        alert("Card not found");
        return;
    }
    let selected = document.querySelector('input[name="difficulty_edit"]:checked').value;
    c.difficulty = selected;
    alert(`Card #${idx}의 난이도가 ${selected}로 변경되었습니다`);
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
function show_answer(){
    let idx = parseInt(number.value, 10);
    let c = card[idx];
    let mode = getSelectedDifficultyMode();

    if (!c) {
        document.getElementById("output").innerHTML = "Card not found";
        return;
    }
    if (mode !== "all" && c.difficulty !== mode) {
        document.getElementById("output").innerHTML = "해당 난이도의 카드가 아닙니다";
        return;
    }
    document.getElementById("output").innerHTML = 
            `ID: ${c.card_id}<br>난이도: ${c.difficulty}<br>Question: ${c.name}<br>Answer: ${c.answer}`;
   
}
document.getElementById("random").addEventListener('click', show_random_card);
document.getElementById("show_card").addEventListener('click', show_card);
document.getElementById("rightorwrong").addEventListener('click', player_guess);// 난이도 적용 버튼
document.getElementById("showanswer").addEventListener("click",show_answer)
document.getElementById("applyDifficulty").addEventListener("click", apply_difficulty)