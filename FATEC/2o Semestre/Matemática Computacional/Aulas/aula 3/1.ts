

function get_a(k:number):number{
    if(k===0.1){
        return 0.1;
    }else{
        return 2*get_a(k-0.1);
    }
};

function get_a_i(k:number):number{
    let e = 1;
    let a = e;
    while(e<k){
        a = a*2;
        ++e;
    }
    return a;
}

get_a(0.1);
get_a(0.2);