//Nikita Demianov
function buildFun(n) {
    const res = []
    for (let i = 0; i < n; i++) {
        res.push(function () {
            return i
        })
    }

    return res;
}
//End Nikita Demianov