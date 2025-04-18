// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import config from '../config/index.js';
// import nodemailer from 'nodemailer';

// const registerUser = async (fullName, email, password) => {
//     try {
//         // Check if user with this email already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             throw new Error('Email already exists.'); // User-friendly error message
//         }

//         // Hash the password before saving to database
//         const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds - adjust for security/performance trade-off
//         const newUser = new User({ fullName, email, password: hashedPassword });
//         await newUser.save();
//         return newUser; // Return the newly created user object (without password if you configure model to exclude it on toJSON)
//     } catch (error) {
//         // Log the error for debugging and monitoring
//         console.error("Error in registerUser service:", error);
//         if (error.message === 'Email already exists.') { // Re-throw specific user-friendly error
//             throw error;
//         }
//         throw new Error('Registration failed.'); // Generic error for other issues
//     }
// };

// const loginUser = async (email, password) => {
//     try {
//         // Find user by email
//         const user = await User.findOne({ email });
//         if (!user) {
//             throw new Error('Invalid credentials'); // Generic error message for security - don't reveal if email exists or not
//         }

//         // Compare provided password with hashed password from database
//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if (!passwordMatch) {
//             throw new Error('Invalid credentials'); // Generic error message
//         }

//         // Generate JWT token upon successful login
//         const token = jwt.sign({ userId: user._id, role: user.role }, config.auth.jwtSecret, {
//             expiresIn: config.auth.jwtExpiration, // Token expiration time from config
//         });

//         return { user: { _id: user._id, email: user.email, fullName: user.fullName, role: user.role }, token }; // Return user info (excluding password) and token
//     } catch (error) {
//         // Log the error for debugging
//         console.error("Error in loginUser service:", error);
//         throw new Error('Login failed.'); // Generic error for login failures
//     }
// };



// const requestPasswordReset = async (email) => {
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             throw new Error('User with this email not found.'); // Don't reveal if email exists for security in production
//         }

//         // Generate a simpler reset token string (less cryptographically secure than crypto.randomBytes)
//         const resetToken = Date.now().toString(36) + Math.random().toString(36).substring(2);

//         // Hash the token using bcrypt before saving
//         const hashedResetToken = bcrypt.hashSync(resetToken, 10); // Synchronous hashing for simplicity

//         user.resetPasswordToken = hashedResetToken; // Store the bcrypt hashed token
//         user.resetPasswordExpires = Date.now() + 300000; // Token expires in 5 minutes
//         await user.save({ validateBeforeSave: false }); // Skip validation for these fields

//         const resetUrl = `${config.email.clientURL}/auth/reset-password/${resetToken}`; // Send the UNHASHED token in the URL

//         // Send email using nodemailer (same as before)
//         const transporter = nodemailer.createTransport({
//             host: config.email.smtpHost,
//             port: config.email.smtpPort,
//             secure: false,
//             auth: {
//                 user: config.email.smtpUser,
//                 pass: config.email.smtpPass,
//             },
//         });

//         const mailOptions = {
//             from: config.email.emailUser,
//             to: email,
//             subject: 'Password Reset Request',
//             html: `<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
//                    <p>Please click on the following link, or paste this into your browser to complete the process:</p>
//                    <a href="${resetUrl}">${resetUrl}</a>
//                    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`,
//         };

//         await transporter.sendMail(mailOptions);

//     } catch (error) {
//         console.error('Password reset request error:', error);
//         if (error.message === 'User with this email not found.') {
//             throw error;
//         }
//         throw new Error('Failed to send password reset email.');
//     }
// };

// const resetPassword = async (token, password) => {
//     try {
//         // No need to hash the token here again, compare directly with the stored bcrypt hash
//         const user = await User.findOne({
//             resetPasswordToken: { $ne: null }, // Ensure resetPasswordToken is not null
//             resetPasswordExpires: { $gt: Date.now() }, // Check if token is not expired
//         });


//         if (!user || !bcrypt.compareSync(token, user.resetPasswordToken) ) { // Compare provided token with the stored bcrypt hash
//             throw new Error('Invalid or expired password reset token.');
//         }


//         const hashedPassword = await bcrypt.hashSync(password, 10); // Hash the new password
//         user.password = hashedPassword;
//         user.resetPasswordToken = undefined; // Clear reset token fields
//         user.resetPasswordExpires = undefined;
//         await user.save();

//     } catch (error) {
//         console.error('Password reset error:', error);
//         if (error.message === 'Invalid or expired password reset token.') {
//             throw error;
//         }
//         throw new Error('Password reset failed.');
//     }
// };


// export default {
//     registerUser,
//     loginUser,
//     requestPasswordReset,
//     resetPassword,
// };



// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import config from '../config/index.js';
// import nodemailer from 'nodemailer';

// const registerUser = async (fullName, email, password) => {
//     try {
//         // Check if user with this email already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             throw new Error('Email already exists.'); // User-friendly error message
//         }

//         // Hash the password before saving to database
//         const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds - adjust for security/performance trade-off
//         const newUser = new User({ fullName, email, password: hashedPassword });
//         await newUser.save();
//         return newUser; // Return the newly created user object (without password if you configure model to exclude it on toJSON)
//     } catch (error) {
//         // Log the error for debugging and monitoring
//         console.error("Error in registerUser service:", error);
//         if (error.message === 'Email already exists.') { // Re-throw specific user-friendly error
//             throw error;
//         }
//         throw new Error('Registration failed. Please check your input and try again.'); // More generic error for security
//     }
// };

// const loginUser = async (email, password) => {
//     try {
//         // Find user by email
//         const user = await User.findOne({ email });
//         if (!user) {
//             throw new Error('Invalid credentials'); // Generic error message for security - don't reveal if email exists or not
//         }

//         // Compare provided password with hashed password from database
//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if (!passwordMatch) {
//             throw new Error('Invalid credentials'); // Generic error message
//         }

//         // Generate JWT token upon successful login
//         const token = jwt.sign({ userId: user._id, role: user.role }, config.auth.jwtSecret, {
//             expiresIn: config.auth.jwtExpiration, // Token expiration time from config
//         });

//         return { user: { _id: user._id, email: user.email, fullName: user.fullName, role: user.role }, token }; // Return user info (excluding password) and token
//     } catch (error) {
//         // Log the error for debugging
//         console.error("Error in loginUser service:", error);
//         throw new Error('Login failed. Please check your credentials.'); // More generic error for security
//     }
// };



// const requestPasswordReset = async (email) => {
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             // Intentionally do not reveal if email exists for security.
//             return; // Just return success silently to prevent email enumeration
//             // throw new Error('User with this email not found.'); // Don't reveal if email exists for security in production
//         }

//         // Generate a simpler reset token string (less cryptographically secure than crypto.randomBytes)
//         const resetToken = Date.now().toString(36) + Math.random().toString(36).substring(2);

//         // Hash the token using bcrypt before saving
//         const hashedResetToken = bcrypt.hashSync(resetToken, 10); // Synchronous hashing for simplicity

//         user.resetPasswordToken = hashedResetToken; // Store the bcrypt hashed token
//         user.resetPasswordExpires = Date.now() + 300000; // Token expires in 5 minutes
//         await user.save({ validateBeforeSave: false }); // Skip validation for these fields

//         const resetUrl = `${config.email.clientURL}/auth/reset-password/${resetToken}`; // Send the UNHASHED token in the URL

//         // Send email using nodemailer (same as before)
//         const transporter = nodemailer.createTransport({
//             host: config.email.smtpHost,
//             port: config.email.smtpPort,
//             secure: false,
//             auth: {
//                 user: config.email.smtpUser,
//                 pass: config.email.smtpPass,
//             },
//         });

//         const mailOptions = {
//             from: config.email.emailUser,
//             to: email,
//             subject: 'Password Reset Request',
//             html: `<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
//                    <p>Please click on the following link, or paste this into your browser to complete the process:</p>
//                    <a href="${resetUrl}">${resetUrl}</a>
//                    <p>This link will expire in 5 minutes.</p>
//                    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`, // Added expiry notice
//         };

//         await transporter.sendMail(mailOptions);

//     } catch (error) {
//         console.error('Password reset request error:', error);
//         // Do not reveal if email exists or not - silent fail for security
//         // if (error.message === 'User with this email not found.') {
//         //     throw error;
//         // }
//         throw new Error('Failed to send password reset email. Please try again later.'); // More generic error
//     }
// };

// const resetPassword = async (token, password) => {
//     try {
//         // No need to hash the token here again, compare directly with the stored bcrypt hash
//         const user = await User.findOne({
//             resetPasswordToken: { $ne: null }, // Ensure resetPasswordToken is not null
//             resetPasswordExpires: { $gt: Date.now() }, // Check if token is not expired
//         });


//         if (!user || !bcrypt.compareSync(token, user.resetPasswordToken) ) { // Compare provided token with the stored bcrypt hash
//             throw new Error('Invalid or expired password reset token.');
//         }


//         const hashedPassword = await bcrypt.hashSync(password, 10); // Hash the new password
//         user.password = hashedPassword;
//         user.resetPasswordToken = undefined; // Clear reset token fields
//         user.resetPasswordExpires = undefined;
//         await user.save();

//     } catch (error) {
//         console.error('Password reset error:', error);
//         if (error.message === 'Invalid or expired password reset token.') {
//             throw error;
//         }
//         throw new Error('Password reset failed. Please try again.'); // More generic error
//     }
// };


// export default {
//     registerUser,
//     loginUser,
//     requestPasswordReset,
//     resetPassword,
// };



// // backend/src/services/auth.service.js

// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import config from '../config/index.js';
// import nodemailer from 'nodemailer';
// import mongoose from 'mongoose'; // Import mongoose

// const registerUser = async (fullName, email, password) => {
//     try {
//         // Check if user with this email already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             throw new Error('Email already exists.'); // User-friendly error message
//         }

//         // Hash the password before saving to database
//         const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds - adjust for security/performance trade-off
//         // The 'pre save' hook in User.js model will initialize kyc object here
//         const newUser = new User({ fullName, email, password: hashedPassword });
//         await newUser.save();

//         // Exclude sensitive fields in the returned object for consistency
//         const userPayload = {
//             _id: newUser._id,
//             email: newUser.email,
//             fullName: newUser.fullName,
//             role: newUser.role,
//             // Access kyc safely after save
//             kyc: {
//                 status: newUser.kyc?.status || 'not_started',
//                 rejectionReason: newUser.kyc?.rejectionReason || null,
//             },
//             createdAt: newUser.createdAt,
//             updatedAt: newUser.updatedAt,
//         };
//         // Note: Usually, registration doesn't return a token, user needs to log in.
//         // But returning the user object like this is fine.
//         return userPayload; // Return user object without password/tokens
//     } catch (error) {
//         // Log the error for debugging and monitoring
//         console.error("Error in registerUser service:", error);
//         if (error.message === 'Email already exists.') { // Re-throw specific user-friendly error
//             throw error;
//         }
//         throw new Error('Registration failed. Please check your input and try again.'); // More generic error for security
//     }
// };

// const loginUser = async (email, password) => {
//     try {
//         // Find user by email - Ensure password and KYC fields are selected
//         // Selecting kyc explicitly ensures it's retrieved. +password needed for comparison.
//         const user = await User.findOne({ email })
//         .select('+password +kyc +createdAt +updatedAt'); // Select password, kyc, and timestamps
//         if (!user) {
//             throw new Error('Invalid credentials'); // Generic error message for security
//         }

//         // Safeguard (already suggested, keep it)
//         if (!user.password) {
//             console.error(`CRITICAL: User ${email} found but password field is missing or undefined! Query or data issue.`);
//             throw new Error('Authentication process failed unexpectedly.');
//         }

//         // Compare provided password with hashed password from database
//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if (!passwordMatch) {
//             throw new Error('Invalid credentials'); // Generic error message
//         }

//         // --- FIX: Ensure kyc object exists before creating payload ---
//         // The pre-save hook should create it, but this is a safety net.
//         // If `select('+kyc')` was successful, `user.kyc` should exist unless DB is inconsistent.
//         if (!user.kyc) {
//             console.warn(`User ${email} is missing the kyc subdocument after login fetch. Defaulting status.`);
//             // Provide a default structure if kyc is unexpectedly missing
//              user.kyc = { status: 'not_started', rejectionReason: null };
//              // Consider logging this as a potential data integrity issue.
//         }

//         // --- FIX: Construct the full user payload matching Frontend User type ---
//         const userPayload = {
//             _id: user._id.toString(), // Ensure ID is string
//             email: user.email,
//             fullName: user.fullName,
//             role: user.role,
//             kyc: { // Nest the kyc object
//                  status: user.kyc.status,
//                  rejectionReason: user.kyc.rejectionReason,
//                  // Add other kyc fields here if the frontend User type expects them
//             },
//             // Include timestamps if the frontend User type expects them
//             createdAt: user.createdAt.toISOString(),
//             updatedAt: user.updatedAt.toISOString(),
//         };


//         // Generate JWT token upon successful login
//         const token = jwt.sign(
//             { userId: user._id, role: user.role },
//             config.auth.jwtSecret,
//             { expiresIn: config.auth.jwtExpiration } // Token expiration time from config
//         );
//         console.log(`Login successful for ${email}. KYC Status: ${userPayload.kyc.status}`);
//         // Return the user payload (with KYC status) and the token
//         return { user: userPayload, token };

//     } catch (error) {
//         console.error(`Error in loginUser service for ${email}:`, error);
//         if (error.message === 'Invalid credentials' || error.message === 'Authentication process failed unexpectedly.') {
//             throw error;
//         }
//         throw new Error('Login failed. Please check your credentials or try again later.');
//     }
// };


// const requestPasswordReset = async (email) => {
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             // Intentionally do not reveal if email exists for security.
//             console.log(`Password reset requested for non-existent email: ${email}`); // Log for monitoring
//             return; // Just return success silently to prevent email enumeration
//         }

//         // Generate a simpler reset token string
//         const resetToken = Date.now().toString(36) + Math.random().toString(36).substring(2);

//         // Hash the token using bcrypt before saving
//         const hashedResetToken = bcrypt.hashSync(resetToken, 10);

//         user.resetPasswordToken = hashedResetToken;
//         user.resetPasswordExpires = Date.now() + 300000; // Token expires in 5 minutes (300,000 ms)
//         await user.save({ validateBeforeSave: false }); // Skip validation for these fields

//         const resetUrl = `${config.email.clientURL}/auth/reset-password/${resetToken}`; // Send the UNHASHED token in the URL

//         // Send email using nodemailer
//         const transporter = nodemailer.createTransport({
//             host: config.email.smtpHost,
//             port: config.email.smtpPort,
//             secure: config.email.smtpPort === 465, // Use true for port 465, false for others like 587
//             auth: {
//                 user: config.email.smtpUser,
//                 pass: config.email.smtpPass,
//             },
//             // Optional: Add TLS options if needed for specific providers
//             // tls: {
//             //     ciphers:'SSLv3'
//             // }
//         });

//         const mailOptions = {
//             from: `"${config.email.emailFromName || 'Your App Name'}" <${config.email.emailUser}>`, // Use a display name
//             to: email,
//             subject: 'Password Reset Request',
//             html: `<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
//                    <p>Please click on the following link, or paste this into your browser to complete the process:</p>
//                    <p><a href="${resetUrl}" style="color: #007bff; text-decoration: none;">Reset Password</a></p>
//                    <p>If the link above doesn't work, copy and paste this URL into your browser:</p>
//                    <p>${resetUrl}</p>
//                    <p>This link will expire in 5 minutes.</p>
//                    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`, // Added expiry notice and better styling
//         };

//         await transporter.sendMail(mailOptions);
//         console.log(`Password reset email sent to ${email}`);

//     } catch (error) {
//         console.error('Password reset request error:', error);
//         // Do not throw error to the user to prevent leaking info, but log it server-side.
//         // Consider sending a generic success message even on internal failure for security.
//         // For now, throwing a generic error for the controller to handle (will be caught by global handler)
//         throw new Error('Failed to process password reset request. Please try again later.');
//     }
// };

// const resetPassword = async (token, password) => {
//     try {
//         // Find the user based on the token *and* expiry date
//         // It's crucial to check expiry here before comparing the token
//         const user = await User.findOne({
//             resetPasswordToken: { $exists: true, $ne: null }, // Ensure resetPasswordToken exists and is not null
//             resetPasswordExpires: { $gt: Date.now() }, // Check if token is not expired
//         });

//         // If no user found with an unexpired token OR if the token doesn't match
//         if (!user || !bcrypt.compareSync(token, user.resetPasswordToken)) {
//             // Log the attempt for security monitoring
//             console.warn(`Invalid or expired password reset attempt with token: ${token}`);
//             throw new Error('Invalid or expired password reset token.');
//         }

//         // Hash the new password
//         const hashedPassword = await bcrypt.hash(password, 10); // Use async hash
//         user.password = hashedPassword;
//         user.resetPasswordToken = undefined; // Clear reset token fields
//         user.resetPasswordExpires = undefined;
//         await user.save(); // Let default validation run

//         console.log(`Password successfully reset for user: ${user.email}`); // Log success

//     } catch (error) {
//         console.error('Password reset error:', error);
//         if (error.message === 'Invalid or expired password reset token.') {
//             throw error; // Re-throw specific user-facing error
//         }
//         // Handle potential validation errors during save if any
//         if (error.name === 'ValidationError') {
//             throw new Error('Password update failed due to validation issues.');
//         }
//         // Throw a generic error for other issues
//         throw new Error('Password reset failed. Please request a new reset link.');
//     }
// };


// export default {
//     registerUser,
//     loginUser,
//     requestPasswordReset,
//     resetPassword,
// };

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/index.js';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose'; // Import mongoose

const registerUser = async (fullName, email, password) => {
    console.log(`[Auth Service - registerUser] Attempting registration for email: ${email}`);
    try {
        // Check if user with this email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log(`[Auth Service - registerUser] Registration failed: Email ${email} already exists.`);
            throw new Error('Email already exists.'); // User-friendly error message
        }

        // Hash the password before saving (will be done by pre-save hook)
        // The 'pre save' hook in User.js model will initialize kyc object here
        const newUser = new User({ fullName, email, password }); // Pass plaintext password, hook will hash it
        await newUser.save();
        console.log(`[Auth Service - registerUser] User ${email} registered successfully.`);

        // Exclude sensitive fields in the returned object
        const userPayload = {
            _id: newUser._id,
            email: newUser.email,
            fullName: newUser.fullName,
            role: newUser.role,
            kyc: {
                status: newUser.kyc?.status || 'not_started',
                rejectionReason: newUser.kyc?.rejectionReason || null,
            },
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt,
        };
        return userPayload;
    } catch (error) {
        console.error("[Auth Service - registerUser] Error during registration:", error.message);
        if (error.message === 'Email already exists.') {
            throw error; // Re-throw specific user-friendly error
        }
        // Consider logging the full error for internal debugging
        // console.error(error);
        throw new Error('Registration failed. Please check your input and try again.');
    }
};

const loginUser = async (email, password) => {
    // --- ADDED LOG ---
    console.log(`[Auth Service - loginUser] Attempting login for email: ${email}`);
    // --- TEMPORARY DEBUGGING - CONSIDER REMOVING/COMMENTING AFTER FIX ---
    // console.log(`[Auth Service - loginUser] Plaintext password received: "${password}" (Length: ${password.length})`);
    // --- END TEMPORARY DEBUGGING ---
    try {
        // Find user by email - Ensure password field is selected
        const user = await User.findOne({ email })
                               .select('+password +kyc +createdAt +updatedAt'); // Select required fields explicitly

        if (!user) {
            // --- ADDED LOG ---
            console.log(`[Auth Service - loginUser] User not found for email: ${email}`);
            throw new Error('Invalid credentials'); // Generic error message for security
        }

        // --- ADDED LOG ---
        console.log(`[Auth Service - loginUser] User found: ${user.email}`);

        // Safeguard: Check if password field exists on the retrieved user object
        if (!user.password) {
            // --- ADDED LOG ---
            console.error(`[Auth Service - loginUser] CRITICAL: Password field is MISSING for user ${email} after DB query! Check if it was hashed and selected.`);
            throw new Error('Authentication process failed unexpectedly.');
        }

        // --- ADDED LOG --- (Don't log full hash in production)
        console.log(`[Auth Service - loginUser] Hashed password retrieved from DB for ${email}. Starts with: ${user.password.substring(0, 7)}...`);

        // Compare provided password with hashed password from database
        // --- ADDED LOG ---
        console.log(`[Auth Service - loginUser] Comparing provided password with stored hash for ${email}...`);
        const passwordMatch = await bcrypt.compare(password, user.password); // Plaintext first, then hash
        // --- ADDED LOG --- (Crucial log)
        console.log(`[Auth Service - loginUser] bcrypt.compare result for ${email}: ${passwordMatch}`);

        if (!passwordMatch) {
            // --- ADDED LOG ---
            console.log(`[Auth Service - loginUser] Password comparison FAILED for ${email}`);
            throw new Error('Invalid credentials'); // Generic error message
        }

        // --- ADDED LOG ---
        console.log(`[Auth Service - loginUser] Password comparison SUCCEEDED for ${email}`);

        // --- Ensure kyc object exists before creating payload ---
        if (!user.kyc) {
            console.warn(`[Auth Service - loginUser] User ${email} is missing the kyc subdocument after login fetch. Defaulting status.`);
            user.kyc = { status: 'not_started', rejectionReason: null };
        }

        // Construct the full user payload matching Frontend User type
        const userPayload = {
            _id: user._id.toString(), // Ensure ID is string
            email: user.email,
            fullName: user.fullName,
            role: user.role,
            kyc: { // Nest the kyc object
                 status: user.kyc.status,
                 rejectionReason: user.kyc.rejectionReason,
            },
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString(),
        };

        // Generate JWT token upon successful login
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            config.auth.jwtSecret,
            { expiresIn: config.auth.jwtExpiration }
        );

        console.log(`[Auth Service - loginUser] Login successful, token generated for ${email}. KYC Status: ${userPayload.kyc.status}`);
        // Return the user payload (with KYC status) and the token
        return { user: userPayload, token };

    } catch (error) {
        // --- ADDED LOG ---
        console.error(`[Auth Service - loginUser] Error during login process for ${email}:`, error.message);
        // console.error(error); // Optional: Log full error stack in dev
        if (error.message === 'Invalid credentials' || error.message === 'Authentication process failed unexpectedly.') {
            throw error; // Re-throw specific known errors for controller to handle
        }
        // Throw a more generic error for unknown issues during login
        throw new Error('Login failed due to a server error.'); // Avoid exposing detailed internal errors
    }
};


const requestPasswordReset = async (email) => {
    console.log(`[Auth Service - requestPasswordReset] Request received for email: ${email}`);
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log(`[Auth Service - requestPasswordReset] Password reset requested for non-existent or unverified email: ${email}. Responding silently.`);
            // Intentionally do not reveal if email exists for security.
            return; // Just return success silently to prevent email enumeration
        }

        const resetToken = Date.now().toString(36) + Math.random().toString(36).substring(2);
        const hashedResetToken = bcrypt.hashSync(resetToken, 10); // Hash the token for storage

        user.resetPasswordToken = hashedResetToken;
        user.resetPasswordExpires = Date.now() + 300000; // Token expires in 5 minutes
        await user.save({ validateBeforeSave: false }); // Skip validation for these fields
        console.log(`[Auth Service - requestPasswordReset] Reset token generated and saved for ${email}.`);

        const resetUrl = `${config.email.clientURL}/auth/reset-password/${resetToken}`; // Send UNHASHED token in URL

        const transporter = nodemailer.createTransport({
            host: config.email.smtpHost,
            port: config.email.smtpPort,
            secure: config.email.smtpPort === 465,
            auth: { user: config.email.smtpUser, pass: config.email.smtpPass },
        });

        const mailOptions = {
            from: `"${config.email.emailFromName || 'Your App Name'}" <${config.email.emailUser}>`,
            to: email,
            subject: 'Password Reset Request',
            html: `<p>You requested a password reset.</p>
                   <p>Click this link to reset your password (expires in 5 minutes):</p>
                   <p><a href="${resetUrl}" style="color: #007bff; text-decoration: none;">${resetUrl}</a></p>
                   <p>If you did not request this, please ignore this email.</p>`,
        };

        await transporter.sendMail(mailOptions);
        console.log(`[Auth Service - requestPasswordReset] Password reset email successfully sent to ${email}`);

    } catch (error) {
        console.error('[Auth Service - requestPasswordReset] Error processing password reset request:', error);
        // Do not throw error to the user to prevent leaking info, but log it.
        // Consider sending a generic success message even on internal failure for security.
        // Throwing generic error for now, controller should handle it gracefully.
        throw new Error('Failed to process password reset request. Please try again later.');
    }
};

const resetPassword = async (token, password) => {
    console.log(`[Auth Service - resetPassword] Attempting password reset with token.`);
    try {
        // Find the user based on the token *and* expiry date
        // It's crucial to check expiry here before comparing the token
        const user = await User.findOne({
            resetPasswordToken: { $exists: true, $ne: null }, // Ensure field exists
            resetPasswordExpires: { $gt: Date.now() },        // Ensure token is not expired
        });

        // If no user found OR if the provided token doesn't match the HASHED token in DB
        if (!user || !bcrypt.compareSync(token, user.resetPasswordToken)) {
            console.warn(`[Auth Service - resetPassword] Invalid or expired password reset attempt.`);
            throw new Error('Invalid or expired password reset token.');
        }

        console.log(`[Auth Service - resetPassword] Valid reset token found for user ${user.email}. Updating password.`);

        // Hash the new password (pre-save hook will handle this)
        user.password = password; // Assign the new plaintext password
        user.resetPasswordToken = undefined; // Clear reset token fields
        user.resetPasswordExpires = undefined;
        await user.save(); // Let pre-save hook hash the password and run default validation

        console.log(`[Auth Service - resetPassword] Password successfully reset for user: ${user.email}`);

    } catch (error) {
        console.error('[Auth Service - resetPassword] Password reset error:', error.message);
        // console.error(error); // Optional: Log full error stack
        if (error.message === 'Invalid or expired password reset token.') {
            throw error; // Re-throw specific user-facing error
        }
        if (error.name === 'ValidationError') { // Catch Mongoose validation errors (e.g., password too short)
            console.log("[Auth Service - resetPassword] Validation error during password save:", error.errors);
            // Extract a user-friendly message if possible
            const messages = Object.values(error.errors).map(el => el.message);
            throw new Error(`Password update failed: ${messages.join(', ')}`);
        }
        // Throw a generic error for other issues
        throw new Error('Password reset failed. Please request a new reset link.');
    }
};


export default {
    registerUser,
    loginUser,
    requestPasswordReset,
    resetPassword,
};