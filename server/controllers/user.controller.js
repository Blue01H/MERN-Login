const extend = require('lodash/extend');
import User from '../models/user.model';
import errorHandler from '../helpers/dbErrorHandler'

const create = async (req, res) => {

    const user = new User(req.body)
    try {
        await user.save()
        return res.status(200).json({
            message: 'Successfully signed up!'
        })
    } catch(err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }

}

const list = async (req, res) => {

    try {
        let users = await User.find().select('name email updated create')
        res.json(users);
    } catch(err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }

}

const userById = async (req, res ,next, id) => {

    try {
        let user = await User.findById(id)
        if(!user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
        req.profile = user
        next()
    } catch(err) {
        return res.status(400).json({
            error: 'Could not Retrieve any user'
        })
    }

}

const read = (req, res) => {

    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)

}

const update = async (req, res) => {

    try {
        let user = req.profile
        user = extend(user, req.body)
        user.updated = Date.now()
        await user.save()
        user.hashed_password = undefined
        user.salt = undefined
        res.json(user)
    } catch(err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }

}

const remove = async (req, res) => {

    try {
        let user = req.profile
        let deleteUser = await user.remove()
        deleteUser.hashed_password = undefined
        deleteUser.sat = undefined
        res.json(deleteUser)
    } catch(err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }

}

export default {create, userById, read, list, remove, update}