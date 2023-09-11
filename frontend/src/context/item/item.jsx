import { createContext, useEffect, useReducer } from "react"
import { toast } from "react-toastify"
import api from "../../api"
import useAuth from "../../hooks/useAuth"
// import useAuth from "../../hooks/useAuth"

export const ItemContext = createContext()
const initialState = {
    loading: false,
    items: [],
    cartItem: [],
    selectCat:[],
    searchItem:[]

}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ITEM":
            return { ...state, items: action.payload }
        case "SET_LOADING":
            return { ...state, loading: action.payload }
        case "ADD_CART_ITEM":
            return { ...state, cartItem: [...state.cartItem,action.payload]}
         case "SET_CART_ITEM":
            return { ...state, cartItem: action.payload } 
        case "DELETE_CART_ITEM":
            return {...state,cartItem:state.cartItem.filter(e=>e._id!=action.payload)}   
        case "RESET_SINGLE":
            return { ...state, singleRecipe: {} }
        case "SET_SAVED_RECIPE":
            return { ...state, savedRecipe: action.payload }
        case "SET_CATEGORY_PAGE":
            return {...state,selectCat:action.payload}   
        case "SET_SEARCH_DATA":
            return {...state,searchItem:action.payload}     
        case "RESET_STATE":
            return {...state,state:{}}
        default:
            return state
    }

}

export const ItemProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    

    const postCartItem= async (data) => {
        try {

            let response = await api.post('/carts', data)
            dispatch({ type: "ADD_CART_ITEM", payload:response.data.data })
            toast.success(response.data.message || 'Item Added Successfully', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
            });
        }
        catch (err) {
            toast.error('Failed to add Item Please Login', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
            });
        }





    }
    
  const deleteCartItem=async(id)=>{
      try{
        let response=await api.delete(`/carts/${id}`)
          if(response.status=="200"){
            dispatch({ type: "DELETE_CART_ITEM", payload: response.data.id })
            toast.success(response.data.message || 'Recipe saved successfully', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
            });
          }
      }
      catch(err){
        toast.error('failed to delete preference', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
        });
      }
      
     


  }
  const selectedCategoryItem=(cat)=>{
    if(cat=="All"){
        dispatch({type:"SET_CATEGORY_PAGE",payload:[]})
        return
    }
    const catItem=state.items.filter(e=>e.category==cat)
    dispatch({type:"SET_CATEGORY_PAGE",payload:catItem})
  }

  const searchItemArray=async(value)=>{
    try{
    let response=await api.get(`/items/search?title=${value}`)
    console.log(response)
    dispatch({type:"SET_SEARCH_DATA",payload:response.data.item})


  }
  catch(err){
    console.log(err)
  }
}


  const {user}=useAuth()
    useEffect(() => {
        let isCurrent = true
        const getData = async () => {
            try {

                let response = await api.get("/items")
          
                dispatch({ type: "SET_ITEM", payload: response.data.item })
            }
            catch (err) {
                console.log(err)
            }





        }
        if (isCurrent) {
            if(!user){
                dispatch({type:"RESET_STATE"})
            }
          
                getData()
            
          
        }
        return () => {
            isCurrent = false
        }
    }, [user?.email])


    useEffect(() => {
        let isCurrent = true
        const getData = async () => {
            try {

                let response = await api.get("/carts")
          
                dispatch({ type: "SET_CART_ITEM", payload: response.data.items })
            }
            catch (err) {
                console.log(err)
            }





        }
        if (isCurrent) {
            if(user){
                getData()
            }
      
        }
        return () => {
            isCurrent = false
        }
    }, [user?.email])

 
    const value = {
        state,
        dispatch,
       deleteCartItem,
       postCartItem,
       selectedCategoryItem,
       searchItemArray
    }
    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    )
}