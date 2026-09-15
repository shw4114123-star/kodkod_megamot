import "./CityDaily.css"

export default function CityDaily({ props }: [] | any) {
    return (
        <div className="all-data">
            {props.time?.map((data: [], index: number) => (
                <div className="card-daily">
                    <h4 className="data">תאריך : {data}</h4>
                    <h4 className="code">קוד רוח : {props.weather_code[index]}</h4>
                    <h4 className="max">טמפרטורה מקסימלית : {props.temperature_2m_max[index]}</h4>
                    <h4 className="min">טמפרטורה מינימלית : {props.temperature_2m_min[index]}</h4>
                </div>
            ))}
        </div>
    )
}