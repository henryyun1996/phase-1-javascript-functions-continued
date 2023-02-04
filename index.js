// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("to bathe my dog")

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}
mondayWork("take a day off")

function wrapAdjective(value = "*") {
    return function(adj = "special") {
        return `You are ${value}${adj}${value}!`
    }
} 
wrapAdjective("%")("a dedicated programmer");