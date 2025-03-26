function permutationSort(x) {
    num = 0
    num = permutation(x,0,num)

    return num
}
function permutation(x, a,num) {
    

    for (var b = a; b < x.length; b++) {
        if (sorted(x) == true) {
            return num
        }
        num++
        [x[a], x[b]] = [x[b], x[a]]
        permutation(x, a + 1)
        if (sorted(x) == true) {
            return num
        }
        [x[b], x[a]] = [x[a], x[b]]
    }
    
}

function sorted(x){
    console.log("sorted")
    for (let i = 0; i < x.length; i++) {
        console.log(x[i] , x[i+1],x)
        if (x[i] > x[i+1]){
            return false
        }
    }
    return true
}
