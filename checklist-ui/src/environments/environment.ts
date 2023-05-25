// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  awsRegion: 'us-east-1f',
  awsAccessKeyId: 'AKIA3BFJXXL3WKBRB7WS',
  awsSecretAccessKey: 'ItyPxfCw/JAUNQfVWHxLkhVLRpFNTb0es9tTIQth',
  awsSecretArn: 'arn:aws:secretsmanager:us-east-1:758417701623:secret:checklist-svNO2H',
  awsResourceArn: 'arn:aws:rds:us-east-1:758417701623:db:checklist-1',
  awsDatabaseName: 'checklist-1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
