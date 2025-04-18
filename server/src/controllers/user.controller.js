// import userService from '../services/user.service.js';

// const getAllUsers = async (req, res, next) => { // Add 'next' for error handling
//     try {
//         const users = await userService.getAllUsers();
//         res.json(users);
//     } catch (error) {
//         next(error); // Pass errors to error handling middleware
//     }
// };

// const getUserById = async (req, res, next) => { // Add 'next' for error handling
//     try {
//         const user = await userService.getUserById(req.params.userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' }); // 404 Not Found if user not found
//         }
//         res.json(user);
//     } catch (error) {
//         next(error); // Pass errors to error handling middleware
//     }
// };
// const getMe = async (req, res, next) => {
//     try {
//         // req.user is populated by authMiddleware.protect
//         if (!req.user || !req.user._id) {
//             return res.status(401).json({ message: 'Not authorized, user not found in token' });
//         }

//         // Use a service function to get the user, ensuring KYC is selected
//         const user = await userService.getUserByIdWithKyc(req.user._id); // Need to create this service function

//         if (!user) {
//             // Should not happen if token is valid, but good practice
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Return the user object (toJSON in model handles password removal)
//         res.status(200).json({ user }); // Often wrapped in a 'user' key

//     } catch (error) {
//         next(error);
//     }
// };
// export default {
//     getMe, // Export the new method
//     getAllUsers,
//     getUserById,
// };


// backend/src/controllers/user.controller.js
import userService from '../services/user.service.js';

const getAllUsers = async (req, res, next) => {
    try {
        // TODO: Add admin check here if only admins should get all users
        // if (req.user.role !== 'admin') {
        //     return res.status(403).json({ message: 'Not authorized' });
        // }
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        // TODO: Add checks - can the logged-in user view this profile? (e.g., is it their own, or are they admin?)
        const user = await userService.getUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); // Default toJSON removes password
    } catch (error) {
        next(error);
    }
};

// --- Controller for GET /api/dashboard/users/me ---
const getMe = async (req, res, next) => {
    try {
        // req.user is populated by authMiddleware.protect
        if (!req.user?._id) {
            // This shouldn't happen if protect middleware ran successfully
            return res.status(401).json({ message: 'Not authorized, user token invalid or missing' });
        }

        // Use the service function that explicitly includes KYC details
        // Pass the user ID from the authenticated request
        const userWithDetails = await userService.getUserByIdWithKyc(req.user._id);

        if (!userWithDetails) {
            // Should not happen if token is valid and user exists, but good practice
            console.warn(`User with valid token but not found in DB: ${req.user._id}`);
            return res.status(404).json({ message: 'User associated with token not found' });
        }

        // Return the user object (toJSON in the model handles password removal)
        // Wrapping in a 'user' key is common practice but optional
        res.status(200).json(userWithDetails); // Send the full user object

    } catch (error) {
        console.error("Error in getMe controller:", error);
        next(error); // Pass to global error handler
    }
};
// --- End Controller ---

export default {
    getMe, // Export the new method
    getAllUsers,
    getUserById,
};