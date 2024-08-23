const defaultstate={
    number:0
}
//Action Object
const NumberActionType={
    INT:'increment',
    DIC:'decrement',

}

export const NumberIncrement=(payload=5)=>{
    return {
        type:NumberActionType.INT,
        payload:payload,
    }
}
export const NUmberDeCrement=(payload=5)=>{
    return {
        type:NumberActionType.DIC,
        payload,
    }

}



const reduce=(state=defaultstate,actions)=>{
    if(actions.type===NumberActionType.INT){
        return{
             number:state.number+actions.payload
        }
    }
    else if (actions.type===NumberActionType.DIC){
        return {
            number:state.number-actions.payload
        }
    }
    return state;
    
}
export default reduce;