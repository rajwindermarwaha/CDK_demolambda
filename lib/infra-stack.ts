import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'; 

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create lambda function
    const demolambda = new lambda.Function(this, 'demolambda', {
      runtime: lambda.Runtime.PYTHON_3_12,
      code: lambda.Code.fromAsset('../services/'),
      handler: 'lambda_function.lambda_handler',
      functionName: 'demolambda'
    });

    
  }
}
