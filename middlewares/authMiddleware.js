import JWT from "jsonwebtoken"

//Protected routes token based

export const requireSignIn = async (req, res. next) => {
    const decode = JWT.verify(req.headers.authorization, process.env.)
}