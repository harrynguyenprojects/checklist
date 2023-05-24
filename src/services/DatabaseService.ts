import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import RDSDataService from 'aws-sdk/clients/rdsdataservice';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    private rdsDataService: RDSDataService;

    constructor() {
        this.rdsDataService = new RDSDataService({
            region: environment.awsRegion,
            accessKeyId: environment.awsAccessKeyId,
            secretAccessKey: environment.awsSecretAccessKey
        });
    }

    async executeQuery(query: string): Promise<any> {
        const params = {
            secretArn: environment.awsSecretArn,
            resourceArn: environment.awsResourceArn,
            database: environment.awsDatabaseName,
            sql: query,
            includeResultMetadata: true
        };

        try {
            const response = await this.rdsDataService.executeStatement(params).promise();
            return response.records;
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }
}
