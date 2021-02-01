import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as ec2 from '@aws-cdk/aws-ec2';

export class WorkshopTypsecriptStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'WorkshopTypsecriptQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'WorkshopTypsecriptTopic');

    const bucket = new s3.Bucket(this, 'WorkshopBucket', {versioned: true});

    const instance = new ec2.Instance(this, 'WorkshopEC2', {
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: new ec2.LookupMachineImage({name: 'amzn2-ami-hvm-2.0.20210126.0-x86_64-gp2'}),
      vpc: ec2.Vpc.fromLookup(this,'WorkshopVPC',{isDefault: true})
    });

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
