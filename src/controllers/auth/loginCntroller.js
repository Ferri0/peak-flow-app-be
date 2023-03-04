// const User = require('../models/user');
// const jwt = require('jsonwebtoken');

// Define the login controller
async function loginController(req, res) {
    try {
        // Get the user credentials from the request body
        // const { email, password } = req.body;

        // // Check if the user with the specified email exists in the database
        // const user = await User.findOne({ email });
        // if (!user) {
        //     return res.status(401).json({ message: 'Invalid email or password' });
        // }
        //
        // // Check if the provided password matches the user's password hash
        // const passwordMatch = await user.comparePassword(password);
        // if (!passwordMatch) {
        //     return res.status(401).json({ message: 'Invalid email or password' });
        // }
        //
        // // Generate a JWT token for the authenticated user
        // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        //
        // // Send the token to the client
        // res.json({ token });

        res.status(200).json({message: 'Endpoint works!'})
    } catch (error) {
        // Handle any errors that occur during login
        console.error(error);
        res.status(500).json({ message: 'An error occurred during login' });
    }
}

export default loginController
