from pydantic import BaseModel


class CheckBody(BaseModel):
    name: str
    id: int
    city_name: str
    country : str
    lon: int
    lat: int

