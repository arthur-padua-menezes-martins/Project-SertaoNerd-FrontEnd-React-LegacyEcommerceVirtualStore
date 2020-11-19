export const fetchInfo = (action, ctx) => new Promise(action())
.then(response => { return ctx.store.dispatch(response) })
.catch(error => console.error(error))