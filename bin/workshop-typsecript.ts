#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { WorkshopTypsecriptStack } from '../lib/workshop-typsecript-stack';

const env = { account: '207026233209', region: 'us-east-1'};
const app = new cdk.App();
new WorkshopTypsecriptStack(app, 'WorkshopTypsecriptStack', {env: env});
