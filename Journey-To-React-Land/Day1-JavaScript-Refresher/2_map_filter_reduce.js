// simple utilization of Map filter and reduce

let india_runs = [30,20,67,96,45,12,18,20,11,10,32];
// let suppose in 10 mathces scored
const runs_in_10_matches = india_runs.map((run)=>{
    return run * 10;
})

console.log(runs_in_10_matches);

// finding runs divisible by 5

const run_by_5 = india_runs.filter((run)=>{
    return run % 5 == 0;
});

console.log(run_by_5);

//lets get Sum of All runs 

const sum_runs = india_runs.reduce((accumulator, run) => {
    return accumulator + run;
}, 0 );
console.log(sum_runs);

// lets get product
const product_runs = india_runs.reduce((accumulator, run) => {
    return accumulator * run;
}, 1 );
console.log(product_runs);