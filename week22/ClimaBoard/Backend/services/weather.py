import requests


def search_city(name: str):
    url = "https://geocoding-api.open-meteo.com/v1/search"
    params = {"name": name}
    res = requests.get(url, params=params)
    data = res.json()
    return data.get("results", [])


def check_params(lon: float, lat: float):
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": lat,
        "longitude": lon,
        "current": "apparent_temperature,temperature_2m,wind_speed_10m,weather_code",
    }
    res = requests.get(url, params=params)
    data = res.json()
    return data.get("current", [])


def get_forecast(lon: float, lat: float):
    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": lat,
        "longitude": lon,
        "daily": "temperature_2m_max,temperature_2m_min,weather_code",
    }
    res = requests.get(url, params=params)
    data = res.json()
    return data.get("daily", [])


def get_compare(lon1, lat1, lon2, lat2):
    city1 = check_params(lon1, lat1)
    city2 = check_params(lon2, lat2)
    return {"city1": city1, "city2": city2}


# סוג הנתונים = {"name" : [], "name": []}
favorite_db = {}


def get_favorite(name):
    for item in favorite_db:
        if item["name"] == name:
            return item


def add_to_favorite(name, city_name, lon, lat):
    if name in favorite_db:
        favorite_db[name].append({"city_name": city_name, "lon": lon, "lat": lat})
    else:
        favorite_db[name] = [{"city_name": city_name, "lon": lon, "lat": lat}]
    return favorite_db


def delete_favorite(name, city_name):
    if name in favorite_db:
        print(name)
        for item in favorite_db[name]:
            if item["city_name"] == city_name:
                favorite_db[name].remove(item)
    return favorite_db