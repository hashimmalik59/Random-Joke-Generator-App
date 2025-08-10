// Yahan hum ne elements ko access kiya hai
const displayJoke = document.querySelector(".display-joke");
const jokeButton = document.querySelector(".joke-button");

// Yeh jokes banaye array mein
const jokesArray = [
    "Police wala apne bete se: 'Tumhara result bohat bura aya hai, aaj se tumhara khelna aur TV dekhna band.' Beta: 'Yeh pachas rupay pakro aur is baat ko yahin khatam karo.'",
    "Maan ne pukaara: 'Beta tum kahan ho?' Beta: 'Main ghusalkhane mein naha raha hoon.' Maan: 'Bahar aa jao, nahi to thand lag jaayegi.' Beta: 'Nahi Maa, main lehaaf odh kar naha raha hoon.'",
    "Ustaad: 'Klass mein itna shor kyun ho raha hai?' Ladka: 'Janab hum khamoshi ke faide par behas kar rahe hain.'",
    "Husband TV dekhte huye zor-zor se ro raha tha. Wife ne poocha: 'Kaunsi film dekh rahe ho?' Husband: 'Apni shaadi ki film dekh raha hoon.'",
    "Biwi: 'Main maayke ja rahi hoon.' Shohar: 'Gate ka tala lete jao, main bhi aata hoon.'",
    "Doctor: 'Aapko araam ki zarurat hai.' Patient: 'Sir usme WiFi hoga?'",
    "Teacher: 'Yeh kaun si foolish mistake hai?' Student: 'Sir woh jo aapne mujhe class mein admit karke ki thi.'",
    "Boss: 'Tum late kyun aaye?' Employee: 'Sir traffic bohot kam tha, isliye dheere aaya.'",
    "Dost: 'Tere exams kaisay hue?' Main: 'Result ke baad bataunga… hospital se.'",
    "Biwi: 'Tum mujhe kabhi shopping par le jaoge?' Shohar: 'Jab tum mujhe kabhi khana khud bana ke khilao gi.'",
    "Pathan: 'Main ne swimming seekh li.' Dost: 'Kaise?' Pathan: 'TV pe dekh ke.' Dost: 'Practice kab ki?' Pathan: 'Paani me gir ke.'",
    "Husband: 'Mere baalon ka rang badal raha hai.' Wife: 'Chup raho, tumhare sar pe baal hi kitne bache hain.'",
    "Teacher: 'Tum homework kyun nahi laye?' Student: 'Sir, mera pen ro raha tha.'",
    "Friend: 'Mujhe tumhari yaad aa rahi hai.' Main: 'Facebook pe like kardo, reply samjho.'",
    "Wife: 'Tum mujhe ignore karte ho!' Husband: 'Acha, toh ab tumhara sunun ya ignore karne ka silsila jari rakhoon?'",
    "Larka: 'Tumhe dekh ke meri battery charge ho jati hai.' Larki: 'Magar tumhara charger mere paas nahi.'",
    "Boss: 'Kaam complete hua?' Employee: 'Sir progress bar 99% pe atak gaya.'",
    "Ammi: 'Khana khaya?' Beta: 'Haan WhatsApp pe photo dekh li.'",
    "Teacher: 'Yeh formula kisne discover kiya?' Student: 'Sir Google ne.'",
    "Wife: 'Tum mujhe kab surprise doge?' Husband: 'Jab tum khud khana bana ke dogi.'",
];

// Logic aik aik array se loop through kiya
function randomJoke() {
    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    displayJoke.textContent = jokesArray[randomIndex];
}
// yeh button loop through karne ka
jokeButton.addEventListener("click", randomJoke);

// Night Mode
let on = false; // false = Day, true = Night
const themeButton = document.getElementById('theme');
const link = document.querySelector("link");

themeButton.addEventListener("click", () => {
    on = !on; // toggle value

    if (on) {
        // Night mode
        link.setAttribute("href", "night.css");
        themeButton.textContent = "Day";
        console.log("Night mode activated");
    } else {
        // Day mode
        link.setAttribute("href", "day.css");
        themeButton.textContent = "Night";
        console.log("Day mode activated");
    }
});