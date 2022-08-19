<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$email_from = 'info@gamil.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n"
                "Subject: $subject.\n"
                "User Message: $message .\n";

$to = 'n.sekonyela@gmail.com'//where the email must be sent to


//below are things that should be contained in that email
$headers = " From $email_from \r\n";

$headers .= "Replay-To:" $visitor_email \r\n;

mail($to,$email_subject, $email_body, $headers);

// This is to say after the person has sent their email they must be redirected to this page. 
header("Location: contact.html");


?>