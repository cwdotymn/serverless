'use strict';

const os = require('os');
const BbPromise = require('bluebird');

module.exports = {
  createDeploymentBucket() {
    // check if the bucket could be found beforehand
    if (this.deploymentBucket) {
      return BbPromise.resolve();
    }

    this.serverless.cli.log(`Creating new deployment bucket: ${this.deploymentBucketName}…`);

    // Validate - Check if bucket name contains "google", which is not allowed
    if (this.deploymentBucketName.indexOf('google') > -1) {
      throw new this.serverless.classes.Error('Google does not allow bucket names containing "google". Please change your service name to not include "google".');
    }

    return this.provider.request('storage', 'createBucket', this.deploymentBucketName)
      .then((data) => {
        this.deploymentBucket = data;
        return BbPromise.resolve();
      })
  },
};
