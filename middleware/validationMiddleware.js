import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../Error/customError.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constant.js";
import mongoose from "mongoose";
import Job from "../Models/JobModels.js";
import User from "../Models/UserModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((err) => err.msg);
        if (errorMessages[0].startsWith("no job ")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access ");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};
export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("company is required"),
  body("position").notEmpty().withMessage("position is required"),
  body("jobLocation").notEmpty().withMessage("jobLocation is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("Invalid type status"),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("Invalid Type value"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("Invalid MOngoDB Id ");
    const job = await Job.findById(value);

    if (!job) throw new NotFoundError(`no job with id :${value}`);

    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === job.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw new UnauthorizedError("not authorized to access ");
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("Name must Required"),
  body("email")
    .notEmpty()
    .withMessage("Email must required")
    .isEmail()
    .withMessage("Invalid email formate")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exits");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is Required")
    .isLength({ min: 8 })
    .withMessage("password must contain at least 8 characters long"),
  body("location").notEmpty().withMessage("location is Required"),
  body("lastName").notEmpty().withMessage("Last Name is Required"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email must required")
    .isEmail()
    .withMessage("Invalid email formate"),
  body("password").notEmpty().withMessage("password is Required"),
]);

export const validateUpdateUser = withValidationErrors([
  body("name").notEmpty().withMessage("Name must Required"),
  body("email")
    .notEmpty()
    .withMessage("Email must required")
    .isEmail()
    .withMessage("Invalid email formate")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("email already exits");
      }
    }),

  body("location").notEmpty().withMessage("location is Required"),
  body("lastName")
    .notEmpty()
    .withMessage("Last Name is Required")
    .isLength({ min: 1 }),
]);
