




export type City = {
    "id": number,
    "name": string,
    "latitude": number,
    "longitude": number,
    "elevation": number,
    "feature_code": string,
    "country_code": string,
    "admin1_id": number,
    "timezone": string,
    "population": number,
    "country_id": number,
    "country": string,
    "admin1": string
}


export type AllData = {
    temperature_2m: number,
    weather_code :number,
    apparent_temperature : number
    wind_speed_10m :number
    time : string
}
