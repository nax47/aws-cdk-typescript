#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { WorkshopTypsecriptStack } from '../lib/workshop-typsecript-stack';

const app = new cdk.App();
new WorkshopTypsecriptStack(app, 'WorkshopTypsecriptStack');
