import json


def read_file():
    with open("./data/favorite.json", "r", encoding="utf-8") as file:
        data = json.load(file)
        return data


def write_file(data):
    with open("./data/favorite.json", "w", encoding="utf-8") as file:
        json.dump(data, file, indent=4)
        return "writed sucsesfuly"
