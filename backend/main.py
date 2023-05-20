from fastapi import FastAPI
app = FastAPI()

books = [
    {'title': 'Lotr', 'author' : 'FW', 'price' : 12}
]

@app.get("/books")
async def get_all():
    return books