import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import {
	BASE_TRIGGER_DESCRIPTION,
	CONFIGURE_WEBHOOK_NOTE,
	makeEventNote,
	makeWebhookForEvents,
	TRIGGER_DESCRIPTION,
} from '../base/EvolutionApiTrigger.base';

// ZAPIN Mini Trigger - hanya mendukung MESSAGES_UPSERT
function getEvents(): string[] {
	return ['messages.upsert'];
}

const events = getEvents();
// Single output untuk MESSAGES_UPSERT
const outputs = [NodeConnectionType.Main];
const outputNames = ['Messages Upsert'];

export class ZapinMiniTriggerV202502 implements INodeType {
	description: INodeTypeDescription = {
		...BASE_TRIGGER_DESCRIPTION,
		...TRIGGER_DESCRIPTION,
		displayName: 'ZAPIN Mini Trigger',
		name: 'zapinMiniTrigger',
		version: 202502,
		description: 'ZAPIN Mini Trigger untuk menerima event MESSAGES_UPSERT dari Evolution API',
		outputs: outputs,
		outputNames: outputNames,
		properties: [CONFIGURE_WEBHOOK_NOTE, makeEventNote(events)],
	};
	webhook = makeWebhookForEvents(events);
}
