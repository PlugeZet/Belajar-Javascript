let port, writer;

// 1. Akuisisi Elemen DOM
const connectButton = document.getElementById('connectButton');
const statusElement = document.getElementById('status');

const redOn     = document.getElementById('redOn');
const redOff    = document.getElementById('redOff');

const yellowOn  = document.getElementById('yellowOn');
const yellowOff = document.getElementById('yellowOff');

const greenOn   = document.getElementById('greenOn');
const greenOff  = document.getElementById('greenOff');

const buzzerOn  = document.getElementById('buzzerOn');
const buzzerOff = document.getElementById('buzzerOff');

// Validasi kapabilitas API pada agen pengguna
if (!('serial' in navigator)) {
    alert('Browser tidak mendukung Web Serial API. Gunakan versi terbaru Chrome/Edge.');
    statusElement.textContent = 'Status: Web Serial API tidak didukung.';
}

// 2. Modifikasi Manajemen State Antarmuka
function setButtonsEnabled(enabled) {
    if (redOn) redOn.disabled = !enabled;
    if (redOff) redOff.disabled = !enabled;
    
    if (yellowOn) yellowOn.disabled = !enabled;
    if (yellowOff) yellowOff.disabled = !enabled;
    
    if (greenOn) greenOn.disabled = !enabled;
    if (greenOff) greenOff.disabled = !enabled;
    
    if (buzzerOn) buzzerOn.disabled = !enabled;
    if (buzzerOff) buzzerOff.disabled = !enabled;
}

// Penanganan Koneksi Asinkron
connectButton.addEventListener('click', async () => {
    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });
        
        writer = port.writable.getWriter();

        statusElement.textContent = 'Status: Terhubung';
        connectButton.disabled = true;
        setButtonsEnabled(true);
    } catch (error) {
        statusElement.textContent = 'Status: Koneksi Gagal - ' + error.message;
        console.error('Interupsi koneksi serial:', error);
    }
});

// Penanganan Transmisi I/O
async function sendSerialData(data) {
    if (!port || !writer) {
        console.warn('Instruksi dibatalkan: Port serial tidak terhubung.');
        return;
    }

    try {
        const text = data + '\n';
        const dataArrayBuffer = new TextEncoder().encode(text);
        
        await writer.write(dataArrayBuffer);
        console.log('Transmisi sukses:', data);
    } catch (error) {
        console.error('Kegagalan transmisi I/O:', error);
        statusElement.textContent = 'Status: Error Transmisi - ' + error.message;
    }
}

// 3. Modifikasi Event Binding & Routing Komando
if (redOn && redOff && yellowOn && yellowOff && greenOn && greenOff && buzzerOn && buzzerOff) {
    redOn.addEventListener('click',     () => sendSerialData('RED_ON'));
    redOff.addEventListener('click',    () => sendSerialData('RED_OFF'));

    yellowOn.addEventListener('click',  () => sendSerialData('YELLOW_ON'));
    yellowOff.addEventListener('click', () => sendSerialData('YELLOW_OFF'));

    greenOn.addEventListener('click',   () => sendSerialData('GREEN_ON'));
    greenOff.addEventListener('click',  () => sendSerialData('GREEN_OFF'));

    buzzerOn.addEventListener('click',  () => sendSerialData('BUZZ_ON'));
    buzzerOff.addEventListener('click', () => sendSerialData('BUZZ_OFF'));
}