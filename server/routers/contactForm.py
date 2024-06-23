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
@router.get("", tags=[""])
async def sendEmail(authorEmail: str, msg: str, timestamp: float):
    datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d')
    #initialise creds
    cred = credentials.ApplicationDefault()

    firebase_admin.initialize_app(cred)
    db = firestore.client()