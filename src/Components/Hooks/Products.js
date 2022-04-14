import { useContext, useEffect, useState } from "react"
import { ContextAPIData } from "../../App";

const useProducts = () => {
    const [products, setProducts] = useContext(ContextAPIData)

    return [products, setProducts]

}

export default useProducts;