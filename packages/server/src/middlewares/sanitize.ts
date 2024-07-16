import { NextFunction, Request, Response } from 'express'
import { JSDOM } from 'jsdom'
import DOMpurify from 'dompurify'

function sanitizeBody(req: Request, res: Response, next: NextFunction) {
    if (req.body) {
        // Initialize DOMPurify
        const window = new JSDOM('').window
        const purify = DOMpurify(window)

        Object.keys(req.body).forEach((key) => {
            if (typeof req.body[key] === 'string') {
                req.body[key] = purify.sanitize(req.body[key])
            }
        })
    }
    next()
}

export default sanitizeBody
