const message = `Selamat Ulang Tahun, Mba Mera.\n\nHari ini spesial, sama seperti kamu yang sudah jadi bagian dari banyak cerita baik.\n\nSemoga hari-harimu dipenuhi hal-hal kecil yang bikin kamu tersenyum, dipenuhi hal besar yang bikin kamu bangga, dimudahkan dalam langkahmu untuk menggapai semua mimpimu.\n\nTerima kasih sudah menjadi bagian dari perjalanan sebagai teman.\nSemoga semua hal baik terus menyertaimu ke depannya. \n\nPokoknya hari ini dan seterusnya kamu wajib bahagia!!!`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector("#btn4").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
