from fastapi import APIRouter
from services.weather import (
    search_city,
    check_params,
    get_forecast,
    get_compare,
    get_favorite,
    add_to_favorite,
    delete_favorite,
)
from schemas.padentic import CheckBody

router = APIRouter()


@router.get("/health")
def check_sever_live():
    return {"status": "server is live"}


@router.get("/search")
def get_search_city(name: str):
    return search_city(name)


@router.get("/current")
def get_current_router(lon: float, lat: float):
    return check_params(lon, lat)


@router.get("/forecast")
def get_forecast_router(lon: float, lat: float):
    return get_forecast(lon, lat)


@router.get("/compare")
def get_compare_router(lon1: float, lat1: float, lon2: float, lat2: float):
    return get_compare(lon1, lat1, lon2, lat2)


@router.get("/favorite/{name}")
def get_favorite_router(name: str):
    return get_favorite(name)


@router.post("/favorite")
def add_favorite_router(favorite: CheckBody):
    return add_to_favorite(favorite)


@router.delete("/favorite/{name}")
def delete_favorite_router(name: str, city_name:str):
    return delete_favorite(name, city_name)
