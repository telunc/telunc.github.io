<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Create the email and send the message
$to = 'telunchen@hotmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";



$sendgrid_uri = 'https://api.sendgrid.com/';
$sendgrid_key = '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';

$params = array(
   'from' => "andy.chen@eco-service.ca", //send it from our own address
   'fromname' => $name,
   'to' => $to,
   'toname' => 'Andy Chen',
   'replyto' => $email_address,
   'subject'=> $email_subject,
   'html' => $email_body,
   'text' => strip_tags($email_body),
);

$request =  $sendgrid_uri.'api/mail.send.json';

// Generate curl request
$session = curl_init($request);
curl_setopt($session, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
curl_setopt($session, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . $sendgrid_key));
curl_setopt($session, CURLOPT_POST, true);
curl_setopt($session, CURLOPT_POSTFIELDS, $params);
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// obtain response
$response = curl_exec($session);
curl_close($session);

return json_decode($response);
?>
