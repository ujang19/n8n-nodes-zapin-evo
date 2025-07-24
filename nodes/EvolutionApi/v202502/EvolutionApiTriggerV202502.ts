import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import {
	BASE_TRIGGER_DESCRIPTION,
	CONFIGURE_WEBHOOK_NOTE,
	makeEventNote,
	makeWebhookForEvents,
	TRIGGER_DESCRIPTION,
} from '../base/EvolutionApiTrigger.base';

// Daftar event Evolution API yang didukung (format sesuai dengan yang dikirim Evolution API)
// Semua event kecuali TYPEBOT_CHANGE_STATUS dan TYPEBOT_START
function getEvents(): string[] {
	return [
		'application.startup',
		'qrcode.updated',
		'connection.update',
		'messages.set',
		'messages.upsert',
		'messages.update',
		'messages.delete',
		'send.message',
		'contacts.set',
		'contacts.upsert',
		'contacts.update',
		'presence.update',
		'chats.set',
		'chats.update',
		'chats.upsert',
		'chats.delete',
		'groups.upsert',
		'groups.update',
		'group.participants.update',
		'new.token'
	];
}

const events = getEvents();
// Multiple outputs - satu untuk setiap event
const outputs = events.map(() => NodeConnectionType.Main);
const outputNames = events.map(event => event.replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase()));

export class EvolutionApiTriggerV202502 implements INodeType {
	description: INodeTypeDescription = {
		...BASE_TRIGGER_DESCRIPTION,
		...TRIGGER_DESCRIPTION,
		version: 202502,
		outputs: outputs,
		outputNames: outputNames,
		properties: [CONFIGURE_WEBHOOK_NOTE, makeEventNote(events)],
	};
	webhook = makeWebhookForEvents(events);
}
