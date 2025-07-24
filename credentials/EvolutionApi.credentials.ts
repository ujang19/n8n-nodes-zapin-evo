import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class EvolutionApi implements ICredentialType {
	name = 'evolutionApi';
			typeOptions: {
				password: true,
			},
                       description: 'Enter the instance or Global ApiKey of your Zapin EVO',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				apikey: '={{$credentials.apikey}}',
			},
		},
	};

       test: ICredentialTestRequest = {
               request: {
                       baseURL: 'https://api.zapin.tech',
                       url: '/instance/fetchInstances',
                       method: 'GET',
                       headers: {
                               apikey: '={{$credentials.apikey}}',
                       },
               },
       };
}
