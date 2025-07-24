import {
	type IDataObject,
	INodeProperties,
	INodeTypeBaseDescription,
	WebhookType,
	type IWebhookFunctions,
	type IWebhookResponseData,
} from 'n8n-workflow';

export const BASE_TRIGGER_DESCRIPTION: INodeTypeBaseDescription = {
	displayName: 'Evolution API Trigger',
	name: 'evolutionApiTrigger',
	icon: 'file:evolutionapi.svg',
	group: ['trigger'],
	description: 'Handle Evolution API events via a single webhook, and filter events like WAHA Trigger',
};

export const TRIGGER_DESCRIPTION = {
	defaults: {
		name: 'Evolution API Trigger',
	},
	inputs: [],
	credentials: [],
	webhooks: [
		{
			name: 'default' as WebhookType,
			httpMethod: 'POST',
			responseMode: 'onReceived',
			path: 'evolution',
			isFullPath: false,
		},
	],
};

export const CONFIGURE_WEBHOOK_NOTE: INodeProperties = {
	displayName: 'Set Evolution API webhook to this URL: <b>Webhook URL</b>',
	name: 'operation',
	type: 'notice',
	typeOptions: { theme: 'info' },
	default: '',
};

function noteText(events: string[]): string {
	const parts = ['<b>Supported Events</b>:'];
	for (const event of events) {
		parts.push(`- ${event}`);
	}
	return parts.join('<br>');
}

export function makeEventNote(events: string[]): INodeProperties {
	return {
		displayName: noteText(events),
		name: 'operation',
		type: 'notice',
		typeOptions: { theme: 'info' },
		default: '',
	};
}

// Filtering event dan routing ke output sesuai index event
export function makeWebhookForEvents(events: string[]) {
	async function webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		const bodyData = this.getBodyData();
		const eventType = bodyData.event as string | undefined;
		
		// Log untuk debugging
		console.log('=== Evolution API Webhook Received ===');
		console.log('URL:', req.url);
		console.log('Event Type:', eventType);
		console.log('Body:', JSON.stringify(bodyData, null, 2));
		console.log('=====================================');
		
		// Jika event tidak didukung -> return kosong
		if (eventType === undefined || !events.includes(eventType)) {
			console.log('Event not supported or undefined:', eventType);
			return {};
		}
		
		const eventIndex: number = events.indexOf(eventType);
		const data = this.helpers.returnJsonArray(req.body as IDataObject);
		const empty: any[] = [];
		const workflowData = events.map(() => empty);
		workflowData[eventIndex] = data;
		
		console.log('Routing to output index:', eventIndex, 'for event:', eventType);
		return { workflowData };
	}
	return webhook;
}
