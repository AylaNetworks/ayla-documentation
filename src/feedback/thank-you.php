<?php
  ob_start();
  $email_to = "anonz3000@gmail.com";
  $email_subject = "Ayla Core Content Feedback";

  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $email_from = $_POST['email'];
  $company = $_POST['company'];
  $page = $_POST['page'];
  $description = $_POST['description'];

  $email_message = "Form details below.\n\n";
 
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
 
  $email_message .= "First Name: ".clean_string($first_name)."\n";
  $email_message .= "Last Name: ".clean_string($last_name)."\n";
  $email_message .= "Email: ".clean_string($email_from)."\n";
  $email_message .= "Company: ".clean_string($company)."\n";
  $email_message .= "Page: ".clean_string($page)."\n";
  $email_message .= "Description: ".clean_string($description)."\n";

  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers); 

  ob_end_clean();

  readfile("thank-you/index.html");
?>


