class ClaimHub {
  constructor(contract, account) {
    this.contract = contract;
    this.account = account;
  }

  async deploy() {
    const response = await this.contract.deploy(this.account);

    return response;
  }

  async setClaim(owner, claimContent) {
    const transaction = await this.contract.methods.setClaim(owner, claimContent);

    await transaction.submit({}, this.account);

    const receipt = await transaction.receipt;

    return receipt;
  }

  async getClaim(owner) {
    const transaction = await this.contract.methods.getClaim(owner);

    const response = await transaction.submit({}, this.account);

    return response;
  }
}

exports.ClaimHub = ClaimHub;
