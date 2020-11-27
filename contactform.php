<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $message = $_POST['message']


    $mailTo = "gaba505@o2.pl"
    mail($mailTo, 'test', $message);
    header("Location: index.php")
}