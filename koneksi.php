<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "db_latihan";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>

<?php
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
} else {
    echo "Koneksi berhasil";
}
?>

<?php
include "koneksi.php";

echo "Terhubung ke database";
?>

<?php
include "koneksi.php";

$query = mysqli_query($conn, "SELECT * FROM users");

while ($data = mysqli_fetch_assoc($query)) {
    echo $data['nama'] . "<br>";
}
?>
