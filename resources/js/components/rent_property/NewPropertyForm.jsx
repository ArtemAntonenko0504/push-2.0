import React, { useContext, useState } from "react";
import "./NewPropertyForm.scss";
import UserContext from "../../UserContext";
import axios from "axios";

const NewPropertyForm = () => {
    const { user } = useContext(UserContext);

    // console.log(user)
    const [formData, setFormData] = useState({
        user_id: user?.id,
        title: "",
        address: "",
        description: "",
        price: "",
        availableFrom: "",
        amenities: [],
        squareMeters: "",
        disposition: "",
        petsWelcome: "",
        type: "",
        condition: "",
        furnishing: "",
        heating: "",
        photoAttachment: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            user_id: user?.id || null, // Ensure user is not undefined
            [e.target.name]: e.target.value,
        });
    };

    const handleAmenitiesChange = (e) => {
        const selectedOptions = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setFormData({
            ...formData,
            amenities: [...formData.amenities, ...selectedOptions],
        });
    };

    const handlePetsWelcomeChange = (e) => {
        setFormData({
            ...formData,
            petsWelcome: e.target.value,
        });
    };

    // Image upload

    const handleImage = (e) => {
        setFormData({
            ...formData,
            photoAttachment: e.target.files[0],
        });
    };
    const handleSubmit = async (e) => {
        // send data to server
        e.preventDefault();
        const formDataSend = new FormData();
        // Append all other form data
        for (const key in formData) {
            formDataSend.append(key, formData[key]);
        }
        try {
            const response = await axios.post(
                "api/property/store",
                formDataSend,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Server Response:", response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div className="form">
            <form
                action="#"
                method="post"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <label>
                    <br />
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label>
                    <br />
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label>
                    <br />
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label>
                    <br />
                    Price:
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label>
                    <br />
                    Available From (Date):
                    <input
                        type="date"
                        name="availableFrom"
                        value={formData.availableFrom}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />

                <label>
                    <br />
                    Amenities:
                    <select
                        multiple
                        name="amenities"
                        value={formData.amenities}
                        onChange={handleAmenitiesChange}
                    >
                        <option value="1">Balcony/Terrace</option>
                        <option value="3">Basement</option>
                        <option value="2">Wheelchair Access</option>
                        <option value="4">Parking</option>
                        <option value="5">Garden</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Apartment area:
                    <input
                        type="text"
                        name="squareMeters"
                        value={formData.squareMeters}
                        onChange={handleInputChange}
                        required
                    />{" "}
                    m²
                </label>
                <br />

                <label>
                    <br />
                    Disposition:
                    <select
                        name="disposition"
                        value={formData.disposition}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="1">1kk</option>
                        <option value="2">1+1</option>
                        <option value="3">2kk</option>
                        <option value="4">2+1</option>
                        <option value="5">3kk</option>
                        <option value="6">3+1</option>
                        <option value="7">4kk</option>
                        <option value="8">4+1</option>
                        <option value="9">5kk</option>
                        <option value="10">5+1</option>
                        <option value="11">6kk</option>
                        <option value="12">6+1</option>
                        <option value="13">7kk</option>
                        <option value="14">7+1</option>
                        <option value="15">other</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Pets Welcome:
                    <select
                        name="petsWelcome"
                        value={formData.petsWelcome}
                        onChange={handlePetsWelcomeChange}
                        required
                    >
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Type:
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="1">House</option>
                        <option value="2">Apartment</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Condition:
                    <select
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="1">New</option>
                        <option value="2">Very Good</option>
                        <option value="3">Good</option>
                        <option value="4">Bad</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Furnishing:
                    <select
                        name="furnishing"
                        value={formData.furnishing}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="1">None</option>
                        <option value="2">Partly</option>
                        <option value="3">Fully</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Heating:
                    <select
                        name="heating"
                        value={formData.heating}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="1">Gas</option>
                        <option value="2">Electrical</option>
                        <option value="3">Central</option>
                    </select>
                </label>
                <br />

                <label>
                    <br />
                    Photo Attachment:
                    <input
                        type="file"
                        name="photoAttachment"
                        accept="image/*"
                        onChange={handleImage}
                        required
                    />
                </label>
                <br />

                <button type="submit">Submit</button>
                <br />
            </form>
        </div>
    );
};

export default NewPropertyForm;