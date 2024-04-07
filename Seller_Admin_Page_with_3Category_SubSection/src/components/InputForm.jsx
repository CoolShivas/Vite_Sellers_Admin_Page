import { useState } from "react";

const InputForm = () => {

    const [newProduct, setNewProduct] = useState({
        proId: '',
        soldPrice: '',
        proName: '',
        caty: 'Electronics',
    })

    const handlerOnChange = (event) => {
        console.log(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefalt()
        console.log('order booked')
    }
    return <>
        <form onSubmit={handleOnSubmit}>

            <label htmlFor="productId"> Product Id </label>
            <input type="text"
                name="productId"
                id="productId"
                onChange={handlerOnChange}
                value={newProduct.productId}
            />

            <label htmlFor="productName"> Product Name </label>
            <input type="text"
                name="productName"
                id="productName"
                onChange={handlerOnChange}
                value={newProduct.productName}
            />

            <label htmlFor="productPrice"> Product Price </label>
            <input type="number"
                name="productPrice"
                id="productPrice"
                onChange={handlerOnChange}
                value={newProduct.productPrice}
            />

            <label htmlFor="chooseCategory"> Choose Category </label>
            <select name="chooseCategory" id="chooseCategory"
                onChange={handlerOnChange}
                value={newProduct.chooseCategory}
            >
                <option value="none"> None </option>
                <option value="Electronics"> Electronics </option>
                <option value="FoodItems"> FoodItems </option>
                <option value="SkinCare"> SkinCare </option>
            </select>

            <button type="submit"> Add Product </button>
        </form>
    </>
}

export default InputForm;