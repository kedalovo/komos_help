from telebot import types
from telebot import TeleBot

EMOJI_SOS = "🆘"
EMOJI_DOWN = "🔽"

bot = TeleBot("7518293362:AAG-3fDbEwfo65fJj3zuBeV1SAPh4idqlLw")

@bot.message_handler(commands=["start"])
def start(message: types.Message):
    keys: types.InlineKeyboardMarkup = types.InlineKeyboardMarkup()
    keys.add(types.InlineKeyboardButton(EMOJI_SOS + " Помогите мне! " + EMOJI_SOS, "t.me/komos_help_bot/helpapp"))
    bot.send_message(message.chat.id, EMOJI_DOWN + " Я могу Вам помочь, осталось только нажать на кнопку! " + EMOJI_DOWN, reply_markup=keys)

bot.infinity_polling()