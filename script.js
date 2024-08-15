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

function test1(new_json)
{
    console.log(new_json["test_message"])
}

async function sendData(data) {
    const response = await fetch("https://kedalovo.github.io/komos_help/test", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const result = await response.text()
    console.log(result)
}

async function handleSubmit() {
    let data = {
        user: "someuser",
        message: "Hello, World!"
    };

    try {
        let response = await sendData(data);
        console.log("Server response: ", response)
    }
    catch (error) {
        console.error("Error: ", error)
    }
}