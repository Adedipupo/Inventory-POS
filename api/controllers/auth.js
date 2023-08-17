import {User} from '../models/userModel';
import {userValidationSchema} from '../validation/validation';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();