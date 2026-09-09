from pydantic import BaseModel


class CheckBody(BaseModel):
    name: str
    city_name: str
    lon: int
    lat: int

