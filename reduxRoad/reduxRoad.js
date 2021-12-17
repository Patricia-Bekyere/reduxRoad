const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
} 

const ReduxFunction = (state = [initialWagonState], action) => {
switch (action.type) {
  case 'gather': {
    return {
       ...state, 
       supplies: state.supplies + (15*1),
       distance:state.distance,
       days: action.payload + (1)
  }
  }
  case 'travel': {
    return {
       ...state, 
      supplies: state.supplies - (20),
      distance: state.distance + (10),
      days: action.payload,
  }
  }
  if(action.type === "-" ) {
    return 'no negatives';
  }
  else{
    return state.supplies
  }
  case 'tippedWagon': {
    return {
       ...state, 
      supplies: state.supplies - (30),
      distance: state.distance,
      days: state.days +(1)
    }
  }

  case 'sell': {
    return {
      ...state,
    supplies: 20,
    cash: state.cash + (5)
    }
  }
  case 'buy': {
    return {
     ...state,
    supplies: 25,
    cash: state.cash + (15)
  }
  }
  case 'theft': {
    return 'Steal half of the players cash'
  }
  default: {
    return state;
  }
}
}

let wagon = ReduxFunction(undefined, {});
wagon =ReduxFunction(initialWagonState, {
  type: 'travel',
  payload: 1
} ) 
wagon =ReduxFunction(wagon, {
  type: 'gather',
  payload: 1
} )
wagon =ReduxFunction(wagon, {
  type: 'tippedWagon',
  payload: 1
} )
wagon = ReduxFunction(wagon, {
type: 'travel',
payload: 1
})
wagon = ReduxFunction(wagon, {
type: 'travel',
payload: 1
})
wagon = ReduxFunction(wagon, {
type: 'travel',
payload: (3*2)
})
wagon = ReduxFunction(wagon, {
type: 'buy',
payload: 1,
cash: 20
})
wagon = ReduxFunction(wagon, {
type: 'theft',
})
console.log(wagon) 
