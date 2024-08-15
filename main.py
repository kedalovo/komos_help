from telebot import types
from telebot import TeleBot
from flask import Flask, request
import requests

app = Flask(__name__)
api_url = f"https://api.telegram.org/bot<7518293362:AAG-3fDbEwfo65fJj3zuBeV1SAPh4idqlLw>/setWebhook"
webhook_url = "https://kedalovo.github.io/komos_help/test"
response = requests.post(api_url, json={"url": webhook_url})
print(response.json)

EMOJI_SOS = "🆘"
EMOJI_DOWN = "🔽"

bot = TeleBot("7518293362:AAG-3fDbEwfo65fJj3zuBeV1SAPh4idqlLw")

@bot.message_handler(commands=["start"])
def start(message: types.Message):
    keys: types.InlineKeyboardMarkup = types.InlineKeyboardMarkup()
    keys.add(types.InlineKeyboardButton(EMOJI_SOS + " Помогите мне! " + EMOJI_SOS, "t.me/komos_help_bot/helpapp"))
    bot.send_message(message.chat.id, EMOJI_DOWN + " Я могу Вам помочь, осталось только нажать на кнопку! " + EMOJI_DOWN, reply_markup=keys)

@bot.message_handler(commands=["test"])
def help(message: types.Message):
    new_json = {"test_message": "Hello, World!"}
    url = "https://api.telegram.org/bot7518293362:AAG-3fDbEwfo65fJj3zuBeV1SAPh4idqlLw/test1"
    x = requests.post(url, json=new_json)
    print(x.status_code)

@app.route("/test", methods=["POST"])
def handle_post():
    data = request.json
    print(data)

app.run(debug=True)
bot.infinity_polling()