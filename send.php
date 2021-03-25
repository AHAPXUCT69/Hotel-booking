<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
if(isset($_POST['email'])){
    $title = "New request Best Tour Plan";
    $body = "
    <h2>New subscription</h2>
    <b>Email:</b> $email<br>
    ";
} else {
    $title = "New message Best Tour Plan";
    $body = "
    <h2>New message</h2>
    <b>Name:</b> $name<br>
    <b>Phone number:</b> $phone<br>
    <b>Email:</b> $mail<br><br>
    <b>Message:</b><br>$message
    ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.jino.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'message@slastenin.website'; // Логин на почте
    $mail->Password   = 'Mess@sws!'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('message@slastenin.website', 'Сластенин Николай'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('slastenin13@gmail.com');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');