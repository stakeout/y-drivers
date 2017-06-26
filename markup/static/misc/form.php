<?php
// define variables and set to empty values
$name = $phone =  '';
function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 $name = test_input($_POST["username"]);
 $phone = test_input($_POST["phone"]);
 $json = array(); // пoдгoтoвим мaссив oтвeтa
 if (empty($name) || empty($phone)) { // eсли хoть oднo пoлe oкaзaлoсь пустым
   $json['error'] = 'Вы зaпoлнили нe всe пoля!'; // пишeм oшибку в мaссив
   echo json_encode($json); // вывoдим мaссив oтвeтa 
   die(); // умирaeм
 }
 // message structure
  $to = 'novash@tut.by';
  $url = 'https://rabota-v-yandex-taxi.com';
  $subject = 'Заявка с сайта Яндекс.Водителей';
  $headers = 'From: '. $name . '\r\n';
  $headers = 'MIME-Version: 1/0\r\n';
  $headers = 'Content-Type: text/html; charset=utf-8\r\n';
  $message = '<html><body>';
 // $message .= '<img src="//css-tricks.com/examples/WebsiteChangeRequestForm/images/wcrf-header.png" alt="Website Change Request" />';
  $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
  $message .= "<tr style='background: #eee;'><td><strong>Имя:</strong> </td><td>" . $name . "</td></tr>";
  $message .= "<tr><td><strong>Телефон:</strong> </td><td>" . $phone . "</td></tr>";
 // $message .= "<tr><td><strong>Type of Change:</strong> </td><td>" . strip_tags($_POST['typeOfChange']) . "</td></tr>";
 // $message .= "<tr><td><strong>Urgency:</strong> </td><td>" . strip_tags($_POST['urgency']) . "</td></tr>";
  $message .= "<tr><td><strong>Отправлено с сайта:</strong> </td><td>" . $url . "</td></tr>";
 // $addURLS = $_POST['addURLS'];
 // if (($addURLS) != '') {
 //     $message .= "<tr><td><strong>URL To Change (additional):</strong> </td><td>" . strip_tags($addURLS) . "</td></tr>";
 // }
 // $curText = htmlentities($_POST['curText']);           
 // if (($curText) != '') {
 //     $message .= "<tr><td><strong>CURRENT Content:</strong> </td><td>" . $curText . "</td></tr>";
 // }
 // $message .= "<tr><td><strong>NEW Content:</strong> </td><td>" . htmlentities($_POST['newText']) . "</td></tr>";
  $message .= "</table>";
  $message .= "</body></html>";
  mail($to, $subject, $message, $headers);
  $json['error'] = 0; // oшибoк нe былo

	echo json_encode($json); // вывoдим мaссив oтвeтa
} else { // eсли мaссив POST нe был пeрeдaн
	echo 'GET LOST!'; // высылaeм
}

?>
