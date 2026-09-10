from pydantic import BaseModel, Field


class CheckBody(BaseModel):
    name: str = Field(min_length=2, max_length=20)
    id: int
    city_name: str = Field(min_length=2, max_length=30)
    country : str
    lon: float = Field(ge=-180, le=180)
    lat: float = Field(ge=-90, le=90)

    