window.onload = function () {
    var saniye = 00;
    var salise = 00;
    var dakika = 00;
    var dakikaElemani = document.getElementById('dakika');
    var saniyeElemani = document.getElementById('saniye');
    var saliseElemani = document.getElementById('salise');
    var baslamaButonu = document.getElementById('baslama');
    var durdurmaButonu = document.getElementById('durdurma');
    var sifirlamaButonu = document.getElementById('sifirlama');
    var Interval;
    
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);
    
    baslamaButonu.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(zamaniBaslat, 10);
        durdurmaButonu.style.visibility="visible";
        baslamaButonu.style.visibility="hidden";
    }

    durdurmaButonu.onclick = function () {
        clearInterval(Interval);
        baslamaButonu.innerHTML = "Devam";
        baslamaButonu.style.visibility="visible";
        durdurmaButonu.style.visibility="hidden";
    }

    sifirlamaButonu.onclick = function () {
        clearInterval(Interval);

        dakika = "00";
        salise = "00";
        saniye = "00";
        
        saliseElemani.innerHTML = salise;
        saniyeElemani.innerHTML = saniye;
        dakikaElemani.innerHTML = dakika;
        baslamaButonu.innerHTML = "Başla";
        durdurmaButonu.style.visibility="hidden";
        baslamaButonu.style.visibility="visible";
    }

    function zamaniBaslat() {
        salise++;

        if (salise <= 9) {
            saliseElemani.innerHTML = "0" + salise;
        }

        if (salise > 9) {
            saliseElemani.innerHTML = salise;
        }
        if (salise > 99) {
            console.log("saniye");
            saniye++;
            saniyeElemani.innerHTML = "0" + saniye;
            salise = 0;
            saliseElemani.innerHTML = "0" + 0;
        }

        if (saniye > 9) {
            saniyeElemani.innerHTML = saniye;
        }

        if (saniye > 59) {
            console.log("dakika");
            dakika++;
            dakikaElemani.innerHTML = "0" + dakika;
            saniye = 0;
            saniyeElemani.innerHTML = "0" + 0;
            }
    
        if (dakika > 9) {
            saniyeElemani.innerHTML = saniye;
        }
   
    }
}
