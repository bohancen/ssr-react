const SHOW = '显示sidebar'
const HIDE = '隐藏sidebar'
const TOGGLE = 'sidebarTOGGLE'
const initState = {
    show:false
}
export function main(state = initState,action){
    switch(action.type){
        case SHOW:
            return {...state,show:true}
        case HIDE:
            return {...state,show:false}
        case TOGGLE:
            return {...state,show:!state.show}
        default:
            return state
    }
}
export function sidebarShow(){
    return {type:SHOW}
}
export function sidebarHide(){
    return {type:HIDE}
}
export function sidebarToggle(){
    return {type:TOGGLE}
}
export function sidebarShowAsync(){
    return dispatch=>{
        setTimeout(function(){
            dispatch(sidebarToggle())
        },2000)
    }
}

