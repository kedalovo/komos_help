from telebot import types
from telebot import TeleBot

bot = TeleBot("7518293362:AAG-3fDbEwfo65fJj3zuBeV1SAPh4idqlLw")

@bot.message_handler(commands=["start"])
def start(message: types.Message):
    pass

bot.infinity_polling()