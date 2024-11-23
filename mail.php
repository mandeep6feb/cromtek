<?php
ini_set("SMTP", "mail.cromteksolutions.info");
ini_set("sendmail_from", $_POST['email']);
  $name = $_POST['name'];
  $phone = $_POST['mobile'];
  $email = $_POST['email'];
  $company = $_POST['comp'];
  $text = $_POST['query'];
  
   $message="Contact Name:".$name."\n"."Contact Number:".$phone."\n"."Company:".$company."\n"."Message:".$text."";

    $headers="From: ".$email;
    $subject='Form Submission';
    $to='cromtek@cromteksolutions.info,kohlimandeep06@gmail.com';
     //echo $to, $subject, $message, $headers;
    mail($to, $subject, $message, $headers);
    if (mail($to, $subject, $message, $headers))
    header("Location: index.html");
    exit;
    // echo "Check your email now....";
    // include 'fail.php';

?>

// <?php 

//   if(isset($_POST['submit']))
//   $name = $_POST['name'];
//   $phone = $_POST['mobile'];
//   $email = $_POST['email'];
//   $company = $_POST['comp'];
//   $text = $_POST['query'];

  
//      $to='info@itprismsolutions.com,kohlimandeep06@gmail.com';
//         $subject='Form Submission';

//         $message="Contact Name:".$name."\n"."Contact Number:".$phone."\n"."Company:".$company."\n"."Message:".$text."";
//         $headers="From: ".$email;
//         if(mail($to, $subject, $message, $headers))
//         {
//         $msg = "we will contact you soon";
//         }
//         else{
//         $msg = "Something went wrong!";
//             }

//     }

//  ?>