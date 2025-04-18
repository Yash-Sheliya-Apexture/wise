// import User from '../models/User.js';

// const getAllUsers = async () => {
//     try {
//         return await User.find().select('-password'); // Exclude password field when fetching users
//     } catch (error) {
//         console.error("Error in getAllUsers service:", error);
//         throw new Error("Failed to fetch users.");
//     }
// };

// const getUserById = async (userId) => {
//     try {
//         const user = await User.findById(userId); // Default select (no password, maybe no kyc unless needed)
//         if (!user) {
//             return null; // Or throw a NotFoundError if you have custom errors
//         }
//         return user;
//     } catch (error) {
//         console.error("Error in getUserById service:", error);
//         throw new Error("Failed to fetch user.");
//     }
// };
// // Function to get user including their KYC details
// const getUserByIdWithKyc = async (userId) => {
//     try {
//         // Find by ID and explicitly select all necessary fields, including the kyc object
//         // The model's toJSON will remove password before sending response
//         const user = await User.findById(userId).select('+kyc'); // Select the whole kyc object

//         if (!user) {
//             return null;
//         }
//         return user; // Return the full user document (password removed by toJSON)
//     } catch (error) {
//         console.error(`Error in getUserByIdWithKyc for ${userId}:`, error);
//         throw new Error("Failed to fetch user details.");
//     }
// };
// export default {
//     getAllUsers,
//     getUserById,
//     getUserByIdWithKyc, // Export the new function
// };


// backend/src/services/user.service.js
import User from '../models/User.js';
import mongoose from 'mongoose'; // <--- ADD THIS LINE
/**
 * Fetches user details including KYC information by user ID.
 * @param {string} userId - The ID of the user to fetch.
 * @returns {Promise<object>} The user object including KYC details.
 * @throws {Error} If user not found or invalid ID format.
 */
const getAllUsers = async () => {
    try {
        // Exclude password field by default, include other necessary fields
        // Consider adding pagination for large user bases
        return await User.find().select('-password');
    } catch (error) {
        console.error("Error in getAllUsers service:", error);
        throw new Error("Failed to fetch users.");
    }
};

const getUserById = async (userId) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
             throw new Error('Invalid user ID format.');
        }
        // Default select excludes password due to schema toJSON, but explicitly ensure it
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return null; // Consistent return type
        }
        return user;
    } catch (error) {
        console.error(`Error in getUserById service for ${userId}:`, error);
         if (error.message.includes('Invalid user ID format')) {
             throw error; // Re-throw specific errors
         }
        throw new Error("Failed to fetch user.");
    }
};

const getUserByIdWithKyc = async (userId) => {
    // ... (ID validation) ...
    try {
        const user = await User.findById(userId)
            .select('-password -resetPasswordToken -resetPasswordExpires -__v') // Exclude sensitive info
            .lean(); // Use lean

        if (!user) {
            throw new Error('User not found.');
        }

        // ***** ENSURE DEFAULT KYC OBJECT *****
        if (!user.kyc) {
            console.warn(`[User Service] User ${userId} found but missing 'kyc' object in lean result. Providing default.`);
            // Manually add the default structure if lean() didn't include it
            user.kyc = {
                status: 'not_started',
                // Initialize other fields to null/defaults as needed by KycDetails type
                firstName: user.fullName?.split(' ')[0] || '', // Example prefill
                lastName: user.fullName?.split(' ').slice(1).join(' ') || '', // Example prefill
                dateOfBirth: null,
                mobile: null,
                occupation: null,
                salaryRange: null,
                nationality: null,
                idType: null,
                idNumber: null,
                idIssueDate: null,
                idExpiryDate: null,
                documents: [],
                submittedAt: null,
                verifiedAt: null,
                rejectedAt: null,
                rejectionReason: null,
                lastUpdatedAt: null,
             };
        } else if (typeof user.kyc !== 'object' || user.kyc === null) {
             // Handle unexpected non-object kyc (shouldn't happen with schema default)
             console.error(`[User Service] User ${userId} has invalid kyc field:`, user.kyc);
             // Decide how to handle: throw error or force default? Forcing default might be safer.
             user.kyc = { status: 'not_started', /* ... other defaults */ };
        } else if (typeof user.kyc.status !== 'string') {
            // Ensure status exists if kyc object exists
            console.warn(`[User Service] User ${userId} kyc object missing status. Setting default.`);
            user.kyc.status = 'not_started';
        }
        // *************************************

        console.log(`[User Service] Successfully fetched and ensured KYC for user ID: ${userId}`);
        return user; // Return the user object (including kyc)

    } catch (error) {
        // ... (error handling) ...
        throw new Error('Failed to fetch user details.');
    }
};
// --- End Function ---

export default {
    getAllUsers,
    getUserById,
    getUserByIdWithKyc, // Export the new function
};