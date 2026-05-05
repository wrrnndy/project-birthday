 // FUNGSI UNTUK PINDAH SCENE
 function showScene(hideId, showId) {
    document.getElementById(hideId).classList.remove('active');
    document.getElementById(showId).classList.add('active');
}

// --- LOGIKA SCENE 1 ---
        // Munculkan teks 1 setelah 8 detik
        setTimeout(() => {
            document.getElementById('text1').classList.add('show');
           
            // Munculkan teks 2 setelah jeda 3 detik dari teks pertama
            setTimeout(() => {
                document.getElementById('text2').classList.add('show');
               
                // Munculkan tombol 1 setelah jeda 3 detik
                setTimeout(() => {
                    document.getElementById('btn1').classList.add('show');
                }, 3000);
            }, 3000);
        }, 8000);

// pindah scene 1 ke scene 2
        const audio =
        document.getElementById("music");

        document.getElementById('btn1').addEventListener('click', () => {
            showScene('scene1', 'scene2');

            audio.currentTime = 0;
            audio.play().catch(err => {
                console.log("Audio Gagal:",err);
            });
            
        
        const btn2 = 
        document.getElementById("btn2");

        // reset dulu
        btn2.classList.remove('show');
        btn2.classList.add('hidden');

        // mulai hitung awal 
        setTimeout(() => {
            btn2.classList.remove('hidden');
            btn2.classList.add('show');
        }, 30000);
    });
 
// pindah scene 2 ke scene 3
        document.getElementById('btn2').addEventListener('click', () => {
            showScene('scene2', 'scene3');
        

        const cake =
        document.getElementById('cakeArea');

        cake.classList.remove('show');

        setTimeout(() => {
            cake.classList.add('show');
        }, 500);

            const btn3 = 
            document.getElementById("btn3");
    
            // reset dulu
            btn3.classList.remove('show');
            btn3.classList.add('hidden');
    
            // mulai hitung awal 
            setTimeout(() => {
                btn3.classList.remove('hidden');
                btn3.classList.add('show');
            }, 10000);
        });

// pindah scene 3 ke scene 4
document.getElementById('btn3').addEventListener('click', () => {
    showScene('scene3', 'scene4');
});
       