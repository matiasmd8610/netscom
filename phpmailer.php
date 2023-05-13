<?php

if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';
require 'phpmailer/SMTP.php';

$name = $_POST['name'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];
$service = $_POST['service'];
$message = $_POST['message'];
$subject = 'Mensaje recibido desde www.netscom.com.ar';

$recaptcha_secret = "6Lc70vslAAAAAERIlmrHNxMCAOaTl040ezNmQdWR"; //Add secret key
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
$response = json_decode($response, true);

if( empty(trim($name)) ) $name = 'anonimo';

$body = <<<HTML
    <h1>Mensaje recibido desde www.netscom.com.ar</h1>
    <p>De: $name | $email | $telephone</p>
    <p>Servicio por el que consulta: $service</p>
    $message
HTML;

$mailer = new PHPMailer(true);

try {
    //Server setting
    $mailer->SMTPDebug = 0;
    $mailer->isSMTP();
    $mailer->Host = 'smtp.netscom.com.ar';
    $mailer->SMTPAuth = true;  
    $mailer->Username = 'info@netscom.com.ar';
    $mailer->Password = '';                          
    $mailer->SMTPSecure = 'ssl';
    $mailer->Port = 25;

    //Recipients
    $mailer->setFrom( $email, "$name" );
    $mailer->addAddress('info@netscom.com.ar','Sitio web');

    //Content
    $mailer->isHTML(true);
    $mailer->Subject = $subject;
    $mailer->msgHTML($body);
    $mailer->AltBody = strip_tags($body);
    $mailer->CharSet = 'UTF-8';

    if($response["success"] === true){
        $mailer->send();
        header("Location: thank-you.html" );
    } else {
        header("Location: 404.html" );
    }

} catch (Exception $e) {
    return "El mensaje no pudo ser enviado. Error: $mailer->ErrorInfo";
}

?>