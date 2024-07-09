from FastAPI import APIRouter
from mailer import Mailer, Message
from datetime import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

router = APIRouter()

# author email  : pre-validated front end for user@domain.com
# msg           : minimum 30 chars message content
# timestamp     : POSIX timestamp created on button click
# returns       : status of commit
# purpose       : store message content + headers and send email
@router.get("", tags=[""])
async def sendEmail(authorEmail: str, msg: str, timestamp: float):
    datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d')
    #initialise creds
    cred = credentials.Certificate('../test-portfolio-bf017-eda818275df1.json')

    firebase_admin.initialize_app(cred)
    db = firestore.client()
    message_ref = db.collection("messages")

def mail(authorEmail: str, msg: str):
    #TODO replace addressee
    message = Message(From=authorEmail, To="you@email.com",charset="utf-8")
    message.Subject = "Query"
    message.Body = msg

    #TODO replace smtp server
    sender = Mailer('server.addr')
    sender.send(message)