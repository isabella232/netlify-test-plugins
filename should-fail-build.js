module.exports = {
  onPreBuild({ utils }) {
    utils.build.failBuild("Whoops, something wennt wrong")
  },
}