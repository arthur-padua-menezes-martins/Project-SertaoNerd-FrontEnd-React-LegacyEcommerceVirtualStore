import Router from 'next/router'
import actions from '../redux/actions/products.js'

export default function (ctx) {
    if(ctx.isServer) {

    } else if(ctx.store) {
        const token = ctx.store.getState()
        if(!token) {
            Router.push('/account')
        }
    }
}