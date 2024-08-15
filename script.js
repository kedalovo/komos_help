app = window.Telegram.WebApp

input_email = document.getElementsByName("e-mail")
input_code = document.getElementsByName("confirmation-code")

user = app.initDataUnsafe.user
// ID - user.id, имя - user.first_name, фамилия - user.last_name
// e-mail - input_email.value

check_user()

function check_user()
{
    let user_id = 7288248016
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://tst-izm-1c001.komos-group.ru/1cv8_ki_for_hakaton_ZykovSL_do18082024/hs/Return/" + user_id);
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);
    } else {
        console.log(`Error: ${xhr.status}`);
    }
    };
}