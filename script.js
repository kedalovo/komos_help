// app = window.Telegram.WebApp

input_email = document.getElementsByName("e-mail")
input_code = document.getElementsByName("confirmation-code")

// user = app.initDataUnsafe.user
// ID - user.id, имя - user.first_name, фамилия - user.last_name
// e-mail - input_email.value

function check_user()
{
    app = window.Telegram.WebApp
    user = app.initDataUnsafe.user
    console.log("TESTING")
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://tst-izm-1c001.komos-group.ru/1cv8_ki_for_hakaton_ZykovSL_do18082024/hs/UserData/Data?UserId=", toString(7288248016));
    xhr.setRequestHeader("Access-Control-Allow-Origin", "True")
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

check_user()