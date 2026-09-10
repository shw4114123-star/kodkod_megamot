import requests
from services.read_and_write_data import read_file, write_file
from fastapi import HTTPException


def search_city(name: str):
    try:
        url = "https://geocoding-api.open-meteo.comv1/search"
        params = {"name": name}
        res = requests.get(url, params=params)
        data = res.json()
        return data.get("results", [])
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"message: {e}")


def check_params(lon: float, lat: float):
    try:
        url = "https://api.open-meteo.com/v1/forecast"
        params = {
            "latitude": lat,
            "longitude": lon,
            "current": "apparent_temperature,temperature_2m,wind_speed_10m,weather_code",
        }
        res = requests.get(url, params=params)
        data = res.json()
        return data.get("current", [])
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"message: {e}")


def get_forecast(lon: float, lat: float):
    try:
        url = "https://api.open-meteo.com/v1/forecast"
        params = {
            "latitude": lat,
            "longitude": lon,
            "daily": "temperature_2m_max,temperature_2m_min,weather_code",
        }
        res = requests.get(url, params=params)
        data = res.json()
        return data.get("daily", [])
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"message: {e}")


def get_compare(lon1, lat1, lon2, lat2):
    try:
        city1 = check_params(lon1, lat1)
        city2 = check_params(lon2, lat2)
        return {"city1": city1, "city2": city2}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"message: {e}")


def get_favorite(name):
    try:
        data = read_file()
        return {name: data.get(name, [])}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"message: {e}")


def add_to_favorite(favorite):
    try:
        data = read_file()
        if favorite.name in data:
            data[favorite.name].append(
                {
                    "id": favorite.id,
                    "city_name": favorite.city_name,
                    "country": favorite.country,
                    "lon": favorite.lon,
                    "lat": favorite.lat,
                }
            )
        else:
            data[favorite.name] = [
                {
                    "id": favorite.id,
                    "city_name": favorite.city_name,
                    "country": favorite.country,
                    "lon": favorite.lon,
                    "lat": favorite.lat,
                }
            ]
        write_file(data)
        return {"message": "City added"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"message: {e}")


def delete_favorite(name, city_name):
    try:
        data = read_file()
        if name in data:
            for item in data[name]:
                if item["city_name"] == city_name:
                    data[name].remove(item)
                    break
        write_file(data)
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"message: {e}")
