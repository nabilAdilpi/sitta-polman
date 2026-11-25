// script halaman login

// modal lupa password
let spanPw = document.getElementsByClassName('close-1')[0];
let tmbl = document.getElementById('forgotPw');
let modalPw = document.getElementById('modalPw');

tmbl.onclick = () => {
    modalPw.style.display = 'block';
}

spanPw.onclick = () => {
    modalPw.style.display = 'none';
}

// modal daftar akun
let span = document.getElementsByClassName('close')[0];
let modalReg = document.getElementById('modalReg');
let btn = document.getElementById('buatAkun');

btn.onclick = () => {
    modalReg.style.display = 'block';
}

span.onclick = () => {
    modalReg.style.display = 'none';
}

// masuk halaman dashboard
function masuk() {
    let inputEmail = document.getElementById('email').value;
    let inputPassword = document.getElementById('password').value;
    let pesan = document.getElementById('pesan');
    let timer = null;

    const verifikasi = dataPengguna.find(
        (user) => user.email === inputEmail && user.password === inputPassword
    );

    if (inputEmail === '' || inputPassword === '') {
        pesan.innerHTML = "Masukkan email dan password";
        timer = setTimeout(() => {
            pesan.innerHTML = '';
        }, 2500);
    } else if (verifikasi) {
        alert("Login berhasil");
        window.location.href = "dashboard.html";
    } else {
        pesan.innerHTML = "email/password yang anda masukkan salah";
        timer = setTimeout(() => {
            pesan.innerHTML = '';
        }, 2500);
    }
}
// script login end

// script pesanan
function cariPesanan() {
    let hasil = document.getElementById('hasil');
    let no = document.getElementById('kodePesanan').value;
    let data = dataPesanan[no];
    let timer = null;

    if (data == undefined) {
        hasil.innerHTML = "Nomor yang anda masukkan tidak valid";
        timer = setTimeout(() => {
            hasil.innerHTML = '';
        }, 2500);
    } else {
        hasil.innerHTML = `
            <h2>Data Pesanan</h2>
            kodePesanan: ${data.kodePesanan} <br>
            namaPelanggan: ${data.namaPelanggan} <br>
            nomorMeja: ${data.nomorMeja} <br>
            tanggal: ${data.tanggal} <br>
            status: ${data.status} <br>
            <h2>Detail Makanan</h2>
        `;

        for (let i = 0; i < data.makanan.length; i++) {
            hasil.innerHTML += `
            nama: ${data.makanan[i].nama} <br>
            jumlah: ${data.makanan[i].jumlah} <br>
            harga: ${data.makanan[i].harga} <br><br>`
        }

        hasil.innerHTML += `
            totalBayar: ${data.totalBayar}`;
    }
}

// script tracking
function cariTracking() {
    let hasil = document.getElementById('hasil');
    let no = document.getElementById('noDO').value;
    let data = dataTracking[no];
    let timer = null;

    if (data == undefined) {
        hasil.innerHTML = "Nomor yang anda masukkan tidak valid";
        timer = setTimeout(() => {
            hasil.innerHTML = '';
        }, 2500);
    } else {
        hasil.innerHTML = `
            <h2>Data Tracking</h2>
            nomorDO: ${data.nomorDO} <br>
            nama: ${data.nama} <br>
            status: ${data.status} <br>
            ekspedisi: ${data.ekspedisi} <br>
            tanggalKirim: ${data.tanggalKirim} <br>
            paket: ${data.paket} <br>
            total: ${data.total} <br>
            <h2>Detail Tracking</h2>
        `;

        for (let i = 0; i < data.perjalanan.length; i++) {
            hasil.innerHTML += `
            waktu: ${data.perjalanan[i].waktu} <br>
            keterangan: ${data.perjalanan[i].keterangan} <br>`
        }
    }
}