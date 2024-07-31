import { Response } from "express"


export const statusResponse = (res: Response, status: number, message: string,) => {
    res.status(status).json({ message })
}
export const successResponse = (res: Response, message: string, status: number) => {
    res.status(status).json({ success: true, message })
}

export const errorResponse = (res: Response, message: string) => {
    res.status(400).json({ success: true, message })
}