

export function generateRandomRGB() {
    let rgb = ['r','g','b']

    rgb.forEach((x,index) => {
        rgb[index] = Math.floor(Math.random() * Math.floor(256))
    })

    return `rgb(${rgb[0]},${rgb[1]}, ${rgb[2]}, .3)`
    // return `rgb(20 ,${rgb[1]}, ${rgb[2]}, .2)`
}



