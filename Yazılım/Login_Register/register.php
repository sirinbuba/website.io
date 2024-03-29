<?php
$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');
if (empty ($username) & empty ($password)) {
}
else {
    if (!empty ($username)) {
        if (!empty ($password)) {
            $host = "localhost";
            $dbusername = "root";
            $dbpassword = "";
            $dbname = "users";
            //Bağlantı Kurma
            $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
            if (mysqli_connect_error()) {
                die ('Bağlantı Hatası (' . mysqli_connect_errno() . ') '
                    . mysqli_connect_error());
            } else {
                $sql = "INSERT INTO users (username, password)
                    values ('$username','$password')";
                if ($conn->query($sql)) {
                    echo '<meta http-equiv="refresh" content="0;url=index.html">';

                } else {
                    echo "Hata: " . $sql . "<br>" . $conn->error;
                    die();
                }
                $conn->close();
            }
        } else {
            echo "Şifre Gerekli";
            die();
        }
    } else {
        echo "Kullanıcı Adı Gerekli";
        die();
    }
}
?>