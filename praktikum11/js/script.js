document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // mengambil element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan komputer == pilihan user (Draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(()=>alert("DRAW"), 800);
    }

    // jika pilihan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        setTimeout(()=>alert("Komputer WIN"), 800);
    }else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        setTimeout(()=>alert("Komputer WINN"), 800);
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        setTimeout(()=>alert("Komputer WINNN"), 800);
    }

    // Jika pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(()=>alert("User WIN"), 800);
    }else if (pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        setTimeout(()=>alert("User WINN"), 800);
    }else if (pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        setTimeout(()=>alert("User WINNN"), 800);
    }
}