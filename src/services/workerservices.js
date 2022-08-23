export function getDayDiff() {
    
    const content = "0";
    console.log('DayDiff: ' + content)
    return content;
}

export function getIcon(IconCode) {
    
    let component="IconNotAvailable";

    switch (IconCode) {
        case '01d':
            component = "IconClearDay"
            break
        case '01n':
            component = "IconClearNight"
            break
        case '02d':
            component = "IconPartlyCloudyDay"
            break
        case '02n':
            component = "IconPartlyCloudyNight"
            break
        case '03d':
            component = "IconCloudy"
            break
        case '03n':
            component = "IconCloudy"
            break
        case '04d':
            component = "IconBrokenClouds"
            break
        case '04n':
            component = "IconBrokenClouds"
            break
        case '09d':
            component = "IconShowerRain"
            break
        case '09n':
            component = "IconShowerRain"
            break
        case '10d':
            component = "IconRain"
            break
        case '10n':
            component = "IconRain"
            break
        case '11d':
            component = "IconThunderstorm"
            break
        case '11n':
            component = "IconThunderstorm"
            break
        case '13d':
            component = "IconSnow"
            break
        case '13n':
            component = "IconSnow"
            break
        case '50d':
            component = "IconMist"
            break
        case '50n':
            component = "IconMist"
            break
        default:
            component = "IconNotAvailable"
    }
    return component;
}