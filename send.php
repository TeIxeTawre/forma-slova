<?php
$to = 'work-biznesrost24@yandex.by'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Заявка с сайта '.$_SERVER['SERVER_NAME'] . ' ' . $_POST['form']; //Заголовок сообщения

$uploaddir = 'uploads/';
$uploadfile = $uploaddir . basename($_FILES['fileToUpload']['name']);
move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $uploadfile);

$message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>';
        $message .= '<p>'.$_POST['form'].'</p>';
        $message .= '<p>'.$_POST['url'].'</p>';
        if(isset($_POST['user_name']) && $_POST['user_name'] !== '')
            $message .= '<h2>Личная информация</h2>';
        if(isset($_POST['user_name']) && $_POST['user_name'] !== '')
            $message .= '<p>Имя: '.$_POST['user_name'].'</p>';
        if(isset($_POST['user_phone']) && $_POST['user_phone'] !== '')
            $message .= '<p>Телефон: '.$_POST['user_phone'].'</p>';
        if(isset($_POST['user_email']) && $_POST['user_email'] !== '')
            $message .= '<p>Email: '.$_POST['user_email'].'</p>';
        if(isset($_POST['user_message']) && $_POST['user_message'] !== '')
            $message .= '<p>Сообщение: '.$_POST['user_message'].'</p>';
        if($check !== false) {
            $message .= $check["mime"];
        }
$message .= '                 
            </body>
        </html>'; //Текст нащего сообщения можно использовать HTML теги
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: form@".$_SERVER['SERVER_NAME']."\r\n"; //Наименование и почта отправителя
mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
