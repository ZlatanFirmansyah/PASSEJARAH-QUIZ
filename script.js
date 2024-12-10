document.getElementById("submit-btn").addEventListener("click", function () {
    const formData = new FormData(document.getElementById("quiz-form"));
    let totalScore = 0;

    // Jawaban pilihan ganda (5 poin)
    if (formData.get("q1") === "a") totalScore += 5;
    if (formData.get("q2") === "b") totalScore += 5;
    if (formData.get("q3") === "d") totalScore += 5;
    if (formData.get("q4") === "c") totalScore += 5;
    if (formData.get("q5") === "b") totalScore += 5;
    if (formData.get("q6") === "c") totalScore += 5;
    if (formData.get("q7") === "b") totalScore += 5;
    if (formData.get("q8") === "a") totalScore += 5;
    if (formData.get("q9") === "c") totalScore += 5;
    if (formData.get("q10") === "c") totalScore += 5;

    // Jawaban isian (10 poin)
    const q11Answers = ["partai komunis indonesia", "pki", "komunis indonesia"];
    if (q11Answers.includes(formData.get("q11")?.toLowerCase())) totalScore += 10;

    const q12Answers = ["musso", "muso", "muso pki"];
    if (q12Answers.includes(formData.get("q12")?.toLowerCase())) totalScore += 10;

    const q13Answers = ["1965", "tahun 1965", "19 65"];
    if (q13Answers.includes(formData.get("q13")?.toLowerCase())) totalScore += 10;

    const q14Answers = ["komunisme", "ideologi komunisme", "komunis"];
    if (q14Answers.includes(formData.get("q14")?.toLowerCase())) totalScore += 10;

    const q15Answers = ["jendral ahmad yani", "jenderal ahmad yani", "ahmad yani", "yani", "jenderal a. yani"];
    if (q15Answers.includes(formData.get("q15")?.toLowerCase())) totalScore += 10;

    // Arahkan ke halaman hasil dengan skor total
    window.location.href = `end.html?score=${totalScore}`;
});

