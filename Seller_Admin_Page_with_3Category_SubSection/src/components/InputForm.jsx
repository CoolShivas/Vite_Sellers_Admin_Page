const InputForm = () => {
    return <>
        <form action="#">

            <label htmlFor="productId"> Product Id </label>
            <input type="text" name="productId" id="productId" />

            <label htmlFor="productName"> Product Name </label>
            <input type="text" name="productName" id="productName" />

            <label htmlFor="productPrice"> Product Price </label>
            <input type="number" name="productPrice" id="productPrice" />

            <label htmlFor="chooseCategory"> Choose Category </label>
            <select name="chooseCategory" id="chooseCategory">
                <option value="none"> Nome </option>
                <option value="Electronics"> Electronics </option>
                <option value="FoodItems"> FoodItems </option>
                <option value="SkinCare"> SkinCare </option>
            </select>

            <button> Add Product </button>
        </form>
    </>
}

export default InputForm;