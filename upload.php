<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "antrian";

$target_dir = "images/";
$target_file = $target_dir . time() . "-" . basename($_FILES["fileToUpload"]["name"]) ;
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
  echo "bmnid = " . $_POST["bmnid"];
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 10000000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
    try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $date = date('Y-m-d');

      $nRows = $conn->query('select count(*) from queue WHERE waktu_kunjungan LIKE "'.date('Y-m-d').'%"')->fetchColumn()+1; 
      // echo $nRows;
      $nRows = "Pengunjung ".$nRows;
      $id_status = 1;



      $sql = $conn->prepare("INSERT INTO queue (`nama_pengunjung`, `id_status`, `foto_pengunjung_path`) VALUES (:nama_pengunjung, :id_status, :foto_pengunjung_path)");
      // $sql->bindParam(':id', $newId, PDO::PARAM_INT);
      // $sql->bindParam(':type', $type, PDO::PARAM_INT);
      $sql->bindParam(':foto_pengunjung_path', $target_file, PDO::PARAM_STR);
      $sql->bindParam(':nama_pengunjung', $nRows, PDO::PARAM_STR);
      $sql->bindParam(':id_status', $id_status, PDO::PARAM_INT);
      $sql->execute();
      
      // $stmt = $conn->prepare("INSERT INTO queue ");
      //         $stmt->bindParam(':tahun', $_POST["tahun"]);
      
      // $stmt->execute();
      // $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
      // $result = $stmt->fetchAll();
          
    } catch (PDOException $e) {
        $result = $e->getMessage();
    }






  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
?>