<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit'])){
        $conn = mysqli_connect('localhost', 'root', '', 'sulphato_db') or die("Connection Failed: " .mysqli_connect_error());
        if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['bgroup'])){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['password'];

            $sql = "INSERT INTO `users` (`name`, `email`, `password`,) VALUES (`$name`, `$email`,`$password`)";

            $query = mysqli_query($conn, $sql);
            if($query){
                die ("Login Successful");
            }     nb  nb    r Occured");
            }
        }
    }
?>

