class ENS {
  constructor(options = {}) {
    this.provider = options.provider || null;
    this.ensAddress = options.ensAddress || null;
  }

  async getName() {
    return { name: null };
  }

  name() {
    return {
      getAddress: async () => null
    };
  }
}

function getEnsAddress() {
  return null;
}

module.exports = ENS;
module.exports.default = ENS;
module.exports.getEnsAddress = getEnsAddress;
