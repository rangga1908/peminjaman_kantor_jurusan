// Array untuk menyimpan data sementara
let users = [];

// Fungsi untuk menambah data
function addData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const alamat = document.getElementById("alamat").value;
    const nomor = document.getElementById("nomor").value;

    if (name && email && password && alamat && nomor) {
        users.push({ name, email, password, alamat, nomor });
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        document.getElementById("alamat").value = '';
        document.getElementById("nomor").value = '';
        displayData();
    } else {
        alert("Mohon isi semua kolom!");
    }
}

// Fungsi untuk menampilkan data
function displayData() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    users.forEach((user, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.alamat}</td>
                <td>${user.nomor}</td>
                <td>
                    <button onclick="editData(${index})">Edit</button>
                    <button onclick="deleteData(${index})">Hapus</button>
                    <button onclick="showStruk(${index})">Struk</button>
                </td>
            </tr>
        `;
    });
}

// Fungsi untuk mengedit data
function editData(index) {
    const user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("password").value = user.password;
    document.getElementById("alamat").value = user.alamat;
    document.getElementById("nomor").value = user.nomor;

    deleteData(index);
}

// Fungsi untuk menghapus data
function deleteData(index) {
    users.splice(index, 1);
    displayData();
}

// Fungsi untuk menampilkan struk
function showStruk(index) {
    const user = users[index];
    const strukContent = `
               RPL e AstaArkananta
        ===================================
             STRUK PEMINJAMAN BARANG
        ===================================
        Nama          : ${user.name}   
        Email         : ${user.email}
        Jenis Barang  : ${user.alamat}
        Nomor HP      : ${user.nomor}
        ===================================
           TERIMAKASIH TELAH MENGGUNAKAN 
                   LAYANAN KAMI
        ===================================          
    `;
    document.getElementById("strukContent").textContent = strukContent;
    document.getElementById("strukContainer").style.display = "block";
}

// Fungsi untuk menyembunyikan struk
function hideStruk() {
    document.getElementById("strukContainer").style.display = "none";
}

// Fungsi untuk mencetak konten struk
function printContent(elementId) {
    const content = document.getElementById(elementId).textContent;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`<pre>${content}</pre>`);
    printWindow.document.close();
    printWindow.print();
}
