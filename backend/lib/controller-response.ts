import { Response } from "express"

export const successResponse = (res: Response, message: string) => {
    res.status(200).json({ success: true, message })
}

export const errorResponse = (res: Response, message: string) => {
    res.status(400).json({ success: true, message })
}