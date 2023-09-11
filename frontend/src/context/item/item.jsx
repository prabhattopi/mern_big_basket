import { createContext, useEffect, useReducer } from "react"
import { toast } from "react-toastify"
import api from "../../api"
// import useAuth from "../../hooks/useAuth"

export const ItemContext = createContext()
const initialState = {
    loading: false,
    items: [],
    cartItem: [],

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
        default:
            return state
    }

}

export const ItemProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    // const { token } = useAuth()

    // const getItem = async () => {
    //     try {

    //         dispatch({ type: 'SET_LOADING', payload: true });

    //         const response = await api.get('/items');
    //         if (response.status == "200") {
    //             console.log("hello")
    //             dispatch({ type: 'SET_ITEM', payload: response.data.item});
    //         }


    //     } catch (error) {
    //         toast.error('Failed to create Post', {
    //             position: toast.POSITION.TOP_RIGHT,
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //         });
    //     }
    //     dispatch({ type: 'SET_LOADING', payload: false });


    // }

//     const singleRecipeInformation = async (id) => {
//         try {
//             dispatch({ type: 'SET_LOADING', payload: true });
//             let response = await api.get(`/items/single/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('recipe_walle')}`,
//                 },
//             })

//             dispatch({ type: "SET_SINGLE", payload: response.data })
//         }
//         catch (err) {
//             toast.error('Failed to create Post', {
//                 position: toast.POSITION.TOP_RIGHT,
//                 autoClose: 3000,
//                 hideProgressBar: false,
//             });
//         }

//         dispatch({ type: 'SET_LOADING', payload: false });


//     }

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
            toast.error('Failed to add Item', {
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
            getData()
        }
        return () => {
            isCurrent = false
        }
    }, [])


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
            getData()
        }
        return () => {
            isCurrent = false
        }
    }, [])


    const value = {
        state,
        dispatch,
       deleteCartItem,
       postCartItem
    }
    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    )
}