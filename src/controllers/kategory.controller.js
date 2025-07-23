import prisma from "../utils/client.js";
import { logger } from "../utils/winston.js";
import { categoryValidation } from "../validations/category.validation.js";

export const getAllcategory = async (req, res) => {
  try {
    const result = await prisma.category.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return res.status(200).json({
      message: "success",
      result,
    });
  } catch (error) {
    logger.error(
      "controllers/kategory.controller.js:getAllcategory - " + error.message
    );
    return res.status(500).json({
      message: error.message,
      result: null,
    });
  }
};

export const getcategoryById = async (req, res) => {
  try {
    const result = await prisma.category.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.status(200).json({
      message: "success",
      result,
    });
  } catch (error) {
    logger.error(
      "controllers/kategory.controller.js:getcategoryById - " + error.message
    );
    return res.status(500).json({
      message: error.message,
      result: null,
    });
  }
};

export const createcategory = async (req, res) => {
  const { error, value } = categoryValidation(req.body);
  if (error != null) {
    return res.status(400).json({
      message: error.details[0].message,
      result: null,
    });
  }
  try {
    const result = await prisma.category.create({
      data: {
        kategoryName: value.kategoryName,
      },
    });
    return res.status(200).json({
      message: "success",
      result,
    });
  } catch (error) {
    logger.error(
      "controllers/kategory.controller.js:createcategory - " + error.message
    );
    return res.status(500).json({
      message: error.message,
      result: null,
    });
  }
};

export const updatecategory = async (req, res) => {
  const { error, value } = categoryValidation(req.body);
  if (error != null) {
    return res.status(400).json({
      message: error.details[0].message,
      result: null,
    });
  }
  try {
    const result = await prisma.category.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        kategoryName: value.kategoryName,
      },
    });
    return res.status(200).json({
      message: "success",
      result,
    });
  } catch (error) {
    logger.error(
      "controllers/kategory.controller.js:updatecategory - " + error.message
    );
    return res.status(500).json({
      message: error.message,
      result: null,
    });
  }
};

export const deletecategory = async (req, res) => {
  try {
    const result = await prisma.category.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.status(200).json({
      message: "success",
      result,
    });
  } catch (error) {
    logger.error(
      "controllers/kategory.controller.js:deletecategory - " + error.message
    );
    return res.status(500).json({
      message: error.message,
      result: null,
    });
  }
};
