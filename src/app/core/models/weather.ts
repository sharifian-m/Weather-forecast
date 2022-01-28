export interface WeatherInfo {
    name: string,
    weather: [{ main: string, description: string }],
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number
    }
}
