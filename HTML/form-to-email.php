<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)) 
{
    header('Location: index.html');
    exit;
}

if(IsInjected($visitor_email))
{
    header('Location: index.html');
    exit;
}

    $from = "$visitor_email";
    $to = "eric@cultideas.com";
    $subject = "$subject";
    $message = "From: $name\n\nPhone: $phone\n\nSubject: $subject\n\nMessage: $message";
    $headers = "From: $from\r\nReply-to: $visitor_email";
    mail($to,$subject,$message, $headers);
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 