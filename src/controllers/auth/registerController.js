async function registerController(req, res) {
    try {
        res.status(200).json({message: 'Register endpoint works!'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during login' });
    }
}

export default registerController
