from fastapi import APIRouter, Query, Path
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
def get_search_city(name: str = Query(min_length=2, max_length=30)):
    return search_city(name)


@router.get("/current")
def get_current_router(
    lon: float = Query(ge=-180, le=180), lat: float = Query(ge=-90, le=90)
):
    return check_params(lon, lat)


@router.get("/forecast")
def get_forecast_router(
    lon: float = Query(...,ge=-180, le=180), lat: float = Query(...,ge=-90, le=90)
):
    return get_forecast(lon, lat)


@router.get("/compare")
def get_compare_router(
    lon1: float = Query(ge=-180, le=180),
    lat1: float = Query(ge=-90, le=90),
    lon2: float = Query(ge=-180, le=180),
    lat2: float = Query(ge=-90, le=90),
):
    return get_compare(lon1, lat1, lon2, lat2)


@router.get("/favorite/{name}")
def get_favorite_router(name: str = Path(min_length=2, max_length=20)):
    return get_favorite(name)


@router.post("/favorite")
def add_favorite_router(favorite: CheckBody):
    return add_to_favorite(favorite)


@router.delete("/favorite/{name}")
def delete_favorite_router(
    name: str = Path(min_length=2, max_length=20),
    city_name: str = Query(min_length=2, max_length=30),
):
    return delete_favorite(name, city_name)
