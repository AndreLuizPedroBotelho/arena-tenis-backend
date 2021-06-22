import rateLimit from 'express-rate-limit'

const minutesBlocked = 15 * 60 * 1000
const limiteRequest = 100

export const limiter = rateLimit({
  windowMs: minutesBlocked,
  max: limiteRequest,
  message: {
    message: "Too many accounts created from this IP, please try again after an 15 minutes"
  }
});

