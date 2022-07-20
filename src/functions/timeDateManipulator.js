export const subtractDateTime = (dateTime1, dateTime2)=>{
    
}


export const secondsToUTC = (seconds) => {
    if(isNaN(seconds)) return "00:00";

    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = date.getUTCSeconds().toString().padStart(2, "0")

    if(hh) return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;

    return `${mm}:${ss}`;
}


export const formatDate = (date) => {
    let monthNames =["Jan","Feb","Mar","Apr",
            "May","Jun","Jul","Aug",
            "Sep", "Oct","Nov","Dec"];
    date = new Date(date)
    let formattedDate = monthNames[date.getMonth()-1]+" "+date.getDate()+", "+date.getFullYear()

    return formattedDate;

}