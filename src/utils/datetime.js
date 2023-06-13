const localTime = 'th-TH'


export const dateTimeTH = (strUTC) => {
    const dateTime = new Date(strUTC)
    return dateTime.toLocaleString(localTime);
}


export const age = (strUTC) => {
    const today = new Date()
    const birthDate = new Date(strUTC)
    const diffY = today.getFullYear() - birthDate.getFullYear()
    const diffM = today.getMonth() - birthDate.getMonth() 
    return {year: diffY, month: diffM}
}



