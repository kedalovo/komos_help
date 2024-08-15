app = window.Telegram.WebApp

input_email = document.getElementsByName("e-mail")
input_code = document.getElementsByName("confirmation-code")

user = app.initDataUnsafe.user
// ID - user.id, имя - user.first_name, фамилия - user.last_name
// e-mail - input_email.value

function check_user(id, data)
{
    // Код, который делает что-то с принятыми данными
}