

export default function CityDaily({ props }: [] | any) {

    console.log(props);

    return (
        <div>
            {props.time?.map((data: [], index: number) => (
                <div>
                    <h4>{data}</h4>
                    <h4>{props.weather_code[index]}</h4>
                    <h4>{props.temperature_2m_max[index]}</h4>
                    <h4>{props.temperature_2m_min[index]}</h4>
                </div>
            ))}
        </div>
    )
}