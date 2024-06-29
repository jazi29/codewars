function add(a,b) {
    let s = ""
    
    while(a+b) {
        s = a%10 + b%10 + s
        a = a/10|0
        b = b/10|0
    }
    
    return +s
}
