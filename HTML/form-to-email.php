<?php
// This is fine because it is a whole-page validation check, and
// there's no sense loading server functions if you can't process
if(!isset($_POST['submit'])) {
    echo "error; you need to submit the form!";
}
 
// Ensure that it passes the checks
function Validate($name, $email) {
    if(empty($name) || empty($email) || IsInjected($visitor_email)) {
        header('Location: index.html');
        exit;
    }
    return true;
}
 
// The function that performs the sending
function Send($from, $name, $subj, $msg, $phone) {
    $to = "<excluded for privacy>";
    $message = "From: $name\n\nPhone: $phone\n\nSubject: $subject\n\nMessage: $msg";
    $headers = "From: $from\r\nReply-to: $visitor_email";
    mail($to, $subj, $message, $headers);
    return true;
}
 
// Function to validate against any email injection attempts
function IsInjected($str) {
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
  if(preg_match($inject,$str)) {
    return true;
  } else {
    return false;
  }
}
 
function Run($name, $email, $num, $subj, $msg) {
    if(!Validate($name, $email)) {
        exit;
    }
    Send($email, $name, $subj, $msg, $phone);
    header('Location: thank-you.html');
}
 
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];
 
Run($name, $visitor_email, $phone, $subject, $message);