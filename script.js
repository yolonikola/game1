const questions = [
    "Senin = ?",
    "Selasa = ?",
    "Rabu = ?",
    "Kamis = ?",
    "Jumat = ?",
    "Sabtu = ?",
    "Minggu = ?",
    "Akhir pekan = ?",
    "Januari = ?",
    "Februari = ?",
    "Maret = ?",
    "April = ?",
    "Mei = ?",
    "Juni = ?",
    "Juli = ?",
    "Agustus = ?",
    "September = ?",
    "Oktober = ?",
    "November = ?",
    "Desember = ?"
];

const answers = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
    "Wochenende",
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let currentQuestionIndex = 0;

function displayRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestionIndex = randomIndex;
    document.getElementById("question").textContent = questions[currentQuestionIndex];
    document.getElementById("answer").value = ""; // Mengosongkan kolom jawaban
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value; // Tanpa mengubah jawaban pengguna menjadi huruf kecil
    const correctAnswer = answers[currentQuestionIndex]; // Tanpa mengubah jawaban yang benar menjadi huruf kecil
    
    if (userAnswer === correctAnswer) {
        alert("Benar!");
        displayRandomQuestion(); // Setelah jawaban benar, tampilkan pertanyaan baru secara acak
    } else {
        alert("Anda salah. Coba lagi.");
    }
}

window.onload = function() {
    displayRandomQuestion();
    
    // Menambahkan event listener untuk "keypress" pada elemen input jawaban
    document.getElementById("answer").addEventListener("keypress", function(event) {
        if (event.key === "Enter") { // Memeriksa apakah tombol yang ditekan adalah tombol "Enter"
            checkAnswer(); // Memanggil fungsi checkAnswer() jika tombol "Enter" ditekan
        }
    });
};
