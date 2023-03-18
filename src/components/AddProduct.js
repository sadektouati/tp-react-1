import { useState } from 'react'

const AaddProduct = ({onAdd}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(name && description && price && category){
            onAdd({name, description, price, category})
            setName('')
            setDescription('')
            setPrice('')
            setCategory('')
        }else{
            alert("fill in every field")
            return;
        }   
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>

            <div className="form-control">
                <label>Category</label>
                <select value={category} onChange = {(e) => setCategory(e.target.value)}>
                <option value="" selected disabled></option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
                </select>
            </div>

            <div className="form-control">
                <label>Product name</label>
                <input
                type='text'
                placeholder="Product name"
                value={name}
                onChange = {(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Price</label>
                <input
                type='number'
                placeholder="Price of the product"
                value={price}
                min="0"
                onChange = {(e) => setPrice(e.target.value)}
                />
            </div>
            
            <div className="form-control">
                <label>Description</label>
                <textarea rows="4"
                placeholder="Product description"
                value={description}
                onChange = {(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            <button className="btn">add {name}</button>
        </form>
    )
}

export default AaddProduct