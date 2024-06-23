from FastAPI import APIRouter

router = APIRouter()

fakePictures = {"", "", ""}

@router.get("", tags=[""])
async def getGallery():
    return fakePictures
