function function3(){
    function2()
    console.log("I'm function 3")
    return
}

function function2(){
    function1()
    console.log("I'm function 2")
    return
}

function function1(){
    console.log("I'm function 1")
    return
}

function3()
 