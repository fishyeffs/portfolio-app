from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/contact")
async def contact(email: str = Form(...), message: str = Form(...)):
    # Handle form submission (e.g., save to Firebase or log)
    return {"message": "Form submitted", "email": email, "message_content": message}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
