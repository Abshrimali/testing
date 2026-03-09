import userModel from "../models/userModel.js";

const userProfile = (req, res) => {
    try {
        const user = userModel.create({
            name: 'John Doe',
            age: 30,
            email: 'abc@gmail.com'
        })
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }


}

export { userProfile };