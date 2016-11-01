// @flow

const RestClient = require('../../../api/RestClient')

module.exports = {
  command: 'dir [dirId]',
  description: 'Get or set the directory server id.\n',
  handler: (opts: {apiUrl: string, dirId?: string}) => {
    const {apiUrl, dirId} = opts
    const client = new RestClient({apiUrl})
    if (dirId) {
      client.setDirectoryId(dirId)
        .then(() => {
          console.log(`set directory to ${dirId}`)
        })
    } else {
      return client.getDirectoryId()
        .then(
          console.log,
          err => console.error(err.message)
        )
    }
  }
}
