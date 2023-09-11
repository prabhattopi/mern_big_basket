import { useContext } from 'react'
import {ItemContext} from '../context/item/item'

const useItem = () => {
   return useContext(ItemContext)
}

export default useItem