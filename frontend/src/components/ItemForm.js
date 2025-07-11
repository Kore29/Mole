import React, { useState } from "react";
import { createItem } from "../services/itemService";

const initialState = {
  name: "",
  category: "Otro",
  price: "",
  stock: "",
  expiryDate: "",
  imageUrl: ""
};

function ItemForm({ onItemAdded }) {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price) || 0,
        stock: parseInt(formData.stock) || 0,
        expiryDate: formData.expiryDate
          ? new Date(formData.expiryDate).toISOString().split("T")[0]
          : null
      };

      await createItem(payload);
      setMessage("Item añadido correctamente.");
      setFormData(initialState);

      if (onItemAdded) onItemAdded();
    } catch (error) {
      console.error(error);
      setMessage("Error al añadir el item.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        <Input
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Select
          label="Categoría"
          name="category"
          value={formData.category}
          onChange={handleChange}
          options={[
            "Fruta",
            "Verdura",
            "Carne",
            "Pescado",
            "Lácteo",
            "Cereal",
            "Bebida",
            "Otro"
          ]}
        />

        <Input
          label="Precio (€)"
          name="price"
          type="number"
          min="0"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <Input
          label="Stock"
          name="stock"
          type="number"
          min="0"
          value={formData.stock}
          onChange={handleChange}
        />

        <Input
          label="Fecha de caducidad"
          name="expiryDate"
          type="date"
          value={formData.expiryDate}
          onChange={handleChange}
        />

        <Input
          label="URL de Imagen"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <button type="submit">Guardar</button>
        {message && <p>{message}</p>}
      </form>
    </>
  );
}

const Input = ({ label, ...props }) => (
  <label className="form-group">
    {label}:
    <input {...props} />
  </label>
);

const Select = ({ label, options, ...props }) => (
  <label className="form-group">
    {label}:
    <select {...props}>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </label>
);

export default ItemForm;
