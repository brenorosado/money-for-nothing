export const fortmatToBRL = (value: number) => {
    if(!value) return "";
    const valueArray = value.toString().split('');
    valueArray.splice(-2, 0, ",");
    if(valueArray.length - 3 > 3) {
        for (let i = 1; i < valueArray.length - 3; i += 4) {
            valueArray.splice(i, 0, ".");
        }
    }
    return "R$ " + valueArray.join('');
}