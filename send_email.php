<?php

if($_SERVER["REQUEST_METHOD"]=='POST'){
    $name = $_POST['name'];
     $email = $_POST['email'];
      $message = $_POST['message'];

      $to = "example@mail.com";
      $subject = "New contact from submission";
      $header = 'From:' . $name ."<" . $email . ">"\r\n;
      $header .= "Reply-To:" . $email . "\r\n";
      $header .= "Content-Type: text/plain; charset=utf-8\r\n";

      if(mail($to, $subject, $message, $header)){
        http_response_code(200);
        echo "Email sent successfully!";
      }else{
        http_response_code(500);
        echo "Oops! Something went wrong";
      }else{
        http_response_code(403);
        echo "Access denied";
      }
      }
}
?>